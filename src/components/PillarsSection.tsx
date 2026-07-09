import { motion } from "framer-motion";
import { Lightbulb, Eye, Shield } from "lucide-react";

const pillars = [
  { icon: Lightbulb, title: "Compassionate Innovation", desc: "Technology should support human connection—not replace it. Habitat Pilot uses intelligent tools to enhance decision-making while preserving empathy." },
  { icon: Eye, title: "Radical Transparency", desc: "Every stakeholder sees the same information, reducing confusion and building trust across the care ecosystem." },
  { icon: Shield, title: "Proactive Support", desc: "Instead of reacting to crises, Habitat Pilot helps prevent them through early insights and alerts." },
];

const PillarsSection = () => (
  <section className="py-24 bg-section-cool">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Foundation</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          The Three Pillars of Habitat Pilot
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative bg-card rounded-2xl p-8 border border-border shadow-sm"
          >
            <div className="absolute -top-5 left-8 w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg">
              <p.icon size={20} className="text-primary-foreground" />
            </div>
            <h3 className="font-sans text-xl font-semibold text-foreground mt-4 mb-3">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PillarsSection;
