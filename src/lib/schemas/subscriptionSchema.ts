import { z } from 'zod';

export const subscriptionSchema = z.object({
  name: z.string().min(1, 'اسم الاشتراك مطلوب'),
  duration: z.string().min(1, 'مدة الاشتراك مطلوبة'),
  priceEGP: z.number().min(0, 'السعر يجب أن يكون أكبر من أو يساوي 0'),
  priceUSD: z.number().min(0, 'السعر يجب أن يكون أكبر من أو يساوي 0'),
  priceSAR: z.number().min(0, 'السعر يجب أن يكون أكبر من أو يساوي 0'),
  priceEUR: z.number().min(0, 'السعر يجب أن يكون أكبر من أو يساوي 0'),
  isFeatured: z.boolean(),
  description: z.string().optional(),
  status: z.enum(['active', 'inactive']),
});

export type SubscriptionFormData = z.infer<typeof subscriptionSchema>;
