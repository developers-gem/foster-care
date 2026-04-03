import { motion } from "framer-motion";

const metrics = [
  { value: "40%", label: "Faster Placement Matching" },
  { value: "25%", label: "Less Administrative Workload" },
  { value: "3x", label: "Better Case Visibility" },
  { value: "60%", label: "Fewer Placement Breakdowns" },
];

const MetricsSection = () => (
  <section className="py-20 relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
          Real Impact Metrics
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{m.value}</div>
            <div className="text-primary-foreground/70 text-sm">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsSection;
