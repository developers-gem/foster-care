import { motion } from "framer-motion";
import { Target, Globe } from "lucide-react";

const MissionSection = () => (
  <section className="py-24 bg-section-cool">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-background rounded-2xl p-8 border border-border"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
            <Target size={24} className="text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To create a connected foster care ecosystem that empowers caregivers, supports agencies, and ensures every child receives consistent, compassionate care.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-background rounded-2xl p-8 border border-border"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
            <Globe size={24} className="text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            A future where no child experiences instability due to system inefficiencies — where every placement is informed, supported, and successful.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MissionSection;
