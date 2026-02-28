import { siteData } from "@/data/siteData";
import FounderSection from "@/components/FounderSection";

const About = () => {
  const { company } = siteData;

  return (
    <>
      {/* Page Header */}
      <section className="gradient-primary py-20">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
            About Us
          </h1>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Learn about our journey, mission, and the people behind {company.name}.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">Company Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{company.about}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-accent border border-border space-y-3">
              <h3 className="font-heading text-xl font-semibold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{company.mission}</p>
            </div>
            <div className="p-8 rounded-xl bg-accent border border-border space-y-3">
              <h3 className="font-heading text-xl font-semibold text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{company.vision}</p>
            </div>
          </div>
        </div>
      </section>

      <FounderSection />
    </>
  );
};

export default About;
