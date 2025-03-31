import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, BrainCircuit } from "lucide-react";
import { Link } from "wouter";

const AIHub = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle AI query logic here
    console.log("AI query:", query);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-primary-700 rounded-xl p-6 md:p-10 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-8">
              <h2 className="text-2xl md:text-3xl font-bold font-sans mb-4">IA Hub Bicas</h2>
              <p className="text-white/90 mb-4">
                Consulte assistentes de inteligência artificial para tirar dúvidas sobre a cidade, serviços, eventos e muito mais.
              </p>
              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Digite sua pergunta sobre Bicas..."
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/70 pr-12 ring-offset-white/20 focus-visible:ring-white/40"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <Button
                    type="submit"
                    variant="ghost"
                    size="icon"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/90 hover:text-white hover:bg-transparent"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
              <div className="mt-4">
                <Button variant="link" className="text-white hover:text-white/90 p-0 h-auto" asChild>
                  <Link href="/ai-hub" className="flex items-center">
                    Consultar todas as IAs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 relative">
                <div className="w-full h-full rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center">
                  <BrainCircuit className="h-20 w-20 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHub;
