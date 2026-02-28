import { siteData } from "@/data/siteData";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  return (
    <>
      <section className="gradient-primary py-20">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
            Our Products
          </h1>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Explore our range of trusted pharmaceutical products.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
