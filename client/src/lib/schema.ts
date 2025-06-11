import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, 'Usuário é obrigatório'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

export const registerSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  confirmPassword: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword'],
});

export const companySchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  cnpj: z.string().min(14, 'CNPJ inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  address: z.string().min(1, 'Endereço é obrigatório'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  confirmPassword: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword'],
});

export const professionalSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  location: z.string().min(1, 'Localização é obrigatória'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  phone: z.string().min(10, 'Telefone inválido'),
  price: z.string().min(1, 'Preço é obrigatório'),
  categoryId: z.string().min(1, 'Categoria é obrigatória'),
  available: z.boolean().default(true),
  coverImage: z.string().min(1, 'Imagem de capa é obrigatória'),
  userId: z.number().optional(),
});

export type UserRole = 'admin' | 'company' | 'professional' | 'user'; 