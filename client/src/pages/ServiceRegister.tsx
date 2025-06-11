import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ServiceCategory } from "@/types";
import { serviceCategories as fallbackData } from "@/lib/data";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

// Form validation schema
const professionalSchema = z.object({
  userId: z.number().optional(),
  categoryId: z.string().min(1, "Selecione uma categoria"),
  title: z.string().min(3, "Título deve ter pelo menos 3 caracteres").max(100, "Título muito longo"),
  description: z.string().min(10, "Descrição deve ter pelo menos 10 caracteres").max(500, "Descrição muito longa"),
  price: z.string().min(1, "Informe o preço do serviço"),
  location: z.string().min(3, "Informe a localização"),
  available: z.boolean(),
  coverImage: z.string().url("Informe uma URL válida para a imagem").or(z.string().length(0)),
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Número de telefone inválido"),
});

type FormValues = z.infer<typeof professionalSchema>;

const ServiceRegister = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch service categories
  const { data: categories, isLoading: categoriesLoading } = useQuery<ServiceCategory[]>({
    queryKey: ['/api/service-categories'],
    initialData: fallbackData
  });

  // Initialize form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(professionalSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      location: "Bicas",
      available: true,
      coverImage: "",
      name: "",
      email: "",
      phone: "",
      categoryId: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // In a real application, we would first register the user and then create the professional
      // For simplicity in this demo, we'll just create a professional entry with mock userId
      const professionalData = {
        userId: 1, // In real app, this would be the id of the newly created user
        categoryId: parseInt(data.categoryId),
        title: data.title,
        description: data.description,
        price: data.price,
        location: data.location,
        available: data.available,
        coverImage: data.coverImage || "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        createdAt: new Date().toISOString(),
      };

      // Send the data to the server
      const response = await apiRequest("POST", "/api/professionals", professionalData);
      
      if (response.ok) {
        toast({
          title: "Cadastro realizado com sucesso!",
          description: "Seu perfil profissional foi registrado no Bicas Fácil.",
        });
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erro ao cadastrar",
        description: "Houve um problema ao cadastrar seu perfil. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Cadastre-se como Profissional</h1>
            <p className="text-gray-600">Ofereça seus serviços e expanda seus negócios em Bicas</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Informações do Perfil Profissional</CardTitle>
              <CardDescription>
                Preencha os dados abaixo para criar seu perfil profissional no Bicas Fácil.
                Todas as informações são importantes para que os clientes possam encontrar seus serviços.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Personal Info Section */}
                    <div className="md:col-span-2">
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Informações Pessoais</h3>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: João da Silva" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Ex: joao@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone</FormLabel>
                          <FormControl>
                            <Input placeholder="(00) 00000-0000" {...field} />
                          </FormControl>
                          <FormDescription>
                            De preferência com WhatsApp
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Localização</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Centro, Bicas" {...field} />
                          </FormControl>
                          <FormDescription>
                            Bairro ou região onde atua
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Service Info Section */}
                    <div className="md:col-span-2 mt-4">
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Informações do Serviço</h3>
                    </div>

                    <FormField
                      control={form.control}
                      name="categoryId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Categoria</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione uma categoria" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categories?.map((category) => (
                                <SelectItem key={category.id} value={category.id.toString()}>
                                  {category.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Título do Serviço</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Pintura Residencial" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preço</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: R$ 100,00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="coverImage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>URL da Imagem de Capa</FormLabel>
                          <FormControl>
                            <Input placeholder="https://..." {...field} />
                          </FormControl>
                          <FormDescription>
                            Opcional. URL de uma imagem para seu perfil
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="available"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">
                              Disponível para Atendimento
                            </FormLabel>
                            <FormDescription>
                              Marque se você está disponível para receber novos clientes
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <div className="md:col-span-2">
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Descrição do Serviço</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Descreva seus serviços, experiência e diferenciais..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Seja detalhado para que os clientes entendam melhor seu trabalho
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Cadastrando...
                      </>
                    ) : (
                      "Cadastrar Perfil Profissional"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceRegister;
