import { Link } from "react-router-dom";
import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { company } = siteData;

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={company.bannerImage}
          alt="Healthcare innovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl space-y-6"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            {company.bannerHeadline}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
            {company.bannerSubheading}
          </p>
          <Link
            to="/products"
            className="inline-block mt-4 px-8 py-3.5 rounded-lg bg-primary-foreground text-primary font-semibold text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors"
          >
            View Our Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
