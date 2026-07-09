import { motion } from "framer-motion";
import { UserPlus, Brain, Home, Activity, FileCheck } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Intake & Profile Creation", desc: "Child profiles are created with complete data — medical, behavioral, educational, and emotional needs." },
  { icon: Brain, title: "Smart Matching", desc: "Our system recommends the best foster homes based on compatibility." },
  { icon: Home, title: "Placement Management", desc: "Caregivers receive tools, guidance, and resources from day one." },
  { icon: Activity, title: "Continuous Monitoring", desc: "Daily updates and insights help identify risks early." },
  { icon: FileCheck, title: "Reporting & Compliance", desc: "Automated reports ensure agencies stay compliant with regulations." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Process</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          How Habitat Pilot Works
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground shadow-md">
                <s.icon size={20} />
              </div>
              <div className="bg-card rounded-xl p-5 border border-border flex-1">
                <div className="text-xs font-semibold text-secondary uppercase mb-1">Step {i + 1}</div>
                <h3 className="font-sans text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
