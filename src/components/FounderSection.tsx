import { siteData } from "@/data/siteData";

const FounderSection = () => {
  const { founder } = siteData;

  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-card">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <span className="text-sm font-medium tracking-wider uppercase text-primary">
              Our Founder
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {founder.name}
            </h2>
            <p className="text-primary font-medium">{founder.title}</p>
            <p className="text-muted-foreground leading-relaxed">{founder.journey}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
