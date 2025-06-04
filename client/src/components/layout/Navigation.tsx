import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="flex items-center space-x-4">
      <Button variant="ghost" asChild>
        <Link href="/servicos">Serviços</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/imoveis">Imóveis</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/veiculos">Veículos</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/loja">Loja</Link>
      </Button>
    </nav>
  );
} 