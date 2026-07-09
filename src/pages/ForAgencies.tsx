import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { SectionBlock, FeatureCard, PageCTA } from "@/components/PageBlocks";
import { motion } from "framer-motion";
import {
  Users, MapPin, BarChart3, Shield, Plug, Scaling, DollarSign
} from "lucide-react";
import agenciesBanner from "@/assets/hero-agencies-banner.jpg";

const ForAgencies = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      badge="For Agencies"
      title={<>Scale Faster, Work <span className="text-secondary">Smarter</span></>}
      description="The ultimate foster care agency management software. Reduce workload, improve efficiency, and deliver better care outcomes."
      ctaText="Request a Demo"
      bannerImage={agenciesBanner}
    />

    <SectionBlock badge="Workload" title="Reduce Caseworker Burnout" description="Caseworkers spend more time on admin than children. Habitat Pilot changes that.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={Users} title="Automated Reporting" description="Eliminate hours of manual report creation with intelligent automation." index={0} />
        <FeatureCard icon={Users} title="Centralized Communication" description="One platform for all stakeholder communication — no more email chaos." index={1} />
        <FeatureCard icon={Users} title="Task Automation" description="Automate routine tasks so caseworkers can focus on children and families." index={2} />
      </div>
    </SectionBlock>

    <SectionBlock bg="warm" badge="Growth" title="Recruitment & Retention Tools" description="Find and retain better foster homes with data-driven tools.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={MapPin} title="Location Heat Maps" description="Identify areas of high demand and low foster home availability." index={0} />
        <FeatureCard icon={MapPin} title="Demand Forecasting" description="Predict future placement needs based on historical trends." index={1} />
        <FeatureCard icon={MapPin} title="Retention Scoring" description="Identify at-risk foster families and intervene before they leave the system." index={2} />
      </div>
    </SectionBlock>

    <SectionBlock badge="Visibility" title="Real-Time Monitoring Dashboard" description="Stay in control of every case with comprehensive dashboards.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={BarChart3} title="Active Placements" description="See all current placements, their status, and key metrics at a glance." index={0} />
        <FeatureCard icon={BarChart3} title="Risk Alerts" description="Instant notifications when cases show warning signs." index={1} />
        <FeatureCard icon={BarChart3} title="Compliance Status" description="Real-time view of compliance across all cases and staff." index={2} />
      </div>
    </SectionBlock>

    <SectionBlock bg="cool" badge="Compliance" title="Compliance & Risk Management" description="Stay audit-ready at all times with automated compliance tracking.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={Shield} title="Automated Tracking" description="Compliance requirements are tracked and flagged automatically." index={0} />
        <FeatureCard icon={Shield} title="Document Verification" description="Ensure all required documents are up-to-date and properly filed." index={1} />
        <FeatureCard icon={Shield} title="Audit Logs" description="Complete, tamper-proof logs of every action for audit readiness." index={2} />
      </div>
    </SectionBlock>

    <SectionBlock badge="Integration" title="Integration with Government Systems" description="Works seamlessly with existing SACWIS / CCWIS systems.">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <FeatureCard icon={Plug} title="SACWIS / CCWIS Compatible" description="Native integration with state and federal child welfare information systems." index={0} />
        <FeatureCard icon={Plug} title="API-First Design" description="Connect with any existing tools through our comprehensive API." index={1} />
      </div>
    </SectionBlock>

    <SectionBlock bg="warm" badge="Scale" title="Scalability for Growing Agencies" description="Whether you manage 50 or 5,000 cases — Habitat Pilot grows with you.">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <FeatureCard icon={Scaling} title="Elastic Infrastructure" description="Our platform scales automatically to meet your growing needs." index={0} />
        <FeatureCard icon={Scaling} title="Multi-Office Support" description="Manage multiple locations and teams from a single platform." index={1} />
      </div>
    </SectionBlock>

    {/* ROI Metrics */}
    <section className="py-20 relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">ROI</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-3">ROI & Cost Savings</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "60%", label: "Time Saved on Admin" },
            { value: "40%", label: "Faster Placements" },
            { value: "3x", label: "Better Resource Use" },
            { value: "50%", label: "Lower Operational Costs" },
          ].map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{m.value}</div>
              <div className="text-primary-foreground/70 text-sm">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <PageCTA title="Upgrade Your Agency Today" description="Request a demo or get custom pricing tailored to your agency size." primaryLabel="Request Demo" secondaryLabel="Get Custom Pricing" />
    <Footer />
  </div>
);

export default ForAgencies;
