import { motion, animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroHomeBanner from "@/assets/hero-home-banner.jpg";
import { ArrowRight, Clock } from "lucide-react";
import { useEffect, useRef } from "react";

const trustedLogos = [
  "Child Welfare League", "National CASA", "Foster Care Alliance", "Family First Network", "CareShield"
];

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

const AnimatedCounter = ({ value, suffix = "", label }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v) + suffix; },
    });
    return () => controls.stop();
  }, [value, suffix]);
  return (
    <div className="text-center">
      <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary-foreground">0{suffix}</span>
      <p className="text-xs font-semibold text-primary-foreground/70 uppercase tracking-widest mt-2">{label}</p>
    </div>
  );
};

const HeroSection = () => (
  <section className="relative overflow-hidden pt-16">
    {/* Full-bleed background image like HubSpot */}
    <div className="absolute inset-0">
      <img src={heroHomeBanner} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-secondary/75" />
    </div>

    <div className="container mx-auto px-4 pt-24 pb-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-6 border border-primary-foreground/20 backdrop-blur-sm">
          <Clock size={14} /> Save 3-5 hours of daily admin work
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Data management for the{" "}
          <span className="text-primary">front lines</span> of care.
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Centralize behavioral logs, appointments, and guardian communication in one secure platform built for group homes and foster care agency.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <Button size="lg" className="text-base px-10 h-14 rounded-full font-semibold bg-primary hover:bg-primary/90 text-primary-foreground text-lg">
            Get a demo
          </Button>
          <Button size="lg" variant="outline" className="text-base px-10 h-14 rounded-full font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg">
            Start free <ArrowRight size={18} />
          </Button>
        </div>

        {/* Animated Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-16"
        >
          <AnimatedCounter value={87} suffix="%" label="Less Paperwork" />
          <AnimatedCounter value={2} suffix="min" label="To First Log" />
          <AnimatedCounter value={100} suffix="%" label="Compliance Rate" />
        </motion.div>
      </motion.div>
    </div>

    {/* Trusted By - light strip */}
    <div className="relative z-10 bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
          Trusted by Organizations Driving Change
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {trustedLogos.map((name) => (
            <span key={name} className="text-muted-foreground/40 font-semibold text-sm tracking-wide">{name}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
