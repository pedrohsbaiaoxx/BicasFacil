import React, { useState } from "react";
import { Link } from "wouter";
import { Menu, X, UserPlus, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import Temperature from "@/components/ui/temperature";
import { AuthButtons } from '@/components/auth/AuthButtons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50 w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Bicas Fácil</span>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/servicos" className="text-gray-700 hover:text-primary">
              Serviços
            </Link>
            <Link href="/imoveis" className="text-gray-700 hover:text-primary">
              Imóveis
            </Link>
            <Link href="/veiculos" className="text-gray-700 hover:text-primary">
              Veículos
            </Link>
            <Link href="/lojas" className="text-gray-700 hover:text-primary">
              Lojas
            </Link>
            <Link href="/ia-hub" className="text-gray-700 hover:text-primary">
              IA Hub
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-700 hover:text-primary">
                  Outros
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Outros Serviços</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link href="/servicos-publicos">Serviços Públicos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/rh">Recursos Humanos</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Botões de Ação */}
          <div className="flex items-center space-x-4">
            <Temperature />
            <div className="hidden md:flex space-x-2">
              <Button variant="outline" asChild>
                <Link href="/cadastrar" className="flex items-center">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Cadastrar
                </Link>
              </Button>
              <Button asChild>
                <Link href="/login" className="flex items-center">
                  <LogIn className="w-4 h-4 mr-2" />
                  Entrar
                </Link>
              </Button>
            </div>

            {/* Botão do Menu Mobile */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/servicos" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Serviços
              </Link>
              <Link href="/imoveis" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Imóveis
              </Link>
              <Link href="/veiculos" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Veículos
              </Link>
              <Link href="/lojas" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Lojas
              </Link>
              <Link href="/ia-hub" className="block px-3 py-2 text-gray-700 hover:text-primary">
                IA Hub
              </Link>
              <Link href="/servicos-publicos" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Serviços Públicos
              </Link>
              <Link href="/rh" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Recursos Humanos
              </Link>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/cadastrar" className="flex items-center justify-center">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Cadastrar
                  </Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/login" className="flex items-center justify-center">
                    <LogIn className="w-4 h-4 mr-2" />
                    Entrar
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
