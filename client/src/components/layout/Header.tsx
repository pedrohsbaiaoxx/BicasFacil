import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Search, ChevronDown, User, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Temperature from "@/components/ui/temperature";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar Mobile */}
        <div className="flex items-center justify-between py-3 lg:hidden">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <span className="text-primary text-xl font-bold">Bicas Fácil</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Temperature />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between py-3">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <span className="text-primary text-2xl font-bold">Bicas Fácil</span>
            </Link>
          </div>
          
          <nav className="hidden lg:flex space-x-6">
            <div className="group relative">
              <Button variant="ghost" className="flex items-center gap-1">
                Serviços <ChevronDown className="h-4 w-4" />
              </Button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2 hidden group-hover:block">
                <Link href="#pintores" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Pintores
                </Link>
                <Link href="#encanadores" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Encanadores
                </Link>
                <Link href="#engenheiros" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Engenheiros
                </Link>
                <Link href="#manicures" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Manicures
                </Link>
                <Link href="/servicos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Ver todos
                </Link>
              </div>
            </div>
            <div className="group relative">
              <Button variant="ghost" className="flex items-center gap-1">
                Imóveis <ChevronDown className="h-4 w-4" />
              </Button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2 hidden group-hover:block">
                <Link href="/imoveis/venda" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  À venda
                </Link>
                <Link href="/imoveis/aluguel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Para alugar
                </Link>
                <Link href="/imoveis/lancamentos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Lançamentos
                </Link>
              </div>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/veiculos">Veículos</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/loja">Loja</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/ai-hub">IA Hub</Link>
            </Button>
            <div className="group relative">
              <Button variant="ghost" className="flex items-center gap-1">
                Mais <ChevronDown className="h-4 w-4" />
              </Button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2 hidden group-hover:block">
                <Link href="/profissionais" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Profissionais
                </Link>
                <Link href="/orgaos-publicos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Órgãos Públicos
                </Link>
                <Link href="/educacao" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Educação
                </Link>
                <Link href="/lazer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Lazer
                </Link>
                <Link href="/saude" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Saúde
                </Link>
                <Link href="/cargos-publicos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Cargos Públicos
                </Link>
              </div>
            </div>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Temperature />
            <Button variant="outline" asChild>
              <Link href="/cadastrar-profissional">
                Cadastrar Profissional
              </Link>
            </Button>
            <Button variant="ghost" className="flex items-center gap-1" asChild>
              <Link href="/login">
                <User className="h-4 w-4 mr-1" /> Entrar
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <div className="grid grid-cols-2 gap-2">
              <Link href="/servicos" className="text-gray-700 py-2 px-3 hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>
                Serviços
              </Link>
              <Link href="/imoveis" className="text-gray-700 py-2 px-3 hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>
                Imóveis
              </Link>
              <Link href="/veiculos" className="text-gray-700 py-2 px-3 hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>
                Veículos
              </Link>
              <Link href="/loja" className="text-gray-700 py-2 px-3 hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>
                Loja
              </Link>
              <Link href="/ai-hub" className="text-gray-700 py-2 px-3 hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>
                IA Hub
              </Link>
              <Link href="/midia" className="text-gray-700 py-2 px-3 hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>
                Mídia
              </Link>
              <Link href="/profissionais" className="text-gray-700 py-2 px-3 hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>
                Profissionais
              </Link>
              <Link href="/orgaos-publicos" className="text-gray-700 py-2 px-3 hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>
                Órgãos Públicos
              </Link>
              <Link href="/educacao" className="text-gray-700 py-2 px-3 hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>
                Educação
              </Link>
              <Link href="/lazer" className="text-gray-700 py-2 px-3 hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>
                Lazer
              </Link>
              <Link href="/saude" className="text-gray-700 py-2 px-3 hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>
                Saúde
              </Link>
              <Link href="/cargos-publicos" className="text-gray-700 py-2 px-3 hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>
                Cargos Públicos
              </Link>
            </div>
            <div className="mt-4 flex flex-col space-y-2">
              <Button variant="outline" asChild>
                <Link href="/cadastrar-profissional" onClick={() => setMobileMenuOpen(false)}>
                  Cadastrar Profissional
                </Link>
              </Button>
              <Button variant="ghost" className="flex items-center justify-center gap-1" asChild>
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <User className="h-4 w-4 mr-1" /> Entrar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
