export interface ProgramData {
  id: number;
  title: string;
  image: string;
  category: string;
  categoryColor: string;
  icon: string;
  iconColor: string;
  description: string;
  content: string;
}

export const programData: Record<number, ProgramData> = {
  1: {
    id: 1,
    title: 'Pelatihan Guru Vokasi',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
    category: 'Pendidikan',
    categoryColor: 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400',
    icon: 'fas fa-chalkboard-teacher',
    iconColor: 'text-primary-500',
    description: 'Meningkatkan kompetensi guru dalam pembelajaran vokasi yang inovatif dan sesuai standar industri modern.',
    content: `
      <p class="mb-4">Program pelatihan komprehensif untuk meningkatkan kompetensi guru vokasi dalam pembelajaran yang inovatif dan sesuai standar industri modern.</p>
      <h4 class="font-semibold mb-2">Materi Pelatihan:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Metodologi pembelajaran vokasi terkini</li>
        <li>Teknologi pembelajaran digital</li>
        <li>Penilaian berbasis kompetensi</li>
        <li>Keterampilan industri 4.0</li>
      </ul>
      <h4 class="font-semibold mb-2">Target Peserta:</h4>
      <p>Guru SMK, instruktur pelatihan, dan tenaga pendidik vokasi</p>
    `
  },
  2: {
    id: 2,
    title: 'Workshop Kurikulum Industri 4.0',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
    category: 'Teknologi',
    categoryColor: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
    icon: 'fas fa-cogs',
    iconColor: 'text-orange-500',
    description: 'Pengembangan kurikulum yang adaptif dengan perkembangan teknologi industri 4.0 dan revolusi digital.',
    content: `
      <p class="mb-4">Workshop pengembangan kurikulum yang adaptif dengan perkembangan teknologi industri 4.0 dan revolusi digital.</p>
      <h4 class="font-semibold mb-2">Fokus Workshop:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Analisis kebutuhan industri digital</li>
        <li>Desain kurikulum berbasis teknologi</li>
        <li>Integrasi AI dan IoT dalam pembelajaran</li>
        <li>Evaluasi dan penyempurnaan kurikulum</li>
      </ul>
      <h4 class="font-semibold mb-2">Output:</h4>
      <p>Kurikulum yang siap implementasi dan sesuai standar industri 4.0</p>
    `
  },
  3: {
    id: 3,
    title: 'Seminar Kewirausahaan Siswa',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
    category: 'Bisnis',
    categoryColor: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
    icon: 'fas fa-lightbulb',
    iconColor: 'text-green-500',
    description: 'Membangun jiwa entrepreneurship siswa melalui pelatihan bisnis dan pengembangan ide kreatif.',
    content: `
      <p class="mb-4">Program seminar yang dirancang khusus untuk membangun jiwa entrepreneurship siswa melalui pelatihan bisnis dan pengembangan ide kreatif.</p>
      <h4 class="font-semibold mb-2">Materi Seminar:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Fundamentals of entrepreneurship</li>
        <li>Business model canvas</li>
        <li>Marketing dan strategi penjualan</li>
        <li>Financial literacy untuk entrepreneur</li>
        <li>Digital marketing dan e-commerce</li>
      </ul>
      <h4 class="font-semibold mb-2">Outcome:</h4>
      <p>Siswa memiliki pemahaman dasar wirausaha dan mampu mengembangkan ide bisnis sederhana</p>
    `
  },
  4: {
    id: 4,
    title: 'Pelatihan Digital Skills Mahasiswa',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
    category: 'Digital',
    categoryColor: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
    icon: 'fas fa-laptop-code',
    iconColor: 'text-purple-500',
    description: 'Mengembangkan kemampuan digital mahasiswa untuk menghadapi tantangan era digitalisasi.',
    content: `
      <p class="mb-4">Program pelatihan intensif untuk mengembangkan kemampuan digital mahasiswa agar siap menghadapi tantangan era digitalisasi.</p>
      <h4 class="font-semibold mb-2">Skill yang Dipelajari:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Programming dasar (Python, JavaScript)</li>
        <li>Data analysis dan visualization</li>
        <li>Digital marketing dan social media</li>
        <li>Cloud computing fundamentals</li>
        <li>UI/UX design principles</li>
      </ul>
      <h4 class="font-semibold mb-2">Sertifikasi:</h4>
      <p>Peserta akan mendapatkan sertifikat digital skills yang diakui industri</p>
    `
  },
  5: {
    id: 5,
    title: 'Workshop Safety & Quality Control',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
    category: 'Keselamatan',
    categoryColor: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400',
    icon: 'fas fa-hard-hat',
    iconColor: 'text-red-500',
    description: 'Pelatihan standar keselamatan kerja dan pengendalian kualitas sesuai regulasi industri.',
    content: `
      <p class="mb-4">Workshop komprehensif tentang standar keselamatan kerja dan pengendalian kualitas sesuai dengan regulasi industri terkini.</p>
      <h4 class="font-semibold mb-2">Materi Workshop:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>ISO 45001 - Occupational Health & Safety</li>
        <li>ISO 9001 - Quality Management System</li>
        <li>Risk assessment dan hazard identification</li>
        <li>Emergency response procedures</li>
        <li>Quality control tools dan techniques</li>
      </ul>
      <h4 class="font-semibold mb-2">Peserta:</h4>
      <p>Supervisor, manager operasional, dan petugas keselamatan kerja</p>
    `
  },
  6: {
    id: 6,
    title: 'Training Leadership & Manajemen Sekolah',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
    category: 'Manajemen',
    categoryColor: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400',
    icon: 'fas fa-users',
    iconColor: 'text-indigo-500',
    description: 'Mengembangkan kemampuan kepemimpinan dan manajemen untuk pengelolaan institusi pendidikan.',
    content: `
      <p class="mb-4">Program training untuk mengembangkan kemampuan kepemimpinan dan manajemen dalam pengelolaan institusi pendidikan vokasi.</p>
      <h4 class="font-semibold mb-2">Modul Training:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Strategic leadership dalam pendidikan</li>
        <li>Change management dan transformasi digital</li>
        <li>Financial management untuk institusi pendidikan</li>
        <li>Human resource development</li>
        <li>Stakeholder management</li>
      </ul>
      <h4 class="font-semibold mb-2">Target:</h4>
      <p>Kepala sekolah, wakil kepala sekolah, dan staff manajemen pendidikan</p>
    `
  },
  7: {
    id: 7,
    title: 'Program Magang Industri Terpadu',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
    category: 'Industri',
    categoryColor: 'bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400',
    icon: 'fas fa-industry',
    iconColor: 'text-teal-500',
    description: 'Program magang terintegrasi dengan industri untuk pengalaman kerja langsung dan kompetensi praktis.',
    content: `
      <p class="mb-4">Program magang terintegrasi dengan berbagai industri untuk memberikan pengalaman kerja langsung dan mengembangkan kompetensi praktis.</p>
      <h4 class="font-semibold mb-2">Fitur Program:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Penempatan di industri partner terpilih</li>
        <li>Mentoring dari praktisi berpengalaman</li>
        <li>Project-based learning</li>
        <li>Evaluasi kompetensi berkala</li>
        <li>Sertifikat industri</li>
      </ul>
      <h4 class="font-semibold mb-2">Durasi:</h4>
      <p>3-6 bulan dengan rotasi departemen sesuai bidang keahlian</p>
    `
  },
  8: {
    id: 8,
    title: 'Seminar Internasional Pendidikan Vokasi',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
    category: 'Global',
    categoryColor: 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400',
    icon: 'fas fa-globe',
    iconColor: 'text-pink-500',
    description: 'Forum internasional untuk berbagi praktik terbaik dan inovasi dalam pendidikan vokasi global.',
    content: `
      <p class="mb-4">Forum internasional bergengsi yang menghadirkan para ahli pendidikan vokasi dari berbagai negara untuk berbagi praktik terbaik dan inovasi.</p>
      <h4 class="font-semibold mb-2">Tema Utama:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Future of vocational education</li>
        <li>Technology integration in TVET</li>
        <li>Industry-education partnership models</li>
        <li>Skills for sustainable development</li>
        <li>Global workforce mobility</li>
      </ul>
      <h4 class="font-semibold mb-2">Pembicara:</h4>
      <p>Experts dari UNESCO, UNEVOC, dan institusi pendidikan vokasi terkemuka dunia</p>
    `
  },
  9: {
    id: 9,
    title: 'Pelatihan Laboratorium & Workshop Praktik',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
    category: 'Lab',
    categoryColor: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-400',
    icon: 'fas fa-microscope',
    iconColor: 'text-cyan-500',
    description: 'Pelatihan praktis menggunakan peralatan laboratorium modern untuk pengembangan keterampilan teknis.',
    content: `
      <p class="mb-4">Program pelatihan praktis intensif menggunakan peralatan laboratorium dan workshop modern untuk pengembangan keterampilan teknis tingkat tinggi.</p>
      <h4 class="font-semibold mb-2">Fasilitas Laboratory:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Computer-aided design (CAD) lab</li>
        <li>Automation dan robotics lab</li>
        <li>Quality testing equipment</li>
        <li>3D printing dan prototyping</li>
        <li>Advanced manufacturing tools</li>
      </ul>
      <h4 class="font-semibold mb-2">Kompetensi:</h4>
      <p>Hands-on experience dengan teknologi industri terdepan</p>
    `
  },
  10: {
    id: 10,
    title: 'Coaching Guru & Tenaga Pendidik',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
    category: 'Coaching',
    categoryColor: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400',
    icon: 'fas fa-user-graduate',
    iconColor: 'text-yellow-500',
    description: 'Program pendampingan dan coaching untuk meningkatkan profesionalisme guru dan tenaga pendidik.',
    content: `
      <p class="mb-4">Program pendampingan dan coaching berkelanjutan untuk meningkatkan profesionalisme guru dan tenaga pendidik dalam menjalankan tugas pendidikan.</p>
      <h4 class="font-semibold mb-2">Aspek Coaching:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Pedagogy dan andragogy modern</li>
        <li>Classroom management techniques</li>
        <li>Student engagement strategies</li>
        <li>Assessment dan evaluation methods</li>
        <li>Professional development planning</li>
      </ul>
      <h4 class="font-semibold mb-2">Metodologi:</h4>
      <p>One-on-one coaching, peer learning, dan action research</p>
    `
  }
};

export const galleryData = [
  {
    id: 1,
    title: 'Pelatihan Guru Vokasi',
    description: 'Sesi pembelajaran interaktif',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
    category: 'pelatihan'
  },
  {
    id: 2,
    title: 'Workshop Siswa',
    description: 'Praktik langsung dengan peralatan modern',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
    category: 'workshop'
  },
  {
    id: 3,
    title: 'Seminar Tahunan',
    description: 'Pembicara utama menyampaikan materi terkini',
    image: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
    category: 'seminar'
  },
  {
    id: 4,
    title: 'Laboratorium Praktik',
    description: 'Fasilitas modern untuk pembelajaran',
    image: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
    category: 'fasilitas'
  },
  {
    id: 5,
    title: 'Kegiatan Outdoor',
    description: 'Team building dan pelatihan lapangan',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
    category: 'pelatihan'
  },
  {
    id: 6,
    title: 'Staff dan Pengajar',
    description: 'Tim profesional BBPVP Bandung',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
    category: 'fasilitas'
  },
  {
    id: 7,
    title: 'Program Magang',
    description: 'Mahasiswa praktik di industri',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
    category: 'workshop'
  },
  {
    id: 8,
    title: 'Kegiatan CSR',
    description: 'Program tanggung jawab sosial BBPVP',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
    category: 'seminar'
  }
];
