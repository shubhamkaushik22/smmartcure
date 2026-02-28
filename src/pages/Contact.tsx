import { Mail, Instagram, Linkedin, Facebook } from "lucide-react";
import { siteData } from "@/data/siteData";

const Contact = () => {
  const { contact, company } = siteData;

  return (
    <>
      <section className="gradient-primary py-20">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
            Contact Us
          </h1>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Get in touch with {company.name}. We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-xl mx-auto text-center space-y-12">
          {/* Email */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent text-accent-foreground">
              <Mail size={28} />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Email Us</h2>
            <a
              href={`mailto:${contact.email}`}
              className="text-lg text-primary hover:underline"
            >
              {contact.email}
            </a>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h2 className="font-heading text-2xl font-bold text-foreground">Follow Us</h2>
            <div className="flex justify-center gap-6">
              {[
                { icon: Instagram, label: "Instagram", url: contact.socialLinks.instagram },
                { icon: Linkedin, label: "LinkedIn", url: contact.socialLinks.linkedin },
                { icon: Facebook, label: "Facebook", url: contact.socialLinks.facebook },
              ].map(({ icon: Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="p-4 rounded-2xl bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={24} />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
