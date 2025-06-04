import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Link } from "wouter";

const VeiculosPage = () => {
  const categorias = [
    {
      title: "Carros",
      icon: "shopping-basket",
      description: "Compre e venda carros novos e usados",
      href: "/veiculos/carros"
    },
    {
      title: "Motos",
      icon: "shopping-basket",
      description: "Encontre a moto ideal para você",
      href: "/veiculos/motos"
    },
    {
      title: "Caminhões",
      icon: "shopping-basket",
      description: "Veículos pesados para sua empresa",
      href: "/veiculos/caminhoes"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Veículos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((categoria) => {
          const Icon = Icons[categoria.icon as keyof typeof Icons];
          return (
            <Card key={categoria.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className="h-6 w-6" />
                  <CardTitle>{categoria.title}</CardTitle>
                </div>
                <CardDescription>{categoria.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={categoria.href}>Ver anúncios</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default VeiculosPage; 