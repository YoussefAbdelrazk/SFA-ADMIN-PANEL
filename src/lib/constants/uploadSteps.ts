export const UPLOAD_STEPS = [
  {
    id: 'basic',
    title: 'بيانات الفيديو الاساسيه',
    description: 'Basic Video Data',
  },
  {
    id: 'details',
    title: 'تفاصيل الفيديو',
    description: 'Video Details',
  },
  {
    id: 'calories',
    title: 'تفاصيل السعرات حسب الفقرات',
    description: 'Calorie Details by Sections',
  },
  {
    id: 'music',
    title: 'تفاصيل الموسيقي حسب الفقرات',
    description: 'Music Details by Sections',
  },
] as const;

export type StepId = (typeof UPLOAD_STEPS)[number]['id'];
export type UploadStep = (typeof UPLOAD_STEPS)[number];
