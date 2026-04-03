import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Rocket } from "lucide-react";

const CTASection = () => (
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
          <Rocket size={40} className="text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Ready to reclaim your day?
          </h2>
          <p className="text-secondary-foreground/70 text-lg mb-8 max-w-lg mx-auto">
            Join agencies that have eliminated hours of daily paperwork. Your team deserves tools that work as hard as they do.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="text-base px-10 h-14 rounded-full font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
              Get a demo <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-10 h-14 rounded-full font-semibold border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              Start free
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
