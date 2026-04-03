import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, Calendar, MessageSquare, User, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

const features: Feature[] = [
  {
    id: "logging",
    icon: ClipboardList,
    title: "Behavioral Logging",
    description: "Log incidents, interventions, and positive reinforcements with timestamped, categorized entries. Track progress against personalized goals.",
    details: ["Timestamped, categorized entries", "Track progress against personalized goals", "Incident & intervention tracking", "Positive reinforcement logging"],
  },
  {
    id: "appointments",
    icon: Calendar,
    title: "Appointments",
    description: "Shared calendar for medical, therapy, court, and family visits. Automated reminders, conflict detection, and staff shift integration.",
    details: ["Shared calendar across teams", "Automated reminders & notifications", "Conflict detection for scheduling", "Staff shift integration"],
  },
  {
    id: "guardian",
    icon: MessageSquare,
    title: "Guardian Portal",
    description: "Encrypted messaging channel for secure updates, document sharing, and auditable communication with authorized guardians.",
    details: ["Encrypted messaging channel", "Secure document sharing", "Auditable communication log", "Authorized guardian access control"],
  },
  {
    id: "profiles",
    icon: User,
    title: "Resident Profiles",
    description: "Comprehensive digital profiles consolidating demographics, medical history, education, care plans, and behavioral data.",
    details: ["Demographics & medical history", "Education & care plans", "Behavioral data tracking", "Consolidated digital records"],
  },
  {
    id: "compliance",
    icon: FileText,
    title: "Compliance Reports",
    description: "Generate regulatory reports and analytics on behavioral trends, goal attainment, and staff activity with one click.",
    details: ["One-click regulatory reports", "Behavioral trend analytics", "Goal attainment tracking", "Staff activity monitoring"],
  },
];

const CoreFeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(features[0].id);
  const active = features.find((f) => f.id === activeTab)!;

  return (
    <section id="core-features" className="py-24 bg-section-cool">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Core Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything your team needs. Nothing it doesn't.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Purpose-built tools that reduce "time to log" so your staff can focus on care.
          </p>
        </motion.div>

        {/* Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {features.map((f) => {
            const Icon = f.icon;
            const isActive = f.id === activeTab;
            return (
              <button
                key={f.id}
                onClick={() => setActiveTab(f.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-background text-foreground border border-border hover:border-primary/30"
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{f.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <active.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{active.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{active.description}</p>
                <ul className="space-y-3">
                  {active.details.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background rounded-2xl border border-border p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />
                <div className="relative z-10 space-y-4">
                  {active.details.map((d, i) => (
                    <motion.div
                      key={d}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-xs">{i + 1}</span>
                      </div>
                      <span className="text-sm text-foreground">{d}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
