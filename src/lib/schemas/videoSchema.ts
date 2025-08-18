import { z } from 'zod';

// Basic Video Data Schema
export const basicVideoDataSchema = z.object({
  // Arabic Video Name
  arabicName: z.string().min(1, 'اسم الفيديو بالعربية مطلوب'),

  // English Video Name
  englishName: z.string().min(1, 'اسم الفيديو بالإنجليزية مطلوب'),

  // French Video Name
  frenchName: z.string().min(1, 'اسم الفيديو بالفرنسية مطلوب'),

  // Arabic Description
  arabicDescription: z.string().min(10, 'وصف الفيديو بالعربية يجب أن يكون 10 أحرف على الأقل'),

  // English Description
  englishDescription: z.string().min(10, 'وصف الفيديو بالإنجليزية يجب أن يكون 10 أحرف على الأقل'),

  // French Description
  frenchDescription: z.string().min(10, 'وصف الفيديو بالفرنسية يجب أن يكون 10 أحرف على الأقل'),
});

// Video Details Schema
export const videoDetailsSchema = z.object({
  // Video File
  videoFile: z.instanceof(File).optional(),

  // Cover Image
  coverImage: z.instanceof(File).optional(),

  // Video Link (alternative to file upload)
  videoLink: z.string().url('رابط الفيديو يجب أن يكون صحيح').optional(),

  // Video Duration in minutes
  duration: z.string().min(1, 'مدة الفيديو مطلوبة'),

  // Focus Areas
  focusAreas: z.string().min(1, 'مناطق التركيز مطلوبة'),

  // Used Music
  usedMusic: z.string().min(1, 'الموسيقى المستخدمة مطلوبة'),

  // Video Category
  category: z.string().min(1, 'تصنيف الفيديو مطلوب'),

  // Video Level
  level: z.string().min(1, 'مستوى الفيديو مطلوب'),

  // Calories
  calories: z.string().min(1, 'عدد السعرات مطلوب'),
});

// Calorie Details Schema
export const calorieDetailsSchema = z.object({
  sections: z
    .array(
      z.object({
        id: z.string(),
        name: z.string().min(1, 'اسم الفقرة مطلوب'),
        time: z.string().min(1, 'توقيت الفقرة مطلوب'),
        calories: z.string().min(1, 'عدد السعرات مطلوب'),
      }),
    )
    .min(1, 'يجب إضافة فقرة واحدة على الأقل'),
});

// Music Details Schema
export const musicDetailsSchema = z.object({
  sections: z
    .array(
      z.object({
        id: z.string(),
        songName: z.string().min(1, 'اسم الأغنية مطلوب'),
        startTime: z.string().min(1, 'توقيت البداية مطلوب'),
        endTime: z.string().min(1, 'توقيت النهاية مطلوب'),
      }),
    )
    .min(1, 'يجب إضافة فقرة واحدة على الأقل'),
});

// Complete Video Schema
export const completeVideoSchema = z.object({
  basicData: basicVideoDataSchema,
  videoDetails: videoDetailsSchema,
  calorieDetails: calorieDetailsSchema,
  musicDetails: musicDetailsSchema,
});

// Types
export type BasicVideoData = z.infer<typeof basicVideoDataSchema>;
export type VideoDetails = z.infer<typeof videoDetailsSchema>;
export type CalorieDetails = z.infer<typeof calorieDetailsSchema>;
export type MusicDetails = z.infer<typeof musicDetailsSchema>;
export type CompleteVideo = z.infer<typeof completeVideoSchema>;
