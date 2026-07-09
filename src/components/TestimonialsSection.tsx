import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "We went from 4 hours of daily paperwork to 30 minutes. Habitat Pilot changed how our entire agency operates.",
    name: "Maria Chen",
    role: "Program Director, Sunrise Group Homes",
  },
  {
    quote: "The guardian portal alone saved us from dozens of compliance issues. Families feel informed and connected.",
    name: "James Okafor",
    role: "Case Manager, Harbor Foster Services",
  },
  {
    quote: "Finally, a system that understands what direct care staff actually need. Fast, clear, reliable.",
    name: "Sarah Kim",
    role: "Residential Counselor, Beacon Youth Center",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-section-warm">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Trusted by care teams everywhere
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <Carousel opts={{ loop: true, align: "center" }} className="w-full">
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name}>
                <div className="bg-background rounded-2xl border border-border p-10 md:p-12 text-center shadow-sm">
                  <Quote size={36} className="text-primary/20 mx-auto mb-6" />
                  <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">{t.name.charAt(0)}</span>
                    </div>
                    <div className="text-left">
                      <p className="text-foreground font-semibold">{t.name}</p>
                      <p className="text-muted-foreground text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </Carousel>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
