import { Link } from "wouter";
import { ServiceCategory } from "@/types";
import { Icons } from "@/components/ui/icons";

interface CategoryCardProps {
  category: ServiceCategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const IconComponent = Icons[category.icon as keyof typeof Icons] || Icons.help;

  return (
    <Link
      href={`/servicos/${category.slug}`}
      className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow flex flex-col items-center text-center"
    >
      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary mb-3">
        <IconComponent className="h-6 w-6" />
      </div>
      <h3 className="font-medium text-gray-800">{category.name}</h3>
    </Link>
  );
};

export default CategoryCard;
