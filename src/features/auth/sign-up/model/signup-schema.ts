import { z } from 'zod';

const today = new Date();
const currentYear = today.getFullYear();

export const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(3, 'ФИО должно содержать минимум 3 символа')
      .max(100, 'ФИО должно содержать не более 100 символов')
      .regex(/^[A-Za-zА-Яа-яЁё\s]+$/, 'ФИО должно содержать только буквы')
      .refine((val) => val.trim().split(' ').length >= 2, {
        message: 'ФИО должно содержать как минимум два слова',
      }),
    phone: z
      .string()
      .length(17, 'Поле должно содержать 11 цифр')
      .regex(/^\d{1}\s?\(\d{3}\)\s?\d{3} \d{2} \d{2}$/, 'Некорректный номер телефона'),
    birthdate: z.string().refine(
      (val) => {
        const date = new Date(val);
        const year = date.getFullYear();

        return !isNaN(date.getTime()) && year >= 1900 && year <= currentYear;
      },
      { message: 'Введите допустимую дату' },
    ),
    document: z.string().min(1, 'Необходимо выбрать документ'),
    documentId: z.string().length(11, 'Поле должно содержать 10 цифр'),
    password: z
      .string()
      .min(6, 'Пароль должен быть не менее 6 символов')
      .max(100, 'Пароль должен содержать не более 50 символов'),
    confirmPassword: z
      .string()
      .min(6, 'Пароль должен быть не менее 6 символов')
      .max(100, 'Пароль должен содержать не более 50 символов'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
