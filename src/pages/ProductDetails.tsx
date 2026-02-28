import { useParams, Link } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { siteData } from "@/data/siteData";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = siteData.products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-heading text-2xl font-bold text-foreground">Product Not Found</h1>
        <Link to="/products" className="mt-4 inline-block text-primary hover:underline">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="gradient-primary py-12">
        <div className="container">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="space-y-6">
              <span className="text-xs font-medium tracking-wider uppercase text-primary">
                {product.category}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                {product.name}
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="space-y-4 pt-4">
                {[
                  { label: "Composition", value: product.composition },
                  { label: "Indications", value: product.indications },
                  { label: "Dosage", value: product.dosage },
                  { label: "Packaging", value: product.packaging },
                ].map((item) => (
                  <div key={item.label} className="border-b border-border pb-4">
                    <h3 className="text-sm font-semibold text-foreground mb-1">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                ))}
              </div>

              <a
                href={product.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-8 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-secondary/90 transition-colors"
              >
                Buy Now on Tata 1mg
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
