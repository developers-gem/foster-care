import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface PageHeroProps {
  badge: string;
  title: ReactNode;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  bannerImage?: string;
}

const PageHero = ({ badge, title, description, ctaText, bannerImage }: PageHeroProps) => (
  <section className="relative pt-16 overflow-hidden">
    {bannerImage ? (
      <div className="absolute inset-0">
        <img src={bannerImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/75" />
      </div>
    ) : (
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
    )}
    <div className="container mx-auto px-4 pt-20 pb-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-6 border border-primary-foreground/20 backdrop-blur-sm">
          {badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
          {title}
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          {description}
        </p>
        {ctaText && (
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="text-base px-10 h-14 rounded-full font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
              {ctaText} <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-10 h-14 rounded-full font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Contact Us
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  </section>
);

export default PageHero;
