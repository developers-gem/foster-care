import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For small group homes getting started",
    price: "$49",
    period: "/month",
    features: ["Up to 10 residents", "Behavioral logging", "Basic reporting", "Email support"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "For agencies managing multiple homes",
    price: "$129",
    period: "/month",
    features: ["Up to 50 residents", "Guardian portal", "Compliance reports", "Calendar & scheduling", "Priority support"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: "Custom",
    period: "",
    features: ["Unlimited residents", "Custom integrations", "Dedicated account manager", "SLA guarantee", "On-site training"],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Transparent pricing for every team size
        </h2>
        <p className="text-muted-foreground text-lg">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-2xl p-8 border flex flex-col ${
              plan.popular
                ? "border-primary bg-card shadow-lg shadow-primary/10"
                : "border-border bg-card"
            }`}
          >
            {plan.popular && (
              <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                Most Popular
              </span>
            )}
            <h3 className="font-sans text-2xl font-bold text-foreground">{plan.name}</h3>
            <p className="text-muted-foreground text-sm mt-1 mb-6">{plan.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-foreground">{plan.price}</span>
              {plan.period && <span className="text-muted-foreground text-lg">{plan.period}</span>}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Check size={16} className="text-secondary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.popular ? "default" : "outline"}
              className="w-full"
              size="lg"
            >
              {plan.cta} <ArrowRight size={16} />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
