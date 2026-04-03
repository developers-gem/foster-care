import { motion } from "framer-motion";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface SectionBlockProps {
  badge?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  bg?: "default" | "warm" | "cool";
}

export const SectionBlock = ({ badge, title, description, children, bg = "default" }: SectionBlockProps) => {
  const bgClass = bg === "warm" ? "bg-section-warm" : bg === "cool" ? "bg-section-cool" : "";
  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          {badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              {badge}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
          {description && <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items?: string[];
  index?: number;
}

export const FeatureCard = ({ icon: Icon, title, description, items, index = 0 }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
  >
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
      <Icon size={24} className="text-primary" />
    </div>
    <h3 className="font-sans text-lg font-semibold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
    {items && (
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-primary mt-0.5 flex-shrink-0">✓</span>{item}
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

interface PageCTAProps {
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel?: string;
}

export const PageCTA = ({ title, description, primaryLabel, secondaryLabel }: PageCTAProps) => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center bg-secondary rounded-3xl p-12 md:p-16 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">{title}</h2>
          <p className="text-secondary-foreground/70 text-lg mb-8 max-w-lg mx-auto">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-full px-10 text-base font-semibold transition-colors">
              {primaryLabel}
            </a>
            {secondaryLabel && (
              <a href="#" className="inline-flex items-center justify-center gap-2 border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 h-14 rounded-full px-10 text-base font-semibold transition-colors">
                {secondaryLabel}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
