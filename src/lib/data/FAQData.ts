export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'عام' | 'تقني' | 'مالي' | 'أمني';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const faqData: FAQ[] = [
  {
    id: '1',
    question: 'كيف يمكنني إنشاء حساب جديد؟',
    answer:
      'يمكنك إنشاء حساب جديد من خلال الضغط على زر "إنشاء حساب" في الصفحة الرئيسية وملء النموذج بالمعلومات المطلوبة.',
    category: 'عام',
    isActive: true,
    createdAt: '15/1/2025',
    updatedAt: '15/1/2025',
  },
  {
    id: '2',
    question: 'ما هي طرق الدفع المتاحة؟',
    answer:
      'نحن نقبل جميع البطاقات الائتمانية الرئيسية مثل Visa و MasterCard، بالإضافة إلى PayPal والدفع عند الاستلام.',
    category: 'مالي',
    isActive: true,
    createdAt: '15/1/2025',
    updatedAt: '15/1/2025',
  },
  {
    id: '3',
    question: 'كيف يمكنني إعادة تعيين كلمة المرور؟',
    answer:
      'يمكنك إعادة تعيين كلمة المرور من خلال الضغط على "نسيت كلمة المرور" في صفحة تسجيل الدخول.',
    category: 'أمني',
    isActive: true,
    createdAt: '15/1/2025',
    updatedAt: '15/1/2025',
  },
  {
    id: '4',
    question: 'ما هي متطلبات النظام؟',
    answer: 'يتطلب النظام متصفح حديث مثل Chrome أو Firefox أو Safari، مع اتصال بالإنترنت.',
    category: 'تقني',
    isActive: true,
    createdAt: '15/1/2025',
    updatedAt: '15/1/2025',
  },
  {
    id: '5',
    question: 'كيف يمكنني التواصل مع الدعم الفني؟',
    answer:
      'يمكنك التواصل مع الدعم الفني من خلال البريد الإلكتروني أو رقم الهاتف الموجود في صفحة "اتصل بنا".',
    category: 'عام',
    isActive: true,
    createdAt: '15/1/2025',
    updatedAt: '15/1/2025',
  },
];

