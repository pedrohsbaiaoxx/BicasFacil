import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, BrainCircuit, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";

const AIHub = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse("");

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: query,
          context: "BicasFacil - Plataforma de serviços e produtos em Bicas"
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao processar mensagem');
      }

      setResponse(data.message);
      toast({
        title: "Resposta recebida!",
        description: "O assistente AI respondeu sua pergunta.",
      });

    } catch (error) {
      console.error('Erro na API:', error);
      toast({
        title: "Erro",
        description: "Não foi possível processar sua pergunta. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    variant="ghost"
                    size="icon"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/90 hover:text-white hover:bg-transparent"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </form>
              
              {response && (
                <div className="mt-4 p-4 bg-white/10 rounded-lg">
                  <h3 className="font-semibold mb-2">Resposta:</h3>
                  <p className="text-white/90 text-sm">{response}</p>
                </div>
              )}

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
