import { z } from 'zod';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  PROFESSIONAL = 'professional',
  COMPANY = 'company'
}

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres')
});

export const registerSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  role: z.nativeEnum(UserRole)
}); 