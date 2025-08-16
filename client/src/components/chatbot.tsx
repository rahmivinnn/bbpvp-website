import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Halo! Saya asisten virtual BBPVP Bandung. Ada yang bisa saya bantu mengenai program pelatihan kami?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    'Program pelatihan tersedia',
    'Cara mendaftar',
    'Informasi fasilitas',
    'Sertifikasi BNSP',
    'Kontak BBPVP'
  ];

  const botResponses: Record<string, string> = {
    'program pelatihan tersedia': 'BBPVP Bandung menyediakan berbagai program pelatihan:\n\n• Pelatihan Berbasis Kompetensi (PBK) - Gratis\n• Otomotif (Engine Management, EV)\n• Manufaktur (CNC, Welding, CAD/CAM)\n• Refrigerasi & Tata Udara\n• TIK & Kreatif Digital\n• Project Based Learning (PBL)\n\nMau tahu lebih detail program mana?',
    
    'cara mendaftar': 'Pendaftaran BBPVP Bandung sangat mudah:\n\n1️⃣ Daftar online di website atau langsung ke lokasi\n2️⃣ Isi formulir dan lengkapi persyaratan\n3️⃣ Ikuti seleksi administrasi & tes\n4️⃣ Pengumuman hasil seleksi\n5️⃣ Mulai pelatihan intensif 4-8 minggu\n\nUntuk forklift, silakan isi GForm: https://forms.gle/EWFS4zHL26SVsV1w8',
    
    'informasi fasilitas': 'Fasilitas BBPVP Bandung lengkap dan modern:\n\n🏭 Workshop berstandar industri\n💻 Lab komputer & TIK terkini\n🏫 Kelas teori dengan audio visual\n🏠 Boarding & non-boarding\n🍽️ Kafetaria\n📅 Aula untuk event & job fair\n🏆 Area LSP/TUK untuk sertifikasi\n🎨 Area showcase karya peserta',
    
    'sertifikasi bnsp': 'Sertifikasi BNSP di BBPVP Bandung:\n\n✅ Sertifikat profesi yang diakui industri\n✅ Skema kejuruan inti tersedia\n✅ TUK (Tempat Uji Kompetensi) terakreditasi\n✅ TUK mitra tersebar di Jawa Barat\n✅ Asesor bersertifikat dan berpengalaman\n\nSertifikat BNSP meningkatkan peluang kerja Anda!',
    
    'kontak bbpvp': 'Hubungi BBPVP Bandung:\n\n📍 Alamat:\nJl. Jenderal Gatot Subroto No. 170\nKelurahan Gumuruh, Kecamatan Batununggal\nKota Bandung, Jawa Barat 40275\n\n📞 Telp: 022-7312564\n📱 Call Center: 1500630\n📧 Email: info@bbpvpbandung.kemnaker.go.id\n\n🕒 Jam Operasional: Senin-Jumat 08:00-16:00'
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string = inputText) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const lowercaseText = text.toLowerCase();
      let response = '';

      // Find matching response
      for (const [key, value] of Object.entries(botResponses)) {
        if (lowercaseText.includes(key.toLowerCase()) || 
            key.toLowerCase().includes(lowercaseText)) {
          response = value;
          break;
        }
      }

      // Default responses
      if (!response) {
        if (lowercaseText.includes('halo') || lowercaseText.includes('hai')) {
          response = 'Halo! Selamat datang di BBPVP Bandung. Saya siap membantu Anda dengan informasi pelatihan vokasi. Ada yang ingin ditanyakan?';
        } else if (lowercaseText.includes('terima kasih')) {
          response = 'Sama-sama! Senang bisa membantu. Jangan ragu untuk bertanya jika butuh informasi lebih lanjut tentang BBPVP Bandung. 😊';
        } else {
          response = 'Maaf, saya belum bisa memahami pertanyaan Anda. Silakan pilih topik di bawah atau tanyakan tentang:\n\n• Program pelatihan\n• Cara pendaftaran\n• Fasilitas\n• Sertifikasi BNSP\n• Informasi kontak\n\nAtau hubungi langsung call center: 1500630';
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        style={{
          transform: isOpen ? 'scale(0) rotate(180deg)' : 'scale(1) rotate(0deg)',
        }}
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm">BBPVP Assistant</h3>
              <p className="text-xs opacity-80">Online sekarang</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                message.isBot 
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-sm' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm'
              }`}>
                <div className="flex items-start gap-2">
                  {message.isBot && (
                    <div className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                  <div className="whitespace-pre-wrap leading-relaxed">{message.text}</div>
                </div>
                <div className={`text-xs mt-1 opacity-60 ${message.isBot ? 'text-left' : 'text-right'}`}>
                  {message.timestamp.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl rounded-bl-sm">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Bot className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {!isTyping && (
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {quickReplies.slice(0, 3).map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(reply)}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs transition-colors duration-200"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ketik pertanyaan Anda..."
              className="flex-1 px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              disabled={isTyping}
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputText.trim() || isTyping}
              className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}