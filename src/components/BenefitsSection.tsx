import { motion } from "framer-motion";
import { Home, Building2, Baby } from "lucide-react";

const groups = [
  {
    icon: Home,
    title: "For Foster Parents",
    items: ["Easy access to child information", "Instant support from agencies", "Training and guidance resources", "Reduced paperwork"],
  },
  {
    icon: Building2,
    title: "For Agencies",
    items: ["Automated workflows", "Reduced administrative burden", "Real-time monitoring", "Better compliance management"],
  },
  {
    icon: Baby,
    title: "For Children",
    items: ["More stable placements", "Better communication between caregivers", "Faster access to services", "Improved emotional outcomes"],
  },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-24 bg-section-warm">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Benefits</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Key Benefits for Every Stakeholder
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
              <g.icon size={24} className="text-secondary" />
            </div>
            <h3 className="font-sans text-xl font-semibold text-foreground mb-4">{g.title}</h3>
            <ul className="space-y-3">
              {g.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-secondary mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
