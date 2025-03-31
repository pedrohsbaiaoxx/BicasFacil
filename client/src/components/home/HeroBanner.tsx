import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Search, UserPlus } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-700 text-white">
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="text-center md:text-left md:w-2/3">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans mb-4">
            Bem-vindo ao Bicas Fácil
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-6">
            Encontre os melhores serviços e produtos da cidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#explore">
                <Search className="mr-2 h-4 w-4" /> Explorar
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border border-white text-white hover:bg-white/10" asChild>
              <Link href="/cadastrar">
                <UserPlus className="mr-2 h-4 w-4" /> Cadastrar-se
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/30 z-0"></div>
    </section>
  );
};

export default HeroBanner;
