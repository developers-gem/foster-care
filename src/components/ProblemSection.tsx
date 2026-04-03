import { motion } from "framer-motion";
import { AlertTriangle, Clock, Users, Eye } from "lucide-react";

const problems = [
  { icon: AlertTriangle, title: "Information Gaps", desc: "Critical updates about a child's health, education, or behavior often fail to reach the right people on time." },
  { icon: Clock, title: "Placement Instability", desc: "Without proper matching and support, many placements break down, causing emotional harm to children." },
  { icon: Users, title: "Caseworker Burnout", desc: "Administrative overload leaves little time for meaningful interaction with families and children." },
  { icon: Eye, title: "Lack of Transparency", desc: "Foster parents, agencies, and stakeholders often operate without a shared view of information." },
];

const ProblemSection = () => (
  <section id="problem" className="py-24 bg-section-warm">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-semibold uppercase tracking-wider mb-4">The Problem</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Why Foster Care Systems Need Change
        </h2>
        <p className="text-muted-foreground text-lg">
          Traditional systems rely on paper-based documentation, disconnected channels, and manual processes — creating serious challenges.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background rounded-2xl p-7 border border-border hover:border-destructive/30 transition-all duration-300 hover:shadow-lg group"
          >
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
              <p.icon size={20} className="text-destructive" />
            </div>
            <h3 className="font-sans text-lg font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
