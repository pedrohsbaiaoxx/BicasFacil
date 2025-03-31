import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="relative max-w-3xl mx-auto">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Input
                type="text"
                placeholder="O que você está procurando em Bicas?"
                className="w-full px-5 py-6 pr-12 border border-gray-300 rounded-lg shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary hover:text-primary-600"
                aria-label="Pesquisar"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
