import { Link } from "react-router-dom";
import { siteData } from "@/data/siteData";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import WhyChooseUs from "@/components/WhyChooseUs";

const Index = () => {
  const { company, products } = siteData;

  return (
    <>
      <HeroSection />

      {/* About Preview */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              About {company.name}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {company.about}
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our Products
            </h2>
            <p className="mt-3 text-muted-foreground">
              Quality pharmaceutical products you can trust.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </>
  );
};

export default Index;
