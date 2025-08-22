export interface Program {
  id: string;
  name: string;
  duration: string;
  videoCount: number;
  dateAdded: string;
  creator: string;
  level: string;
  subscribers: number;
  status: 'active' | 'inactive';
  description?: string;
  category?: string;
  price?: number;
}

export const programsData: Program[] = [
  {
    id: '1',
    name: 'Free Premium Challenge',
    duration: '5 اسابيع',
    videoCount: 15,
    dateAdded: '19/6/2025',
    creator: 'محمد احمد علي',
    level: 'متوسط',
    subscribers: 7000,
    status: 'active',
    description: 'برنامج تحدي مجاني للمبتدئين',
    category: 'تحدي',
    price: 0
  },
  {
    id: '2',
    name: 'Muscle Building Program',
    duration: '8 اسابيع',
    videoCount: 24,
    dateAdded: '15/6/2025',
    creator: 'سارة محمد',
    level: 'متقدم',
    subscribers: 12000,
    status: 'active',
    description: 'برنامج بناء العضلات للمستوى المتقدم',
    category: 'بناء العضلات',
    price: 99
  },
  {
    id: '3',
    name: 'Weight Loss Journey',
    duration: '12 اسابيع',
    videoCount: 36,
    dateAdded: '10/6/2025',
    creator: 'أحمد خالد',
    level: 'مبتدئ',
    subscribers: 8500,
    status: 'active',
    description: 'رحلة فقدان الوزن للمبتدئين',
    category: 'فقدان الوزن',
    price: 149
  },
  {
    id: '4',
    name: 'Yoga for Beginners',
    duration: '6 اسابيع',
    videoCount: 18,
    dateAdded: '8/6/2025',
    creator: 'فاطمة علي',
    level: 'مبتدئ',
    subscribers: 5600,
    status: 'active',
    description: 'اليوغا للمبتدئين',
    category: 'يوغا',
    price: 79
  },
  {
    id: '5',
    name: 'Cardio Blast',
    duration: '4 اسابيع',
    videoCount: 12,
    dateAdded: '5/6/2025',
    creator: 'علي حسن',
    level: 'متوسط',
    subscribers: 9200,
    status: 'active',
    description: 'تمارين القلب المكثفة',
    category: 'كارديو',
    price: 69
  },
  {
    id: '6',
    name: 'Strength Training',
    duration: '10 اسابيع',
    videoCount: 30,
    dateAdded: '1/6/2025',
    creator: 'نور الدين',
    level: 'متقدم',
    subscribers: 6800,
    status: 'active',
    description: 'تدريب القوة للمستوى المتقدم',
    category: 'تدريب القوة',
    price: 129
  },
  {
    id: '7',
    name: 'Flexibility & Stretching',
    duration: '3 اسابيع',
    videoCount: 9,
    dateAdded: '28/5/2025',
    creator: 'مريم أحمد',
    level: 'مبتدئ',
    subscribers: 4200,
    status: 'active',
    description: 'تمارين المرونة والتمدد',
    category: 'مرونة',
    price: 49
  },
  {
    id: '8',
    name: 'HIIT Workout',
    duration: '6 اسابيع',
    videoCount: 20,
    dateAdded: '25/5/2025',
    creator: 'خالد محمد',
    level: 'متوسط',
    subscribers: 7800,
    status: 'active',
    description: 'تمارين HIIT عالية الكثافة',
    category: 'HIIT',
    price: 89
  },
  {
    id: '9',
    name: 'Pilates Core',
    duration: '7 اسابيع',
    videoCount: 21,
    dateAdded: '20/5/2025',
    creator: 'ليلى أحمد',
    level: 'متوسط',
    subscribers: 6100,
    status: 'active',
    description: 'تمارين البيلاتس للبطن',
    category: 'بيلاتس',
    price: 94
  },
  {
    id: '10',
    name: 'Dance Fitness',
    duration: '5 اسابيع',
    videoCount: 15,
    dateAdded: '18/5/2025',
    creator: 'رانيا محمد',
    level: 'مبتدئ',
    subscribers: 7300,
    status: 'active',
    description: 'اللياقة البدنية عبر الرقص',
    category: 'رقص',
    price: 74
  }
];
