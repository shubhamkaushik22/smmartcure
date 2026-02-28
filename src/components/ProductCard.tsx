import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  image: string;
  buyLink: string;
}

const ProductCard = ({ id, name, category, shortDescription, image, buyLink }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6 space-y-3">
        <span className="text-xs font-medium tracking-wider uppercase text-primary">
          {category}
        </span>
        <h3 className="font-heading font-semibold text-lg text-foreground leading-tight">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {shortDescription}
        </p>
        <div className="flex gap-3 pt-2">
          <Link
            to={`/products/${id}`}
            className="flex-1 text-center text-sm font-medium py-2.5 px-4 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View Details
          </Link>
          <a
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 text-sm font-medium py-2.5 px-4 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
          >
            Buy Now
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
