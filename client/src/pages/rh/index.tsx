import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Link } from "wouter";

const RHPage = () => {
  const servicos = [
    {
      title: "Vagas de Emprego",
      icon: "user-nurse",
      description: "Encontre oportunidades de trabalho na região",
      href: "/rh/vagas"
    },
    {
      title: "Currículos",
      icon: "user-nurse",
      description: "Cadastre seu currículo e candidate-se a vagas",
      href: "/rh/curriculos"
    },
    {
      title: "Treinamentos",
      icon: "user-nurse",
      description: "Cursos e capacitações profissionais",
      href: "/rh/treinamentos"
    },
    {
      title: "Consultoria RH",
      icon: "user-nurse",
      description: "Serviços de consultoria em recursos humanos",
      href: "/rh/consultoria"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Recursos Humanos</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Soluções para sua carreira e desenvolvimento profissional
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicos.map((servico) => {
          const Icon = Icons[servico.icon as keyof typeof Icons];
          return (
            <Card key={servico.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className="h-6 w-6" />
                  <CardTitle>{servico.title}</CardTitle>
                </div>
                <CardDescription>{servico.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={servico.href}>Acessar</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default RHPage; 