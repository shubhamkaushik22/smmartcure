import { ShieldCheck, HeartPulse, Microscope, Users } from "lucide-react";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  "shield-check": ShieldCheck,
  "heart-pulse": HeartPulse,
  microscope: Microscope,
  users: Users,
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Why Choose Us
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Trusted by healthcare professionals and patients alike.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={i}
                className="bg-card rounded-xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent text-accent-foreground mb-5">
                  <Icon size={28} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
