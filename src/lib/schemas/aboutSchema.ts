import { z } from 'zod';

export const aboutFormSchema = z.object({
  htmlAr: z.string().min(1, 'المحتوى العربي مطلوب'),
  htmlEn: z.string().min(1, 'المحتوى الإنجليزي مطلوب'),
  htmlFr: z.string().min(1, 'المحتوى الفرنسي مطلوب'),
});

export type AboutFormData = z.infer<typeof aboutFormSchema>;
