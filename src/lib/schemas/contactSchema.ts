import { z } from 'zod';

export const contactFormSchema = z.object({
  mobile: z.string().min(10, 'رقم الموبايل يجب أن يكون 10 أرقام على الأقل'),
  facebook: z.string().url('رابط الفيسبوك غير صحيح').optional().or(z.literal('')),
  instagram: z.string().url('رابط الإنستغرام غير صحيح').optional().or(z.literal('')),
  tiktok: z.string().url('رابط التيك توك غير صحيح').optional().or(z.literal('')),
  youtube: z.string().url('رابط اليوتيوب غير صحيح').optional().or(z.literal('')),
  website: z.string().url('رابط الموقع غير صحيح').optional().or(z.literal('')),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
