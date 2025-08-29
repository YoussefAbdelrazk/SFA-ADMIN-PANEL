import { z } from 'zod';

export const userFormSchema = z.object({
  username: z.string().min(3, 'اسم المستخدم يجب أن يكون 3 أحرف على الأقل'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  mobile: z.string().min(10, 'رقم الموبايل يجب أن يكون 10 أرقام على الأقل'),
  password: z.string().min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'),
  permissions: z.enum(['مستخدم', 'ادمن']),
});

export type UserFormData = z.infer<typeof userFormSchema>;
