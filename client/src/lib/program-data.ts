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
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
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
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
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
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
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
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
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
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
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
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
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
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
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
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
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
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
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
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
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
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
    category: 'pelatihan'
  },
  {
    id: 2,
    title: 'Operator Forklift',
    description: 'Pelatihan operator forklift berstandar industri',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
    category: 'workshop'
  },
  {
    id: 3,
    title: 'Smart Tourism',
    description: 'Program pelatihan smart tourism dan pariwisata digital',
    image: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
    category: 'seminar'
  },
  {
    id: 4,
    title: 'Workshop Berstandar Industri',
    description: 'Fasilitas modern untuk pembelajaran praktik',
    image: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
    category: 'fasilitas'
  },
  {
    id: 5,
    title: 'Lab Komputer & TIK',
    description: 'Laboratorium komputer dengan teknologi terkini',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
    category: 'pelatihan'
  },
  {
    id: 6,
    title: 'Boarding & Non-Boarding',
    description: 'Fasilitas asrama dan kafetaria untuk peserta',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
    category: 'fasilitas'
  },
  {
    id: 7,
    title: 'Area LSP/TUK',
    description: 'Tempat Uji Kompetensi berstandar BNSP',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
    category: 'workshop'
  },
  {
    id: 8,
    title: 'Aula Event & Job Fair',
    description: 'Fasilitas untuk event besar dan job fair',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
    category: 'seminar'
  }
];