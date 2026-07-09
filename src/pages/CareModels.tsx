import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { SectionBlock, FeatureCard, PageCTA } from "@/components/PageBlocks";
import {
  Home, Building2, Zap, BookOpen, RotateCcw, Database, AlertTriangle
} from "lucide-react";
import careModelsBanner from "@/assets/hero-care-models-banner.jpg";

const CareModels = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      badge="Care Models"
      title={<>Every Child Needs the <span className="text-secondary">Right Care Model</span></>}
      description="Not all children have the same needs.Habitat Pilot supports all types of care — ensuring the right environment for every child."
      bannerImage={careModelsBanner}
    />

    <SectionBlock badge="Primary Model" title="Family Foster Care" description="The most common and effective model — providing emotional bonding, stability, and better long-term outcomes.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={Home} title="Emotional Bonding" description="Children thrive in family environments that provide consistent love and attention." index={0} />
        <FeatureCard icon={Home} title="Stable Environment" description="A home setting offers the routine and predictability children need." index={1} />
        <FeatureCard icon={Home} title="Research-Backed" description="Supported by attachment theory and child psychology research for best outcomes." index={2} />
      </div>
    </SectionBlock>

    <SectionBlock bg="warm" badge="Residential" title="Group Homes (Residential Care)" description="Specialized care for children with complex behavioral or medical needs.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={Building2} title="Staff Coordination" description="Habitat Pilot helps coordinate care teams across shifts and departments." index={0} />
        <FeatureCard icon={Building2} title="Medication Tracking" description="Automated medication schedules and compliance tracking." index={1} />
        <FeatureCard icon={Building2} title="Behavioral Monitoring" description="Continuous monitoring with trend analysis and incident reporting." index={2} />
      </div>
    </SectionBlock>

    <SectionBlock badge="Short-Term" title="Emergency & Respite Care" description="Short-term care solutions for urgent situations and family relief.">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <FeatureCard icon={Zap} title="Immediate Placement" description="Rapid matching and placement for emergency situations — within hours, not days." index={0} />
        <FeatureCard icon={Zap} title="Respite Relief" description="Temporary care options that give foster families the breaks they need to recharge." index={1} />
      </div>
    </SectionBlock>

    <SectionBlock bg="cool" badge="Trauma-Informed" title="Trauma-Informed Care" description="Understanding trauma is critical to providing effective foster care.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={BookOpen} title="ACEs Framework" description="Tools built around Adverse Childhood Experiences research and best practices." index={0} />
        <FeatureCard icon={BookOpen} title="Behavioral Strategies" description="Evidence-based approaches for managing trauma-related behaviors." index={1} />
        <FeatureCard icon={BookOpen} title="De-escalation Tools" description="In-app guides and resources for crisis moments and de-escalation." index={2} />
      </div>
    </SectionBlock>

    <SectionBlock badge="Permanency" title="Permanency Planning" description="The ultimate goal — a stable, permanent home for every child.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={RotateCcw} title="Reunification" description="Tools and tracking to support safe, successful family reunification." index={0} />
        <FeatureCard icon={RotateCcw} title="Adoption" description="Streamlined documentation and profile management for adoption proceedings." index={1} />
        <FeatureCard icon={RotateCcw} title="Guardianship" description="Support for legal guardianship arrangements as an alternative path." index={2} />
      </div>
    </SectionBlock>

    <SectionBlock bg="warm" badge="Platform" title="How Habitat Pilot Supports Every Model" description="Regardless of care model, Habitat Pilot provides the tools you need.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={Database} title="Data Continuity" description="Child records follow them across placements and care models seamlessly." index={0} />
        <FeatureCard icon={Database} title="Communication Flow" description="All stakeholders stay connected regardless of care setting." index={1} />
        <FeatureCard icon={Database} title="Transition Support" description="Smooth transitions between care models with guided workflows." index={2} />
      </div>
    </SectionBlock>

    <SectionBlock badge="Why It Matters" title="Choosing the Right Model Matters" description="Wrong placement leads to instability. The right placement leads to long-term success.">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <FeatureCard icon={AlertTriangle} title="The Cost of Wrong Placement" description="Placement breakdowns cause emotional trauma, increase costs, and strain the entire system." index={0} />
        <FeatureCard icon={Home} title="The Power of Right Placement" description="When children are matched correctly, they build lasting bonds, succeed in school, and heal." index={1} />
      </div>
    </SectionBlock>

    <PageCTA title="Build Better Futures with Habitat Pilot" description="Every child deserves the right care model. Let us help you deliver it." primaryLabel="Get Started" secondaryLabel="Learn More" />
    <Footer />
  </div>
);

export default CareModels;
