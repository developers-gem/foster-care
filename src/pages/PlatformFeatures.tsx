import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { SectionBlock, FeatureCard, PageCTA } from "@/components/PageBlocks";
import {
  Brain, MessageSquare, Activity, Lock, FileText, GraduationCap, Smartphone, BarChart3
} from "lucide-react";
import featuresBanner from "@/assets/hero-features-banner.jpg";

const PlatformFeatures = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      badge="Platform Features"
      title={<>Smart, Scalable, and Built for <span className="text-secondary">Real-World Foster Care</span></>}
      description="Habitat Pilot is a complete foster care management system designed to simplify operations, improve placement stability, and empower both agencies and caregivers."
      ctaText="Book a Demo"
      bannerImage={featuresBanner}
    />

    <SectionBlock badge="AI-Powered" title="Smart Matching System" description="Find the right home, faster — matching children with families based on 60+ compatibility factors.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { title: "Medical Needs Analysis", desc: "Considers health requirements and ongoing treatment plans." },
          { title: "Behavioral Compatibility", desc: "Matches based on behavioral history and caregiver experience." },
          { title: "Location & School Continuity", desc: "Prioritizes proximity to maintain school enrollment and community." },
          { title: "Cultural Preferences", desc: "Respects cultural background and language needs." },
          { title: "Foster Parent Experience", desc: "Matches complexity of needs with caregiver readiness." },
          { title: "Sibling Placement", desc: "Keeps siblings together whenever possible." },
        ].map((item, i) => (
          <FeatureCard key={item.title} icon={Brain} title={item.title} description={item.desc} index={i} />
        ))}
      </div>
    </SectionBlock>

    <SectionBlock bg="warm" badge="Communication" title="Real-Time Communication Hub" description="No more missed emails, lost messages, or delayed updates.">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <FeatureCard icon={MessageSquare} title="Secure Messaging" description="End-to-end encrypted communication between all stakeholders." items={["Caseworkers", "Foster parents", "Agencies", "Therapists"]} index={0} />
        <FeatureCard icon={MessageSquare} title="Instant Alerts" description="Real-time notifications for critical updates and time-sensitive actions." items={["Push notifications", "Email alerts", "In-app badges", "Escalation triggers"]} index={1} />
      </div>
    </SectionBlock>

    <SectionBlock badge="Wellness" title="Daily Pulse Monitoring" description="Caregivers log daily updates on mood, behavior, and health — generating wellness trends and risk alerts.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={Activity} title="Daily Check-Ins" description="Simple logs capturing mood, behavior, health, and activities." index={0} />
        <FeatureCard icon={Activity} title="Wellness Trends" description="Visual dashboards showing patterns over time for early intervention." index={1} />
        <FeatureCard icon={Activity} title="Risk Alerts" description="Automated alerts when patterns indicate potential issues." index={2} />
      </div>
    </SectionBlock>

    <SectionBlock bg="cool" badge="Security" title="Secure Document Management" description="100% compliant cloud-based document storage with HIPAA-level security.">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <FeatureCard icon={Lock} title="Cloud Storage" description="Access medical records, court documents, school reports, and licensing paperwork anytime, anywhere." index={0} />
        <FeatureCard icon={Lock} title="Automated Audit Trails" description="Every action is logged for complete transparency and compliance readiness." index={1} />
      </div>
    </SectionBlock>

    <SectionBlock badge="Efficiency" title="Automated Reporting & Compliance" description="Save up to 10–15 hours per week per caseworker with automated reports.">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <FeatureCard icon={FileText} title="Auto-Generated Reports" description="Court reports, monthly summaries, and compliance documentation created automatically." index={0} />
        <FeatureCard icon={FileText} title="Deadline Management" description="Never miss a compliance deadline with automated reminders and tracking." index={1} />
      </div>
    </SectionBlock>

    <SectionBlock bg="warm" badge="Learning" title="Training & Resource Hub" description="Better prepared caregivers lead to better outcomes.">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <FeatureCard icon={GraduationCap} title="Training Modules" description="Foster parent training, behavioral management guides, and trauma-informed care resources." index={0} />
        <FeatureCard icon={GraduationCap} title="Certification Tracking" description="Track training progress and certification requirements in one place." index={1} />
      </div>
    </SectionBlock>

    <SectionBlock badge="Mobile" title="Mobile-First Experience" description="Update logs, access documents, and communicate — all from your phone.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={Smartphone} title="Instant Logging" description="Log daily updates in seconds from any device." index={0} />
        <FeatureCard icon={Smartphone} title="On-the-Go Access" description="Access all documents and case information anywhere." index={1} />
        <FeatureCard icon={Smartphone} title="Always Connected" description="Stay in touch with your care team at all times." index={2} />
      </div>
    </SectionBlock>

    <SectionBlock bg="cool" badge="Data" title="Analytics & Insights Dashboard" description="Make smarter decisions with real data.">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <FeatureCard icon={BarChart3} title="Performance Metrics" description="Track placement success rates, caregiver performance, and resource usage." index={0} />
        <FeatureCard icon={BarChart3} title="Risk Indicators" description="Visual dashboards highlighting potential risks before they become crises." index={1} />
      </div>
    </SectionBlock>

    <PageCTA title="See Habitat Pilot in Action" description="Book a free demo and start your digital transformation today." primaryLabel="Request a Demo" secondaryLabel="Start Free Trial" />
    <Footer />
  </div>
);

export default PlatformFeatures;
