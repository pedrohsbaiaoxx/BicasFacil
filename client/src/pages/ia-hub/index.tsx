import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Link } from "wouter";

const IAHubPage = () => {
  const servicos = [
    {
      title: "Assistente Virtual",
      icon: "help",
      description: "Tire suas dúvidas e receba recomendações personalizadas",
      href: "/ia-hub/assistente"
    },
    {
      title: "Análise de Documentos",
      icon: "help",
      description: "Análise automatizada de contratos e documentos",
      href: "/ia-hub/documentos"
    },
    {
      title: "Previsões de Mercado",
      icon: "help",
      description: "Análise de tendências e previsões do mercado imobiliário",
      href: "/ia-hub/previsoes"
    },
    {
      title: "Recomendações",
      icon: "help",
      description: "Recomendações personalizadas de produtos e serviços",
      href: "/ia-hub/recomendacoes"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">IA Hub</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Soluções inteligentes para facilitar sua vida
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

export default IAHubPage; 