import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  className?: string;
  style: any;
}

export function ProductCard({
  id,
  name,
  description,
  imageUrl,
  category,
  className,
}: ProductCardProps) {
  return (
    <Link
      to={`/products/${id}`}
      className={cn(
        "group block overflow-hidden rounded-xl bg-white dark:bg-slate-900 border shadow-sm transition-all hover-scale",
        className
      )}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3">
          <span className="inline-block py-1 px-2 text-xs font-medium bg-itek-700 text-white rounded-md">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-itek-600 transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium text-itek-600 group-hover:translate-x-1 transition-transform duration-300">
            View details
          </span>
        </div>
      </div>
    </Link>
  );
}
