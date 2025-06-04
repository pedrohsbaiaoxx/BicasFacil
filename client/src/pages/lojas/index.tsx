import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Link } from "wouter";

const LojasPage = () => {
  const categorias = [
    {
      title: "Materiais de Construção",
      icon: "hammer",
      description: "Encontre os melhores materiais para sua obra",
      href: "/lojas/materiais-construcao"
    },
    {
      title: "Móveis e Decoração",
      icon: "shopping-basket",
      description: "Móveis e itens de decoração para sua casa",
      href: "/lojas/moveis-decoracao"
    },
    {
      title: "Eletrodomésticos",
      icon: "shopping-basket",
      description: "Eletrodomésticos e eletroportáteis",
      href: "/lojas/eletrodomesticos"
    },
    {
      title: "Supermercados",
      icon: "shopping-basket",
      description: "Alimentos, bebidas e produtos de limpeza",
      href: "/lojas/supermercados"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Lojas</h1>
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
                  <Link href={categoria.href}>Ver lojas</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default LojasPage; 