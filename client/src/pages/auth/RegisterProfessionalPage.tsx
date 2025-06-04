import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Textarea } from '../../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { useToast } from '../../hooks/use-toast';

const professionalSchema = z.object({
  name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  cpf: z.string().length(11, 'CPF deve ter 11 dígitos'),
  service: z.string().min(1, 'Selecione um serviço'),
  description: z.string().min(50, 'Descrição deve ter no mínimo 50 caracteres'),
  hourlyRate: z.string().min(1, 'Valor por hora é obrigatório'),
  availability: z.string().min(1, 'Disponibilidade é obrigatória'),
});

type ProfessionalFormData = z.infer<typeof professionalSchema>;

export function RegisterProfessionalPage() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfessionalFormData>({
    resolver: zodResolver(professionalSchema),
  });

  const onSubmit = async (data: ProfessionalFormData) => {
    try {
      // TODO: Implementar integração com a API
      console.log(data);
      toast({
        title: 'Cadastro realizado com sucesso!',
        description: 'Seu perfil foi criado e está aguardando aprovação.',
      });
    } catch (error) {
      toast({
        title: 'Erro ao cadastrar',
        description: 'Ocorreu um erro ao tentar cadastrar. Tente novamente.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Cadastro de Profissional Autônomo</CardTitle>
          <CardDescription>
            Preencha os dados abaixo para se cadastrar como profissional autônomo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input id="name" {...register('name')} />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register('email')} />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" {...register('phone')} />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" {...register('cpf')} />
              {errors.cpf && (
                <p className="text-sm text-red-500">{errors.cpf.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Serviço</Label>
              <Select onValueChange={(value) => register('service').onChange({ target: { value } })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pintor">Pintor</SelectItem>
                  <SelectItem value="encanador">Encanador</SelectItem>
                  <SelectItem value="eletricista">Eletricista</SelectItem>
                  <SelectItem value="pedreiro">Pedreiro</SelectItem>
                  <SelectItem value="diarista">Diarista</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && (
                <p className="text-sm text-red-500">{errors.service.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição dos Serviços</Label>
              <Textarea
                id="description"
                {...register('description')}
                placeholder="Descreva seus serviços, experiência e especialidades"
              />
              {errors.description && (
                <p className="text-sm text-red-500">{errors.description.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="hourlyRate">Valor por Hora (R$)</Label>
              <Input id="hourlyRate" type="number" {...register('hourlyRate')} />
              {errors.hourlyRate && (
                <p className="text-sm text-red-500">{errors.hourlyRate.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="availability">Disponibilidade</Label>
              <Select onValueChange={(value) => register('availability').onChange({ target: { value } })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a disponibilidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Tempo Integral</SelectItem>
                  <SelectItem value="part-time">Meio Período</SelectItem>
                  <SelectItem value="weekends">Finais de Semana</SelectItem>
                </SelectContent>
              </Select>
              {errors.availability && (
                <p className="text-sm text-red-500">{errors.availability.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Cadastrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 