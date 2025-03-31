import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans">Bicas Fácil</h3>
            <p className="text-gray-400 mb-4">
              Conectando você ao melhor de Bicas. Encontre serviços, produtos e informações sobre a cidade.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans">Categorias</h3>
            <ul className="space-y-2">
              <li><Link href="/servicos" className="text-gray-400 hover:text-white">Serviços</Link></li>
              <li><Link href="/imoveis" className="text-gray-400 hover:text-white">Imóveis</Link></li>
              <li><Link href="/veiculos" className="text-gray-400 hover:text-white">Veículos</Link></li>
              <li><Link href="/loja" className="text-gray-400 hover:text-white">Loja</Link></li>
              <li><Link href="/orgaos-publicos" className="text-gray-400 hover:text-white">Órgãos Públicos</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans">Informações</h3>
            <ul className="space-y-2">
              <li><Link href="/sobre" className="text-gray-400 hover:text-white">Sobre Nós</Link></li>
              <li><Link href="/como-anunciar" className="text-gray-400 hover:text-white">Como Anunciar</Link></li>
              <li><Link href="/termos" className="text-gray-400 hover:text-white">Termos de Uso</Link></li>
              <li><Link href="/privacidade" className="text-gray-400 hover:text-white">Política de Privacidade</Link></li>
              <li><Link href="/contato" className="text-gray-400 hover:text-white">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Receba novidades e ofertas especiais direto no seu e-mail.
            </p>
            <form className="mb-4">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="bg-gray-700 text-white border-gray-600 rounded-r-none focus:ring-primary"
                />
                <Button className="rounded-l-none">
                  Inscrever
                </Button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">
              Entre em contato: <a href="mailto:contato@bicasfacil.com" className="hover:text-white">contato@bicasfacil.com</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2023 Bicas Fácil - Todos os direitos reservados
          </p>
          <div className="flex space-x-4">
            <Link href="/termos" className="text-gray-400 hover:text-white text-sm">Termos</Link>
            <Link href="/privacidade" className="text-gray-400 hover:text-white text-sm">Privacidade</Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
