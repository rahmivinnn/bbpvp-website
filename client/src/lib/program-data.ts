import bbpvpClassroom from '@assets/unnamed (4)_1755321002006.webp';
import bbpvpForklift from '@assets/unnamed (3)_1755321002006.webp';
import bbpvpMeeting from '@assets/unnamed (2)_1755321002006.webp';
import bbpvpBuilding from '@assets/unnamed (5)_1755321002005.webp';
import bbpvpSeating from '@assets/unnamed (6)_1755321001978.webp';
import bbpvpEntrance from '@assets/unnamed (1)_1755321002007.webp';
import bbpvpCampus from '@assets/2025-07-03 (2)_1755321002006.webp';
import whatsapp1 from '@assets/WhatsApp Image 2025-08-16 at 11.06.44 AM_1755322269113.jpeg';
import whatsapp2 from '@assets/WhatsApp Image 2025-08-16 at 11.06.43 AM (1)_1755322269128.jpeg';
import whatsapp3 from '@assets/WhatsApp Image 2025-08-16 at 11.06.43 AM_1755322269129.jpeg';
import whatsapp4 from '@assets/WhatsApp Image 2025-08-16 at 11.06.42 AM_1755322269129.jpeg';
import whatsapp5 from '@assets/WhatsApp Image 2025-08-16 at 11.06.41 AM_1755322269130.jpeg';
import whatsapp6 from '@assets/WhatsApp Image 2025-08-16 at 11.06.40 AM (2)_1755322269130.jpeg';
import whatsapp7 from '@assets/WhatsApp Image 2025-08-16 at 11.06.40 AM (1)_1755322269130.jpeg';
import whatsapp8 from '@assets/WhatsApp Image 2025-08-16 at 11.06.40 AM_1755322269131.jpeg';
import whatsapp9 from '@assets/WhatsApp Image 2025-08-16 at 11.06.39 AM (1)_1755322269131.jpeg';
import whatsapp10 from '@assets/WhatsApp Image 2025-08-16 at 11.06.39 AM_1755322269131.jpeg';
import whatsapp11 from '@assets/WhatsApp Image 2025-08-16 at 11.06.38 AM_1755322269132.jpeg';
import whatsapp12 from '@assets/WhatsApp Image 2025-08-16 at 11.03.54 AM (1)_1755322269132.jpeg';

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
    title: 'Pelatihan Berbasis Kompetensi (PBK)',
    image: bbpvpClassroom,
    category: 'Pelatihan',
    categoryColor: 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400',
    icon: 'fas fa-graduation-cap',
    iconColor: 'text-primary-500',
    description: 'Program pelatihan gratis (dibiayai pemerintah) dengan seleksi berstandar industri dengan porsi praktik dominan.',
    content: `
      <p class="mb-4">Program pelatihan gratis yang dibiayai pemerintah dengan sistem seleksi berstandard industri.</p>
      <h4 class="font-semibold mb-2">Fitur Program:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Pelatihan intensif 4-8 minggu</li>
        <li>Porsi praktik dominan</li>
        <li>Instruktur berpengalaman industri</li>
        <li>Fasilitas workshop berstandar industri</li>
      </ul>
      <h4 class="font-semibold mb-2">Target Peserta:</h4>
      <p>Talenta muda, pencari kerja, dan pekerja industri yang ingin upskill/reskill</p>
    `
  },
  2: {
    id: 2,
    title: 'Bidang Keahlian Otomotif',
    image: bbpvpForklift,
    category: 'Otomotif',
    categoryColor: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
    icon: 'fas fa-car',
    iconColor: 'text-orange-500',
    description: 'Engine management & injeksi, chasis/suspensi, electrical, sepeda motor, tren EV (fundamental).',
    content: `
      <p class="mb-4">Bidang keahlian otomotif dengan teknologi terkini dan tren masa depan.</p>
      <h4 class="font-semibold mb-2">Materi Pelatihan:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Engine management & injeksi</li>
        <li>Chasis/suspensi</li>
        <li>Electrical system</li>
        <li>Sepeda motor</li>
        <li>Tren EV (fundamental)</li>
      </ul>
      <h4 class="font-semibold mb-2">Output:</h4>
      <p>Teknisi otomotif yang siap kerja dengan kompetensi terdepan</p>
    `
  },
  3: {
    id: 3,
    title: 'Bidang Keahlian Manufaktur',
    image: bbpvpForklift,
    category: 'Manufaktur',
    categoryColor: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
    icon: 'fas fa-industry',
    iconColor: 'text-green-500',
    description: 'Bubut-frais dasar, CNC milling & turning, CAD/CAM, metrologi, welding dasar.',
    content: `
      <p class="mb-4">Bidang manufaktur dengan peralatan modern dan teknologi industri 4.0.</p>
      <h4 class="font-semibold mb-2">Skill yang Dipelajari:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Bubut-frais dasar</li>
        <li>CNC milling & turning</li>
        <li>CAD/CAM</li>
        <li>Metrologi</li>
        <li>Welding dasar</li>
      </ul>
      <h4 class="font-semibold mb-2">Fasilitas:</h4>
      <p>Workshop berstandar industri dengan peralatan CNC modern</p>
    `
  },
  4: {
    id: 4,
    title: 'Bidang Keahlian Refrigerasi',
    image: bbpvpMeeting,
    category: 'Refrigerasi',
    categoryColor: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
    icon: 'fas fa-snowflake',
    iconColor: 'text-blue-500',
    description: 'AC split, chiller dasar, refrigerasi komersial, safe handling refrigerant.',
    content: `
      <p class="mb-4">Bidang refrigerasi dan tata udara dengan teknologi ramah lingkungan.</p>
      <h4 class="font-semibold mb-2">Materi Pelatihan:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>AC split</li>
        <li>Chiller dasar</li>
        <li>Refrigerasi komersial</li>
        <li>Safe handling refrigerant</li>
      </ul>
      <h4 class="font-semibold mb-2">Sertifikasi:</h4>
      <p>Teknisi AC dan refrigerasi berlisensi dengan standar K3 industri</p>
    `
  },
  5: {
    id: 5,
    title: 'Bidang Keahlian TIK & Kreatif',
    image: bbpvpClassroom,
    category: 'TIK',
    categoryColor: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
    icon: 'fas fa-laptop-code',
    iconColor: 'text-purple-500',
    description: 'IT support, desain grafis cetak & media sosial, videografi drone, konten digital.',
    content: `
      <p class="mb-4">Bidang TIK dan ekonomi kreatif dengan teknologi digital masa kini.</p>
      <h4 class="font-semibold mb-2">Program yang Tersedia:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>IT support</li>
        <li>Desain grafis cetak & media sosial</li>
        <li>Videografi drone</li>
        <li>Konten digital</li>
      </ul>
      <h4 class="font-semibold mb-2">Outcome:</h4>
      <p>Creative digital specialist dan IT professional yang siap industri</p>
    `
  },
  6: {
    id: 6,
    title: 'Sertifikasi Profesi (BNSP)',
    image: bbpvpMeeting,
    category: 'Sertifikasi',
    categoryColor: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400',
    icon: 'fas fa-certificate',
    iconColor: 'text-indigo-500',
    description: 'Skema kejuruan inti dengan TUK mitra tersebar di Jawa Barat untuk pengakuan kompetensi merata.',
    content: `
      <p class="mb-4">Sertifikasi profesi berstandar BNSP untuk pengakuan kompetensi nasional.</p>
      <h4 class="font-semibold mb-2">Layanan Sertifikasi:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Skema kejuruan inti</li>
        <li>TUK mitra tersebar di Jawa Barat</li>
        <li>Uji kompetensi berstandar nasional</li>
        <li>Sertifikat BNSP yang diakui industri</li>
      </ul>
      <h4 class="font-semibold mb-2">Keunggulan:</h4>
      <p>Pengakuan kompetensi merata dengan standar nasional dan internasional</p>
    `
  },
  7: {
    id: 7,
    title: 'Job Matching & Job Fair',
    image: bbpvpForklift,
    category: 'Karier',
    categoryColor: 'bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400',
    icon: 'fas fa-handshake',
    iconColor: 'text-teal-500',
    description: 'Kurasi lowongan & sesi rekrutmen cepat untuk job matching yang efektif melalui career service.',
    content: `
      <p class="mb-4">Layanan penempatan kerja dan job matching yang efektif dengan mitra industri.</p>
      <h4 class="font-semibold mb-2">Fitur Layanan:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Kurasi lowongan sesuai kompetensi</li>
        <li>Sesi rekrutmen cepat</li>
        <li>Career service dan konseling karier</li>
        <li>Job fair berkurasi</li>
      </ul>
      <h4 class="font-semibold mb-2">Target:</h4>
      <p>Job matching efektif dengan tingkat penempatan kerja tinggi</p>
    `
  },
  8: {
    id: 8,
    title: 'Kelas Kolaborasi DUDI',
    image: bbpvpClassroom,
    category: 'Kolaborasi',
    categoryColor: 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400',
    icon: 'fas fa-users',
    iconColor: 'text-pink-500',
    description: 'Kurikulum adaptif sesuai demand dengan instruktur tamu dari industri untuk relevansi maksimal.',
    content: `
      <p class="mb-4">Program kolaborasi strategis dengan Dunia Usaha dan Dunia Industri (DUDI).</p>
      <h4 class="font-semibold mb-2">Keunggulan Program:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Kurikulum adaptif sesuai demand industri</li>
        <li>Instruktur tamu dari praktisi industri</li>
        <li>Link and match langsung dengan DUDI</li>
        <li>Real project dari industri partner</li>
      </ul>
      <h4 class="font-semibold mb-2">Outcome:</h4>
      <p>Lulusan dengan kompetensi yang langsung relevan dengan kebutuhan industri</p>
    `
  },
  9: {
    id: 9,
    title: 'Inkubasi & Showcase',
    image: bbpvpSeating,
    category: 'Wirausaha',
    categoryColor: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-400',
    icon: 'fas fa-lightbulb',
    iconColor: 'text-cyan-500',
    description: 'Pameran karya, demo produk, pitching UMKM/entry level creator untuk pengembangan kewirausahaan.',
    content: `
      <p class="mb-4">Program inkubasi wirausaha dan showcase karya peserta pelatihan.</p>
      <h4 class="font-semibold mb-2">Kegiatan Inkubasi:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Pameran karya peserta</li>
        <li>Demo produk dan prototype</li>
        <li>Pitching UMKM dan startup</li>
        <li>Entry level creator showcase</li>
      </ul>
      <h4 class="font-semibold mb-2">Dukungan:</h4>
      <p>Mentoring bisnis dan akses ke network investor dan mitra usaha</p>
    `
  },
  10: {
    id: 10,
    title: 'PBL (Project Based Learning)',
    image: bbpvpMeeting,
    category: 'Metodologi',
    categoryColor: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400',
    icon: 'fas fa-project-diagram',
    iconColor: 'text-yellow-500',
    description: 'Pembelajaran berbasis proyek untuk mengembangkan kompetensi praktis dan problem solving.',
    content: `
      <p class="mb-4">Metodologi pembelajaran berbasis proyek untuk hasil maksimal dan aplikatif.</p>
      <h4 class="font-semibold mb-2">Metode PBL:</h4>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li>Real project dari industri</li>
        <li>Problem-based learning approach</li>
        <li>Collaborative team work</li>
        <li>Presentation dan portfolio building</li>
      </ul>
      <h4 class="font-semibold mb-2">Outcome:</h4>
      <p>Peserta memiliki portofolio nyata dan kompetensi problem solving yang teruji</p>
    `
  }
};

export const galleryData = [
  {
    id: 1,
    title: 'Kegiatan TIK Desain Grafis',
    description: 'Pelatihan desain grafis cetak & media sosial',
    image: bbpvpClassroom,
    category: 'pelatihan'
  },
  {
    id: 2,
    title: 'Operator Forklift',
    description: 'Pelatihan operator forklift berstandar industri',
    image: bbpvpForklift,
    category: 'workshop'
  },
  {
    id: 3,
    title: 'Smart Tourism',
    description: 'Program pelatihan smart tourism dan pariwisata digital',
    image: bbpvpEntrance,
    category: 'seminar'
  },
  {
    id: 4,
    title: 'Workshop Berstandar Industri',
    description: 'Fasilitas modern untuk pembelajaran praktik',
    image: bbpvpBuilding,
    category: 'fasilitas'
  },
  {
    id: 5,
    title: 'Lab Komputer & TIK',
    description: 'Laboratorium komputer dengan teknologi terkini',
    image: bbpvpMeeting,
    category: 'pelatihan'
  },
  {
    id: 6,
    title: 'Boarding & Non-Boarding',
    description: 'Fasilitas asrama dan kafetaria untuk peserta',
    image: bbpvpSeating,
    category: 'fasilitas'
  },
  {
    id: 7,
    title: 'Area LSP/TUK',
    description: 'Tempat Uji Kompetensi berstandar BNSP',
    image: bbpvpForklift,
    category: 'workshop'
  },
  {
    id: 8,
    title: 'Aula Event & Job Fair',
    description: 'Fasilitas untuk event besar dan job fair',
    image: bbpvpCampus,
    category: 'seminar'
  },
  {
    id: 9,
    title: 'Kegiatan Pelatihan Vokasi',
    description: 'Suasana pembelajaran praktik di BBPVP Bandung',
    image: whatsapp1,
    category: 'pelatihan'
  },
  {
    id: 10,
    title: 'Workshop Teknologi Industri',
    description: 'Pelatihan teknologi industri modern',
    image: whatsapp2,
    category: 'workshop'
  },
  {
    id: 11,
    title: 'Sesi Pembelajaran Interaktif',
    description: 'Kegiatan pembelajaran interaktif dengan instruktur',
    image: whatsapp3,
    category: 'pelatihan'
  },
  {
    id: 12,
    title: 'Fasilitas Praktikum Modern',
    description: 'Ruang praktikum dengan peralatan modern',
    image: whatsapp4,
    category: 'fasilitas'
  },
  {
    id: 13,
    title: 'Program PBL (Project Based Learning)',
    description: 'Implementasi Project Based Learning di BBPVP',
    image: whatsapp5,
    category: 'pelatihan'
  },
  {
    id: 14,
    title: 'Seminar dan Sosialisasi',
    description: 'Kegiatan seminar dan sosialisasi program',
    image: whatsapp6,
    category: 'seminar'
  },
  {
    id: 15,
    title: 'Kegiatan Sertifikasi BNSP',
    description: 'Proses sertifikasi kompetensi BNSP',
    image: whatsapp7,
    category: 'workshop'
  },
  {
    id: 16,
    title: 'Area Pembelajaran Outdoor',
    description: 'Kegiatan pembelajaran di area outdoor',
    image: whatsapp8,
    category: 'fasilitas'
  },
  {
    id: 17,
    title: 'Kelas Teori Interaktif',
    description: 'Suasana kelas teori dengan metode interaktif',
    image: whatsapp9,
    category: 'pelatihan'
  },
  {
    id: 18,
    title: 'Workshop Praktik Industri',
    description: 'Kegiatan workshop praktik berstandar industri',
    image: whatsapp10,
    category: 'workshop'
  },
  {
    id: 19,
    title: 'Job Fair dan Career Expo',
    description: 'Kegiatan job fair dan career expo BBPVP',
    image: whatsapp11,
    category: 'seminar'
  },
  {
    id: 20,
    title: 'Fasilitas Penunjang Pelatihan',
    description: 'Berbagai fasilitas penunjang kegiatan pelatihan',
    image: whatsapp12,
    category: 'fasilitas'
  }
];