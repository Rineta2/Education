import { FaSchoolCircleCheck, FaUsersRays } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import { LuActivity } from "react-icons/lu";
import { FaUserGraduate, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { SiSmartthings, SiStudyverse, SiGmail } from "react-icons/si";
import { FcWorkflow } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineVerified } from "react-icons/md";

import swiper1 from '@/components/assets/Swiper/swipper1.jpg'
import swiper2 from '@/components/assets/Swiper/swipper2.jpg'
import swiper3 from '@/components/assets/Swiper/swipper3.jpg'
import swiper4 from '@/components/assets/Swiper/swipper4.jpg'

import sambutanImg from '@/components/assets/Kepsek/kepsek.jpg'

import prestasi1 from '@/components/assets/Prestasi/prestasi1.jpg'
import prestasi2 from '@/components/assets/Prestasi/prestasi2.jpg'
import prestasi3 from '@/components/assets/Prestasi/prestasi3.jpg'

import berita1 from '@/components/assets/Berita/berita1.jpg'
import berita2 from '@/components/assets/Berita/berita2.jpg'
import berita3 from '@/components/assets/Berita/berita3.jpg'
import berita4 from '@/components/assets/Berita/berita4.jpg'
import berita5 from '@/components/assets/Berita/berita5.jpg'

import banner from '@/components/assets/Banner/banner.png'
import poster from '@/components/assets/Banner/poster.png'

import gallery1 from '@/components/assets/Gallery/gallery1.jpg'
import gallery2 from '@/components/assets/Gallery/gallery2.jpg'
import gallery3 from '@/components/assets/Gallery/gallery3.jpg'
import gallery4 from '@/components/assets/Gallery/gallery4.jpg'
import gallery5 from '@/components/assets/Gallery/gallery5.jpg'
import gallery6 from '@/components/assets/Gallery/gallery6.jpg'
import gallery7 from '@/components/assets/Gallery/gallery7.jpg'
import gallery8 from '@/components/assets/Gallery/gallery8.jpg'

import profile from '@/components/assets/Profile/profile.jpg'

export const megaMenu1 = [
  {
    id: 1,
    icon: <FaSchoolCircleCheck />,
    title: 'Kepala Sekolah',
    path: '/kepsek',
  },

  {
    id: 2,
    icon: <FaSchoolCircleCheck />,
    title: 'Visi & Misi',
    path: '/visimisi',
  },

  {
    id: 3,
    icon: <FaSchoolCircleCheck />,
    title: 'Prestasi',
    path: '/prestasi',
  },

  {
    id: 4,
    icon: <FaSchoolCircleCheck />,
    title: 'Sarana & Prasana',
    path: '/sarana',
  },
]

export const megaMenu2 = [
  {
    id: 1,
    icon: <FaSchoolCircleCheck />,
    title: 'Guru',
    path: '/guru',
  },

  {
    id: 2,
    icon: <FaSchoolCircleCheck />,
    title: 'Tenaga Kependidikan',
    path: '/tenagakependidikan',
  },

  {
    id: 3,
    icon: <FaSchoolCircleCheck />,
    title: 'Gallery',
    path: '/gallery',
  }
]

export const megaMenu3 = [
  {
    id: 1,
    icon: <FaSchoolCircleCheck />,
    title: 'Data Siswa',
    path: '/datasiswa',
  },

  {
    id: 2,
    icon: <FaSchoolCircleCheck />,
    title: 'Organisasi & Ekskul',
    path: '/ekskul',
  },

  {
    id: 3,
    icon: <FaSchoolCircleCheck />,
    title: 'Sejarah Sekolah',
    path: '/sejarah',
  },
]

export const swiper = [
  {
    id: 1,
    img: swiper1,
  },

  {
    id: 2,
    img: swiper2,
  },

  {
    id: 3,
    img: swiper3,
  },

  {
    id: 4,
    img: swiper4,
  }
]

export const home = [
  {
    id: 1,
    icons: <FaUserGraduate />,
    title: 'Karakter',
  },

  {
    id: 2,
    icons: <GrAchievement />,
    title: 'Prestasi',
  },

  {
    id: 3,
    icons: <LuActivity />,
    title: 'Ekstrakurikuler',
  },

  {
    id: 4,
    icons: <FaSchoolCircleCheck />,
    title: 'Services',
  },

  {
    id: 5,
    icons: <SiSmartthings />,
    title: 'Kepemimpinan',
  }
]

export const sambutan = [
  {
    img: sambutanImg,
    title: 'Sambutan Kepala Sekolah',
    desc: "Assalamualaikum warrahmatullahi wabarakaatuh Alhamdulillah puji syukur kehadirat Allah SWT atas limpahan nikmat dan rahmat-Nya kepada kita semua. Sholawat dan salam senantiasa tercurah kepada Rasulullah saw berserta keluarga, sahabat dan ummatnya. Dengan rasa syukur dan bahagia kami sampaikan bahwasanya website SD Plus Al-Amin yaitu www.sdplusalamin.sch.id sudah mengalami pembaharuan dan penambahan fitur guna mempermudah penyebaran informasi dan sarana komunikasi antara sekolah, orangtua siswa dan masayarakat umum. Website ini juga sebagai langkah inovatif bagi kami dalam memenuhi kebutuhan publik di era globalisasi ini. Kami berharap website ini dapat memberikan manfaat yang luas bagi segenap civitas akademika SD Plus Al Amin khususnya dan masayarakat pada umumnya.  Demikian sambutan ini semoga website ini menambah erat silaturahim kita. Terimakasih kepada pengurus Yayasan Islam HM Nibih Al-Amin, manajemen unit SD dan segenap guru dan staf. Wassalamualaikum warrahmatullahi wabarakaatuh",
    name: "Muhammad Al-Amin",
    jabatan: "Kepala Sekolah",
  }
]

export const goals = [
  {
    title: 'Membangun Masa Depan Melalui Pendidikan',
    desc: "Pendidikan bukanlah sekadar perjalanan akademis, tetapi merupakan fondasi bagi pembangunan individu dan masyarakat secara keseluruhan. Dalam era yang terus berkembang dan kompleks ini, tujuan pendidikan tidak hanya terbatas pada transfer pengetahuan, tetapi juga meliputi pengembangan keterampilan, pembentukan karakter, dan pemajuan nilai-nilai kemanusiaan",
  }
]

export const goalsId = [
  {
    id: "1",
    icons: <SiStudyverse />,
    title: 'Pendidikan',
    desc: "Kunci menuju kesuksesan dan transformasi diri. Ia membuka pintu peluang dan membentuk karakter kita untuk menciptakan masa depan yang gemilang.",
  },

  {
    id: "2",
    icons: <FaUsersRays />,
    title: 'Kerja Sama',
    desc: "Pelatihan kerjasama tim dalam pendidikan bertujuan untuk memperkuat kolaborasi di antara anggota tim, seperti guru dan staf sekolah, untuk mencapai tujuan pendidikan bersama. Ini melibatkan pengembangan keterampilan komunikasi, kerjasama, dan pemecahan masalah.",
  },

  {
    id: "3",
    icons: <FcWorkflow />,
    title: 'Kreatifitas',
    desc: "Kreativitas dalam pendidikan memainkan peran penting dalam menginspirasi siswa. Ini melibatkan penggunaan metode pembelajaran inovatif dan lingkungan belajar yang merangsang untuk merangsang imajinasi dan minat belajar siswa.",
  },
]

export const imgPrestasi = [
  {
    id: 1,
    title: 'Fashion',
    desc: "kreativitas yang tak terbatas, inovasi yang memukau, dan gaya yang menginspirasi.",
    category: 'fashion',
    img: prestasi1,
  },

  {
    id: 2,
    title: 'Sepak Bola',
    desc: "kerja keras, kerjasama tim, dan dedikasi tanpa batas",
    category: 'sepakbola',
    img: prestasi2,
  },

  {
    id: 3,
    title: 'Paskibra',
    desc: "simbol dari disiplin, keberanian dan kekompakan. Dari penampilan gemilang dalam upacara bendera hingga kejuaraan drill yang memukau",
    category: 'paskibra',
    img: prestasi3,
  },
]

export const headingPrestasi = [
  {
    title: 'Mencetak Generasi Unggul dalam Prestasi Akademik',
    desc: "Prestasi akademik yang luar biasa yang telah diraih oleh sekolah. Ini bisa mencakup pencapaian siswa dalam ujian nasional, penelitian ilmiah, atau prestasi akademik lainnya yang menonjol. Deskripsi dapat memuat statistik tentang peningkatan nilai, jumlah siswa yang meraih penghargaan, dan berbagai kegiatan akademik yang telah dilakukan oleh sekolah.",
  }
]

export const beritaHeading = [
  {
    title: 'Berita Terkini',
    icon: <IoIosArrowForward />,
    text: 'Berita',
    judul: 'Whats new at Mollie',
    desc: 'Explore the latest news and product updates from the Mollie team',
  }
]

export const duoBerita = [
  {
    id: 1,
    img: berita1,
    date: '16 Nov, 2024',
    icons: <CiCalendarDate />,
    title: 'Peraih Penghargaan: Sekolah XYZ Pionir Teknologi Pendidikan',
    desc: 'Sekolah XYZ diumumkan sebagai pemenang Penghargaan Sekolah Terbaik dalam Pembelajaran Berbasis Teknologi dalam sebuah acara penghargaan pendidikan yang bergengsi.',
    span: 'Lihat Selengkapnya',
    path: '/berita'
  },

  {
    id: 2,
    img: berita2,
    date: '16 Nov, 2024',
    icons: <CiCalendarDate />,
    title: 'Transformasi Pendidikan: Inovasi Sekolah XYZ Meraih Sorotan',
    desc: 'Sekolah XYZ telah menjadi pusat perhatian dalam dunia pendidikan setelah berhasil mengimplementasikan serangkaian inovasi yang mengubah paradigma pembelajaran',
    span: 'Lihat Selengkapnya',
    path: '/berita'
  }
]

export const triBerita = [
  {
    id: 1,
    img: berita3,
    date: '16 Nov, 2024',
    icons: <CiCalendarDate />,
    title: 'Membangun Masa Depan: Sekolah XYZ Menjadi Model Inovasi Pendidikan',
    desc: 'meraih reputasi sebagai model inovasi pendidikan, memimpin dengan contoh dalam menghadirkan perubahan positif dalam pembelajaran.',
    span: 'Lihat Selengkapnya',
    path: '/berita'
  },

  {
    id: 2,
    img: berita4,
    date: '16 Nov, 2024',
    icons: <CiCalendarDate />,
    title: 'Perubahan Paradigma: Sekolah XYZ Menyongsong Era Pembelajaran Berbasis Teknologi',
    desc: 'Sekolah XYZ telah menandai perubahan paradigma dalam pendidikan dengan menerima tantangan era digital.',
    span: 'Lihat Selengkapnya',
    path: '/berita'
  },

  {
    id: 2,
    img: berita5,
    date: '16 Nov, 2024',
    icons: <CiCalendarDate />,
    title: 'Revolusi Pendidikan: Sekolah XYZ Menuju Transformasi Global dalam Pembelajaran',
    desc: 'memimpin revolusi dalam pendidikan dengan visi transformasional mereka. Mereka tidak hanya mengubah cara siswa belajar, tetapi juga mengubah cara kita memahami pendidikan itu sendiri',
    span: 'Lihat Selengkapnya',
    path: '/berita'
  },
]

export const bannerImg = [
  {
    img: banner,
    title: 'Education PPDB',
    text: 'Daftar Sekarang',
    path: '/ppdb',
  }
]

export const gallery = [
  {
    id: 1,
    img: gallery1,
  },

  {
    id: 2,
    img: gallery2,
  },

  {
    id: 3,
    img: gallery3,
  },

  {
    id: 4,
    img: gallery4,
  },

  {
    id: 5,
    img: gallery5,
  },

  {
    id: 6,
    img: gallery6,
  },

  {
    id: 7,
    img: gallery7,
  },

  {
    id: 8,
    img: gallery8,
  },
]

export const blog = [
  {
    title: 'rineta.io',
    text: 'Inovasi Pendidikan: Membangun Masa Depan Melalui Transformasi Sekolah',
    desc: 'Temukan bagaimana inovasi dalam pendidikan dapat mengubah wajah sekolah saat ini dan membawa kita menuju masa depan yang lebih cerah. Dalam blog ini, kita akan menjelajahi berbagai strategi inovatif yang dapat diterapkan di sekolah untuk meningkatkan pembelajaran dan mempersiapkan siswa untuk tantangan masa depan.',
    img: gallery1,
    path: '/blog',
    date: 'Nov 12,2024',
    link: 'Lihat Selengkapnya',
    icons: <CiCalendarDate />,
  }
]

export const megaBlog = [
  {
    id: 1,
    img: gallery1,
    title: 'Membangun Masa Depan Melalui Transformasi Sekolah',
    desc: 'Sekolah XYZ telah menjadi pusat perhatian dalam dunia pendidikan setelah berhasil mengimplementasikan serangkaian inovasi yang mengubah paradigma pembelajaran.',
    path: '/',
    link: 'Lihat Selengkapnya',
  },

  {
    id: 2,
    img: gallery2,
    title: 'Menjelajahi Dunia Pendidikan: Tren dan Tantangan di Era Digital',
    desc: 'Era digital membawa tantangan dan peluang baru bagi pendidikan. Dalam blog ini, kita akan menyelidiki tren terkini dalam dunia pendidikan dan tantangan yang ada di era digital.',
    path: '/',
    link: 'Lihat Selengkapnya',
  },

  {
    id: 3,
    img: gallery3,
    title: 'Memahami Peran Teknologi dalam Pendidikan Modern',
    desc: 'Teknologi telah menjadi bagian integral dari pendidikan modern. Dalam blog ini, kita akan memeriksa secara mendalam peran teknologi dalam meningkatkan proses pembelajaran di sekolah.',
    path: '/',
    link: 'Lihat Selengkapnya',
  },

  {
    id: 4,
    img: gallery4,
    title: 'Membangun Lingkungan Belajar yang Inklusif',
    desc: 'Menjadi Sekolah yang Ramah Anak Setiap siswa berhak atas pendidikan yang inklusif dan ramah anak. Dalam blog ini, kita akan membangun lingkungan belajar yang inklusif dan ramah anak di sekolah.',
    path: '/',
    link: 'Lihat Selengkapnya',
  },

  {
    id: 5,
    img: gallery5,
    title: 'Memperkuat Keterampilan Soft Skills di Sekolah',
    desc: 'Persiapan untuk Sukses di Abad ke-21 Keterampilan lunak semakin diakui sebagai kunci keberhasilan di era modern pendidikan. Dalam blog ini, kita akan memperkuat keterampilan soft skills di sekolah.',
    path: '/',
    link: 'Lihat Selengkapnya',
  },

  {
    id: 6,
    img: gallery6,
    title: 'Menggali Potensi Kreatif',
    desc: 'Seni dan kegiatan ekstrakurikuler memiliki peran penting dalam pengembangan siswa secara holistik dan berkelanjutan. Dalam blog ini, kita akan memperkuat keterampilan seni dan ekstrakurikuler di sekolah.',
    path: '/',
    link: 'Lihat Selengkapnya',
  },

  {
    id: 7,
    img: gallery2,
    title: 'Mendorong Literasi Digital',
    desc: 'Dalam era digital, literasi digital adalah keterampilan yang krusial. Dalam blog ini, kita akan membahas pentingnya mengajarkan anak-anak tentang keamanan dan tanggung jawab online di dunia pendidikan.',
    path: '/',
    link: 'Lihat Selengkapnya',
  },

  {
    id: 8,
    img: gallery2,
    title: 'Mengatasi Tantangan Pendidikan di Masa Pandemi',
    desc: 'Pandemi telah menghadirkan tantangan besar bagi pendidikan dan pendidikan di masa pandemi. Dalam blog ini, kita akan membahas mengatasi tantangan pendidikan di masa pandemi dengan pilpel jarak jauh dan adaptasi sekolah.',
    path: '/',
    link: 'Lihat Selengkapnya',
  },
]

export const link = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },

  {
    id: 2,
    title: "Berita",
    link: "/berita",
  },

  {
    id: 3,
    title: "Pengumuman",
    link: "/pengumuman",
  },

  {
    id: 4,
    title: "Alumni",
    link: "/alumni",
  },

  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
]

export const suport = [
  {
    id: 1,
    title: "FAQ",
    link: '',
  },

  {
    id: 2,
    title: "Roadmap",
    link: '',
  },

  {
    id: 3,
    title: "Facebook Group",
    link: '',
  }
]

export const company = [
  {
    id: 1,
    title: "Terms of Use",
    link: '',
  },

  {
    id: 2,
    title: "Privacy",
    link: '',
  },

  {
    id: 3,
    title: "Dont Sell My Info",
    link: '',
  },

  {
    id: 4,
    title: "Privacy Center",
    link: '',
  }
]

export const visi = [
  {
    title: 'Visi',
    desc: 'Menjadi pusat pembelajaran yang berorientasi pada prestasi akademik, pengembangan karakter, dan kreativitas, untuk menciptakan generasi yang berdaya saing global.'
  }
]

export const misi = [
  {
    title: 'Misi',
  },

  {
    id: 1,
    text: 'Memberikan pendidikan berkualitas tinggi yang menggabungkan kurikulum yang relevan dengan kebutuhan zaman.',
    icons: <MdOutlineVerified />,
  },

  {
    id: 2,
    text: 'Mendorong pengembangan karakter yang kuat, termasuk nilai-nilai seperti integritas, kejujuran, tanggung jawab, dan kerjasama.',
    icons: <MdOutlineVerified />,
  },

  {
    id: 3,
    text: 'Menyediakan lingkungan belajar yang inklusif, aman, dan mendukung, di mana setiap siswa merasa diterima dan dihargai.',
    icons: <MdOutlineVerified />,
  },

  {
    id: 4,
    text: 'Mendorong kreativitas dan inovasi melalui beragam kegiatan ekstrakurikuler dan proyek-proyek pengembangan diri.',
    icons: <MdOutlineVerified />,
  },

  {
    id: 5,
    text: 'Membangun kemitraan yang kokoh dengan orang tua, komunitas lokal, dan pihak-pihak terkait untuk mendukung kesuksesan setiap siswa.',
    icons: <MdOutlineVerified />,
  },

  {
    id: 6,
    text: 'Menginspirasi siswa untuk menjadi pemimpin masa depan yang berkontribusi positif terhadap masyarakat dan dunia.',
    icons: <MdOutlineVerified />,
  },
]

export const heading = [
  {
    title: "Prestasi Terbaru Kami",
    date: "01 April, 2024",
  }
]

export const prestasi = [
  {
    img: gallery2,
    date: "01 April, 2024",
    title: "Memenangkan Penghargaan Sekolah Unggul Tahun Ini",
    desc: "Penghargaan ini diberikan kepada sekolah atas inovasi dalam pendidikan, baik dalam metode pengajaran maupun program-program tambahan yang berhasil meningkatkan kualitas pembelajaran dan prestasi siswa secara keseluruhan",
    profile: profile,
    name: "Rineta",
    job: 'Developer',
  }
]

export const prestasiData = [
  {
    id: 1,
    img: gallery2,
    date: "01 April, 2022",
    title: "Prestasi Akademik Terbaik di Kota",
    desc: "Penghargaan ini menyoroti prestasi akademik unggul yang dicapai oleh siswa-siswa sekolah, menegaskan peran sekolah dalam menyiapkan generasi penerus yang berkualitas dan siap bersaing di tingkat kota",
    profile: profile,
    name: "Rineta",
    job: 'Developer',
  },

  {
    id: 2,
    img: gallery3,
    date: "01 April, 2020",
    title: "Meraih Gelar Juara dalam Kompetisi Ilmiah Nasional",
    desc: "Sekolah ini meraih prestasi gemilang dalam kompetisi ilmiah nasional, menunjukkan dedikasi dan keunggulan dalam penelitian serta kemampuan siswa dalam mengaplikasikan pengetahuan mereka dalam konteks praktis.",
    profile: profile,
    name: "Rineta",
    job: 'Developer',
  },

  {
    id: 3,
    img: gallery4,
    date: "01 April, 2018",
    title: "Sekolah Kami Meraih Penghargaan Kualitas Pendidikan",
    desc: "Penghargaan ini menegaskan reputasi sekolah sebagai lembaga pendidikan berkualitas tinggi, mencerminkan komitmen sekolah dalam memberikan pengalaman belajar yang terbaik bagi setiap siswa.",
    profile: profile,
    name: "Rineta",
    job: 'Developer',
  },

  {
    id: 4,
    img: gallery5,
    date: "01 April, 2016",
    title: "Sekolah Kami Meraih Prestasi Terbaik dalam Olahraga",
    desc: "Sekolah ini mencatat prestasi gemilang dalam bidang olahraga, menunjukkan dedikasi siswa dan pelatih serta budaya sekolah yang mendukung prestasi di luar kelas.",
    profile: profile,
    name: "Rineta",
    job: 'Developer',
  },

  {
    id: 5,
    img: gallery6,
    date: "01 April, 2014",
    title: "Prestasi Sekolah dalam Menyediakan Pendidikan Inklusif",
    desc: "Penghargaan ini diberikan kepada sekolah atas upayanya dalam menciptakan lingkungan belajar yang inklusif, di mana setiap siswa merasa diterima dan didukung dalam mencapai potensinya.",
    profile: profile,
    name: "Rineta",
    job: 'Developer',
  },

  {
    id: 6,
    img: gallery7,
    date: "01 April, 2012",
    title: "Sekolah Kami Meraih Penghargaan Prestasi Seni Terbaik",
    desc: "Sekolah ini diakui atas prestasinya dalam seni, menunjukkan bakat siswa dan komitmen sekolah dalam mengembangkan kreativitas dan ekspresi siswa dalam berbagai bentuk seni.",
    profile: profile,
    name: "Rineta",
    job: 'Developer',
  }
]

export const headingSarana = [
  {
    title: 'Sarana dan Prasana',
    desc: 'Sekolah kami memiliki sarana dan prasarana yang memadai untuk menunjang kegiatan belajar peserta didik'
  }
]

export const sarana = [
  {
    no: 'No',
    jenis: 'Jenis Sarpras',
    semester1: 'Semester 2023/2024 Ganjil',
    semester2: 'Semester 2023/2024 Genap',
  },

  {
    id: 1,
    nomber: '1',
    ruangan: 'Ruang Kelas',
    total1: '29',
    total2: '29',
  },

  {
    id: 2,
    nomber: '2',
    ruangan: 'Ruang Perpustakaan',
    total1: '1',
    total2: '1',
  },

  {
    id: 3,
    nomber: '3',
    ruangan: 'Ruang Laboratorium',
    total1: '2',
    total2: '2',
  },

  {
    id: 4,
    nomber: '4',
    ruangan: 'Ruang Praktik',
    total1: '2',
    total2: '2',
  },

  {
    id: 5,
    nomber: '5',
    ruangan: 'Ruang Praktik',
    total1: '1',
    total2: '1',
  },

  {
    id: 6,
    nomber: '6',
    ruangan: 'Ruang Pimpinan',
    total1: '1',
    total2: '1',
  },

  {
    id: 7,
    nomber: '7',
    ruangan: 'Ruang Guru',
    total1: '1',
    total2: '1',
  },

  {
    id: 8,
    nomber: '8',
    ruangan: 'Ruang Ibadah',
    total1: '1',
    total2: '1',
  },

  {
    id: 9,
    nomber: '9',
    ruangan: 'Ruang UKS',
    total1: '1',
    total2: '1',
  },

  {
    id: 10,
    nomber: '10',
    ruangan: 'Ruang Toilet',
    total1: '22',
    total2: '22',
  },

  {
    id: 11,
    nomber: '11',
    ruangan: 'Ruang Gudang',
    total1: '3',
    total2: '3',
  },

  {
    id: 12,
    nomber: '12',
    ruangan: 'Ruang Sirkulasi',
    total1: '2',
    total2: '2',
  },

  {
    id: 13,
    nomber: '13',
    ruangan: 'Ruang TU',
    total1: '1',
    total2: '1',
  },

  {
    id: 14,
    nomber: '14',
    ruangan: 'Ruang Konseling',
    total1: '1',
    total2: '1',
  },

  {
    id: 15,
    nomber: '15',
    ruangan: 'Ruang OSIS',
    total1: '1',
    total2: '1',
  },

  {
    jumlah: 'Jumlah',
    total1: '109',
    total2: '109',
  }
]

export const headingGuru = [
  {
    title: 'Guru',
    text: 'Education',
  }
]

export const guru = [
  {
    id: 1,
    name: 'Guru 1',
    jabatan: 'Kepala Sekolah',
    img: gallery8,
  },

  {
    id: 2,
    name: 'Guru 1',
    jabatan: 'Kepala Sekolah',
    img: gallery8,
  },

  {
    id: 3,
    name: 'Guru 1',
    jabatan: 'Kepala Sekolah',
    img: gallery8,
  },

  {
    id: 4,
    name: 'Guru 1',
    jabatan: 'Kepala Sekolah',
    img: gallery8,
  },

  {
    id: 5,
    name: 'Guru 1',
    jabatan: 'Kepala Sekolah',
    img: gallery8,
  },

  {
    id: 6,
    name: 'Guru 1',
    jabatan: 'Kepala Sekolah',
    img: gallery8,
  },

  {
    id: 7,
    name: 'Guru 1',
    jabatan: 'Kepala Sekolah',
    img: gallery8,
  },

  {
    id: 8,
    name: 'Guru 1',
    jabatan: 'Kepala Sekolah',
    img: gallery8,
  },

  {
    id: 9,
    name: 'Guru 1',
    jabatan: 'Kepala Sekolah',
    img: gallery8,
  },

  {
    id: 10,
    name: 'Guru 1',
    jabatan: 'Kepala Sekolah',
    img: gallery8,
  },

  {
    id: 11,
    name: 'Guru 1',
    jabatan: 'Kepala Sekolah',
    img: gallery8,
  },

  {
    id: 12,
    name: 'Guru 1',
    jabatan: 'Kepala Sekolah',
    img: gallery8,
  },

  {
    id: 13,
    name: 'Guru 1',
    jabatan: 'Kepala Sekolah',
    img: gallery8,
  },

  {
    id: 14,
    name: 'Guru 1',
    jabatan: 'Kepala Sekolah',
    img: gallery8,
  },

  {
    id: 15,
    name: 'Guru 1',
    jabatan: 'Kepala Sekolah',
    img: gallery8,
  },

  {
    id: 16,
    name: 'Guru 1',
    jabatan: 'Kepala Sekolah',
    img: gallery8,
  },
]

export const headingTenagakependidikan = [
  {
    title: "Tenaga kependidikan",
    text: 'Tenaga kependidikan',
  }
]

export const tenagakependidikan = [
  {
    id: 1,
    category: 'jabatan1',
    img: gallery1,
    name: 'Rineta',
    jabatan: 'Kepala Sekolah',
  },

  {
    id: 2,
    category: 'jabatan2',
    img: gallery2,
    name: 'Rineta',
    jabatan: 'Kepala Sekolah',
  },

  {
    id: 3,
    category: 'jabatan3',
    img: gallery3,
    name: 'Rineta',
    jabatan: 'Kepala Sekolah',
  },

  {
    id: 4,
    category: 'jabatan4',
    img: gallery4,
    name: 'Rineta',
    jabatan: 'Kepala Sekolah',
  },
]

export const headingGallery = [
  {
    title: 'Gallery',
    text: 'Education',
  }
]

export const galleryPage = [
  {
    id: 1,
    img: gallery1,
  },

  {
    id: 2,
    img: gallery2,
  },

  {
    id: 3,
    img: gallery3,
  },

  {
    id: 4,
    img: gallery4,
  },

  {
    id: 5,
    img: gallery5,
  },

  {
    id: 6,
    img: gallery6,
  },

  {
    id: 7,
    img: gallery7,
  },

  {
    id: 8,
    img: gallery8,
  },
]

export const organisasi = [
  {
    img: gallery1,
    title: 'NEWS',
    date: '8 MIN READ',
    subtitle: 'Organisasi',
    desc: 'As a content writer who mostly works for B2B companies, LinkedIn is my go-to platform for finding potential clients because…',
    imgProfil: profile,
    name: 'RINETA',
    posisi: 'Developer',
    url: '/',
  },
]

export const megaOrganisasi = [
  {
    id: 1,
    img: gallery1,
    title: 'NEWS',
    date: '8 MIN READ',
    subtitle: 'English Club',
    desc: 'As a content writer who mostly works for B2B companies, LinkedIn is my go-to platform for finding potential clients because…',
    imgProfil: profile,
    name: 'RINETA',
    posisi: 'Developer',
    url: '/',
  },

  {
    id: 2,
    img: gallery2,
    title: 'NEWS',
    date: '8 MIN READ',
    subtitle: 'Futsal',
    desc: 'As a content writer who mostly works for B2B companies, LinkedIn is my go-to platform for finding potential clients because…',
    imgProfil: profile,
    name: 'RINETA',
    posisi: 'Developer',
    url: '/',
  },

  {
    id: 3,
    img: gallery3,
    title: 'NEWS',
    date: '8 MIN READ',
    subtitle: 'Komputer',
    desc: 'As a content writer who mostly works for B2B companies, LinkedIn is my go-to platform for finding potential clients because…',
    imgProfil: profile,
    name: 'RINETA',
    posisi: 'Developer',
    url: '/',
  },

  {
    id: 4,
    img: gallery1,
    title: 'NEWS',
    date: '8 MIN READ',
    subtitle: 'Seni Tari',
    desc: 'As a content writer who mostly works for B2B companies, LinkedIn is my go-to platform for finding potential clients because…',
    imgProfil: profile,
    name: 'RINETA',
    posisi: 'Developer',
    url: '/',
  },

  {
    id: 5,
    img: gallery4,
    title: 'NEWS',
    date: '8 MIN READ',
    subtitle: 'Rohis',
    desc: 'As a content writer who mostly works for B2B companies, LinkedIn is my go-to platform for finding potential clients because…',
    imgProfil: profile,
    name: 'RINETA',
    posisi: 'Developer',
    url: '/',
  },

  {
    id: 6,
    img: gallery5,
    title: 'NEWS',
    date: '8 MIN READ',
    subtitle: 'Paskibra',
    desc: 'As a content writer who mostly works for B2B companies, LinkedIn is my go-to platform for finding potential clients because…',
    imgProfil: profile,
    name: 'RINETA',
    posisi: 'Developer',
    url: '/',
  },
  {
    id: 7,
    img: gallery6,
    title: 'NEWS',
    date: '8 MIN READ',
    subtitle: 'Paduan Suara',
    desc: 'As a content writer who mostly works for B2B companies, LinkedIn is my go-to platform for finding potential clients because…',
    imgProfil: profile,
    name: 'RINETA',
    posisi: 'Developer',
    url: '/',
  },
  {
    id: 8,
    img: gallery7,
    title: 'NEWS',
    date: '8 MIN READ',
    subtitle: 'Teater',
    desc: 'As a content writer who mostly works for B2B companies, LinkedIn is my go-to platform for finding potential clients because…',
    imgProfil: profile,
    name: 'RINETA',
    posisi: 'Developer',
    url: '/',
  },
]

export const organisasiTwo = [
  {
    id: 1,
    img: gallery1,
    title: 'NEWS',
    date: '8 MIN READ',
    subtitle: 'Pramuka',
    desc: 'As a content writer who mostly works for B2B companies, LinkedIn is my go-to platform for finding potential clients because…',
    imgProfil: profile,
    name: 'RINETA',
    posisi: 'Developer',
    url: '/',
  },

  {
    id: 2,
    img: gallery2,
    title: 'NEWS',
    date: '8 MIN READ',
    subtitle: 'Badminton',
    desc: 'As a content writer who mostly works for B2B companies, LinkedIn is my go-to platform for finding potential clients because…',
    imgProfil: profile,
    name: 'RINETA',
    posisi: 'Developer',
    url: '/',
  },
]

export const headingSejarah = [
  {
    title: "Sejarah SMK PANDU BOGOR",
    text: "News",
  }
]

export const sejarah = [
  {
    id: 1,
    img: gallery1,
    desc: 'SMK PANDU CIBUNGBULANG BOGOR didirikan oleh Yayasan Al ’Aadiyaat Bogor pada tahun 1988 sebagai Sekolah Menengah Kejuruan Swasta yang awalnya bernama STM PANDU. Pada tahun ajaran 1999/2000, SMK PANDU menambah dua program keahlian baru, yaitu Teknik Mekanik Otomotif dan Teknik Elektronika Komunikasi. Program keahlian baru, seperti Teknik Komputer dan Jaringan, diperkenalkan pada tahun 2004 untuk mengikuti perkembangan teknologi. Pemerintah melakukan penyesuaian kurikulum yang menyebabkan program Teknik Mekanik Otomotif dibagi menjadi tiga keahlian pada tahun 2008.',
    date: 'Dibuat Pada Tanggal (26 Maret 2024)',
  },
  {
    id: 2,
    img: gallery1,
    desc: 'Pada tahun ajaran 2009/2010, SMK PANDU menambah jurusan baru, yaitu Multimedia, sehingga total mereka memiliki enam kompetensi keahlian. Pada tahun diklat 2016/2017, paket keahlian Teknik Audio Video dihentikan karena penurunan minat masyarakat, sehingga SMK PANDU menyelenggarakan lima paket keahlian: Teknik Sepeda Motor, Teknik Kendaraan Ringan, Teknik Ototronika, Teknik Komputer dan Jaringan, serta Multimedia.',
    date: 'Dibuat Pada Tanggal (26 Maret 2024)',
  },

  {
    id: 3,
    img: gallery1,
    desc: 'Tujuan SMK PANDU adalah mengembangkan iklim belajar berbasis nilai-nilai keagamaan, menyiapkan lulusan yang profesional, menghasilkan lulusan yang siap bekerja, wirausaha, atau melanjutkan pendidikan, mengembangkan sistem pendidikan yang adaptif dan global, serta fokus pada mutu, keunggulan, profesionalisme, dan orientasi masa depan dalam pendidikan dan pelatihan.',
    date: 'Dibuat Pada Tanggal (26 Maret 2024)',
  }
]

export const headingBerita = [
  {
    title: "Berita Terbaru Kami",
  }
]

export const berita = [
  {
    img: gallery2,
    date: "01 April, 2024",
    title: "Memenangkan Penghargaan Sekolah Unggul Tahun Ini",
    desc: "Penghargaan ini diberikan kepada sekolah atas inovasi dalam pendidikan, baik dalam metode pengajaran maupun program-program tambahan yang berhasil meningkatkan kualitas pembelajaran dan prestasi siswa secara keseluruhan",
    profile: profile,
    name: "Rineta",
    job: 'Developer',
  }
]

export const beritaData = [
  {
    id: 1,
    img: gallery2,
    date: "01 April, 2022",
    title: "Prestasi Akademik Terbaik di Kota",
    desc: "Penghargaan ini menyoroti prestasi akademik unggul yang dicapai oleh siswa-siswa sekolah, menegaskan peran sekolah dalam menyiapkan generasi penerus yang berkualitas dan siap bersaing di tingkat kota",
    profile: profile,
    name: "Rineta",
    job: 'Developer',
  },

  {
    id: 2,
    img: gallery3,
    date: "01 April, 2020",
    title: "Meraih Gelar Juara dalam Kompetisi Ilmiah Nasional",
    desc: "Sekolah ini meraih prestasi gemilang dalam kompetisi ilmiah nasional, menunjukkan dedikasi dan keunggulan dalam penelitian serta kemampuan siswa dalam mengaplikasikan pengetahuan mereka dalam konteks praktis.",
    profile: profile,
    name: "Rineta",
    job: 'Developer',
  },

  {
    id: 3,
    img: gallery4,
    date: "01 April, 2018",
    title: "Sekolah Kami Meraih Penghargaan Kualitas Pendidikan",
    desc: "Penghargaan ini menegaskan reputasi sekolah sebagai lembaga pendidikan berkualitas tinggi, mencerminkan komitmen sekolah dalam memberikan pengalaman belajar yang terbaik bagi setiap siswa.",
    profile: profile,
    name: "Rineta",
    job: 'Developer',
  },

  {
    id: 4,
    img: gallery5,
    date: "01 April, 2016",
    title: "Sekolah Kami Meraih Prestasi Terbaik dalam Olahraga",
    desc: "Sekolah ini mencatat prestasi gemilang dalam bidang olahraga, menunjukkan dedikasi siswa dan pelatih serta budaya sekolah yang mendukung prestasi di luar kelas.",
    profile: profile,
    name: "Rineta",
    job: 'Developer',
  },

  {
    id: 5,
    img: gallery6,
    date: "01 April, 2014",
    title: "Prestasi Sekolah dalam Menyediakan Pendidikan Inklusif",
    desc: "Penghargaan ini diberikan kepada sekolah atas upayanya dalam menciptakan lingkungan belajar yang inklusif, di mana setiap siswa merasa diterima dan didukung dalam mencapai potensinya.",
    profile: profile,
    name: "Rineta",
    job: 'Developer',
  },

  {
    id: 6,
    img: gallery7,
    date: "01 April, 2012",
    title: "Sekolah Kami Meraih Penghargaan Prestasi Seni Terbaik",
    desc: "Sekolah ini diakui atas prestasinya dalam seni, menunjukkan bakat siswa dan komitmen sekolah dalam mengembangkan kreativitas dan ekspresi siswa dalam berbagai bentuk seni.",
    profile: profile,
    name: "Rineta",
    job: 'Developer',
  }
]

export const headingPengumuman = [
  {
    title: "Berita Terbaru Kami",
  }
]

export const pengumuman = [
  {
    img: poster,
    date: "01 April, 2024",
    title: "Pendaftaran Siswa/i Baru Tahun Ajaran 2024/2025",
    desc: "Tahun Ajaran 2024/2025 sudah dibuka! Daftar sekarang untuk menemukan pengalaman belajar yang menarik dan bermakna. Proses pendaftaran mudah dan program-program kami menantang. Bergabunglah sekarang dan mulailah perjalanan pendidikan Anda!",
    profile: profile,
    name: "rineta.io",
    job: 'Developer',
  }
]

export const pengumumanData = [
  {
    id: 1,
    img: poster,
    date: "01 April, 2022",
    title: "Pendaftaran Siswa/i Baru Tahun Ajaran 2022/2024",
    desc: "Tahun Ajaran 2022/2024 sudah dibuka! Daftar sekarang untuk menemukan pengalaman belajar yang menarik dan bermakna. Proses pendaftaran mudah dan program-program kami menantang. Bergabunglah sekarang dan mulailah perjalanan pendidikan Anda!",
    profile: profile,
    name: "rineta.io",
    job: 'Developer',
  },

  {
    id: 2,
    img: poster,
    date: "01 April, 2020",
    title: "Pendaftaran Siswa/i Baru Tahun Ajaran 2020/2022",
    desc: "Tahun Ajaran 2020/2022 sudah dibuka! Daftar sekarang untuk menemukan pengalaman belajar yang menarik dan bermakna. Proses pendaftaran mudah dan program-program kami menantang. Bergabunglah sekarang dan mulailah perjalanan pendidikan Anda!",
    profile: profile,
    name: "rineta.io",
    job: 'Developer',
  },

  {
    id: 3,
    img: poster,
    date: "01 April, 2018",
    title: "Pendaftaran Siswa/i Baru Tahun Ajaran 2018/2020",
    desc: "Tahun Ajaran 2018/2020 sudah dibuka! Daftar sekarang untuk menemukan pengalaman belajar yang menarik dan bermakna. Proses pendaftaran mudah dan program-program kami menantang. Bergabunglah sekarang dan mulailah perjalanan pendidikan Anda!",
    profile: profile,
    name: "rineta.io",
    job: 'Developer',
  },

  {
    id: 4,
    img: poster,
    date: "01 April, 2016",
    title: "Pendaftaran Siswa/i Baru Tahun Ajaran 2016/2018",
    desc: "Tahun Ajaran 2016/2018 sudah dibuka! Daftar sekarang untuk menemukan pengalaman belajar yang menarik dan bermakna. Proses pendaftaran mudah dan program-program kami menantang. Bergabunglah sekarang dan mulailah perjalanan pendidikan Anda!",
    profile: profile,
    name: "rineta.io",
    job: 'Developer',
  },

  {
    id: 5,
    img: poster,
    date: "01 April, 2014",
    title: "Pendaftaran Siswa/i Baru Tahun Ajaran 2014/2016",
    desc: "Tahun Ajaran 2014/2016 sudah dibuka! Daftar sekarang untuk menemukan pengalaman belajar yang menarik dan bermakna. Proses pendaftaran mudah dan program-program kami menantang. Bergabunglah sekarang dan mulailah perjalanan pendidikan Anda!",
    profile: profile,
    name: "rineta.io",
    job: 'Developer',
  },

  {
    id: 6,
    img: poster,
    date: "01 April, 2012",
    title: "Pendaftaran Siswa/i Baru Tahun Ajaran 2012/2014",
    desc: "Tahun Ajaran 2012/2014 sudah dibuka! Daftar sekarang untuk menemukan pengalaman belajar yang menarik dan bermakna. Proses pendaftaran mudah dan program-program kami menantang. Bergabunglah sekarang dan mulailah perjalanan pendidikan Anda!",
    profile: profile,
    name: "rineta.io",
    job: 'Developer',
  }
]

export const socialData = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: 'https://www.facebook.com/'
  },

  {
    id: 2,
    icon: <FaWhatsapp />,
    link: 'https://www.facebook.com/'
  },

  {
    id: 3,
    icon: <SiGmail />,
    link: 'https://www.facebook.com/'
  },
]