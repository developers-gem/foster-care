import { motion } from "framer-motion";
import { Database, Zap, Bot, Heart } from "lucide-react";

const solutions = [
  { icon: Database, title: "Centralized Platform", desc: "All data, communication, and documentation stored securely in one place." },
  { icon: Zap, title: "Real-Time Updates", desc: "Everyone involved in a child's care has access to the latest information instantly." },
  { icon: Bot, title: "Smart Automation", desc: "Routine tasks like reporting, reminders, and documentation are automated." },
  { icon: Heart, title: "Child-Centric Design", desc: "Every feature is built with the goal of improving the child's experience and stability." },
];

const SolutionSection = () => (
  <section id="solution" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">The Solution</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Introducing ResiPilot
        </h2>
        <p className="text-muted-foreground text-lg">
          Designed to eliminate inefficiencies and bring clarity to foster care operations.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-7 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-sans font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
