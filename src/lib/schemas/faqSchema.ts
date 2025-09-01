import { z } from 'zod';

export const faqFormSchema = z.object({
  question: z.string().min(10, 'السؤال يجب أن يكون 10 أحرف على الأقل'),
  answer: z.string().min(20, 'الإجابة يجب أن تكون 20 حرف على الأقل'),
  category: z.enum(['عام', 'تقني', 'مالي', 'أمني']),
  isActive: z.boolean(),
});

export type FAQFormData = z.infer<typeof faqFormSchema>;
