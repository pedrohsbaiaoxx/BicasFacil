import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, UserRole } from '@shared/schema';
import type { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocation } from 'wouter';

type RegisterFormData = z.infer<typeof registerSchema>;

interface RegisterFormProps {
  type?: 'company' | 'user';
}

export function RegisterForm({ type = 'user' }: RegisterFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [, setLocation] = useLocation();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: type === 'company' ? UserRole.COMPANY : UserRole.USER,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setError(null);
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao criar conta');
      }

      // Redireciona para a página de login após o registro
      setLocation('/login');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar conta');
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>
          {type === 'company' ? 'Cadastrar Empresa' : 'Criar Conta'}
        </CardTitle>
        <CardDescription>
          {type === 'company'
            ? 'Cadastre sua empresa para oferecer serviços.'
            : 'Crie sua conta para encontrar serviços.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Usuário</Label>
            <Input
              id="username"
              type="text"
              {...register('username')}
              placeholder="Digite seu usuário"
            />
            {errors.username && (
              <p className="text-sm text-red-500">{errors.username.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              {...register('password')}
              placeholder="Digite sua senha"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Nome {type === 'company' ? 'da Empresa' : 'Completo'}</Label>
            <Input
              id="name"
              type="text"
              {...register('name')}
              placeholder={`Digite o nome ${type === 'company' ? 'da empresa' : 'completo'}`}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="Digite seu e-mail"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              type="tel"
              {...register('phone')}
              placeholder="Digite seu telefone"
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Endereço</Label>
            <Input
              id="address"
              type="text"
              {...register('address')}
              placeholder="Digite seu endereço"
            />
            {errors.address && (
              <p className="text-sm text-red-500">{errors.address.message}</p>
            )}
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Criando conta...' : 'Criar conta'}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="w-full" onClick={() => setLocation('/login')}>
          Já tem uma conta? Entrar
        </Button>
      </CardFooter>
    </Card>
  );
} 