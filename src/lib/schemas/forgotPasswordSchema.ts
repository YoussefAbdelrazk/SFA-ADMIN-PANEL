import { z } from 'zod';

export const forgotPasswordStep1Schema = z.object({
  email: z.string().min(1, 'البريد الإلكتروني مطلوب').email('البريد الإلكتروني غير صحيح'),
});

export const forgotPasswordStep2Schema = z.object({
  otp: z.string().min(1, 'رمز التحقق مطلوب').length(6, 'رمز التحقق يجب أن يكون 6 أرقام'),
});

export const forgotPasswordStep3Schema = z
  .object({
    password: z
      .string()
      .min(1, 'كلمة المرور مطلوبة')
      .min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'),
    confirmPassword: z.string().min(1, 'تأكيد كلمة المرور مطلوب'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'كلمات المرور غير متطابقة',
    path: ['confirmPassword'],
  });

export type ForgotPasswordStep1Data = z.infer<typeof forgotPasswordStep1Schema>;
export type ForgotPasswordStep2Data = z.infer<typeof forgotPasswordStep2Schema>;
export type ForgotPasswordStep3Data = z.infer<typeof forgotPasswordStep3Schema>;
