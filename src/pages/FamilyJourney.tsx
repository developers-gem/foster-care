import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { SectionBlock, FeatureCard, PageCTA } from "@/components/PageBlocks";
import {
  UserPlus, ClipboardList, Heart, Users, GraduationCap, ArrowRightLeft, Brain
} from "lucide-react";
import familyBanner from "@/assets/hero-family-banner.jpg";

const FamilyJourney = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      badge="The Family Journey"
      title={<>From First Inquiry to <span className="text-secondary">Lifelong Impact</span></>}
      description="Becoming a foster parent is a journey filled with purpose — and challenges. Habitat Pilot ensures you are never alone at any stage."
      ctaText="Start Your Journey"
      bannerImage={familyBanner}
    />

    <SectionBlock badge="Step 1" title="Getting Started – Easy Onboarding" description="We simplify the first step with digital registration, guided onboarding, and orientation materials.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={UserPlus} title="Digital Registration" description="Complete your application entirely online — no paper forms required." index={0} />
        <FeatureCard icon={UserPlus} title="Guided Onboarding" description="Step-by-step guidance through every stage of the registration process." index={1} />
        <FeatureCard icon={UserPlus} title="Orientation Materials" description="Access comprehensive resources to understand what to expect." index={2} />
      </div>
    </SectionBlock>

    <SectionBlock bg="warm" badge="Step 2" title="Licensing Made Simple" description="The licensing process can be overwhelming — we make it easy.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={ClipboardList} title="Step-by-Step Checklist" description="Clear, actionable checklist so you never miss a requirement." index={0} />
        <FeatureCard icon={ClipboardList} title="Document Upload" description="Securely upload all required documents in one place." index={1} />
        <FeatureCard icon={ClipboardList} title="Progress Tracking" description="See exactly where you are in the licensing process at all times." index={2} />
      </div>
    </SectionBlock>

    <SectionBlock badge="Step 3" title="First Placement Support" description="The first placement is emotional and critical. Habitat Pilot is there from hour one.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={Heart} title="First 48-Hour Guidance" description="Detailed support plan for the critical first two days of placement." index={0} />
        <FeatureCard icon={Heart} title="Daily Check-Ins" description="Automated and personal check-ins to ensure everything is going smoothly." index={1} />
        <FeatureCard icon={Heart} title="Direct Communication" description="Instant access to your caseworker for questions and concerns." index={2} />
      </div>
    </SectionBlock>

    <SectionBlock bg="cool" badge="Community" title="Ongoing Support & Community" description="You're part of a community, not just a system.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={Users} title="Peer Support Groups" description="Connect with other foster families who understand your journey." index={0} />
        <FeatureCard icon={Users} title="Mentor Families" description="Get matched with experienced foster families for guidance." index={1} />
        <FeatureCard icon={Users} title="Discussion Forums" description="Share experiences, ask questions, and find support 24/7." index={2} />
      </div>
    </SectionBlock>

    <SectionBlock badge="Growth" title="Training & Growth" description="Learn as you go with continuous development resources.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={GraduationCap} title="Behavioral Training" description="Evidence-based strategies for managing challenging behaviors." index={0} />
        <FeatureCard icon={GraduationCap} title="Emotional Support Tools" description="Resources for maintaining your own well-being as a caregiver." index={1} />
        <FeatureCard icon={GraduationCap} title="Parenting Strategies" description="Tailored approaches for different ages and needs." index={2} />
      </div>
    </SectionBlock>

    <SectionBlock bg="warm" badge="Transitions" title="Handling Transitions" description="We support both reunification and adoption with dedicated tools.">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <FeatureCard icon={ArrowRightLeft} title="Reunification Support" description="Family coordination tools and progress tracking to support successful reunification." items={["Family coordination", "Progress tracking", "Gradual transition plans"]} index={0} />
        <FeatureCard icon={ArrowRightLeft} title="Adoption Pathway" description="Seamless profile transition and documentation continuity for adoption processes." items={["Profile transition", "Documentation continuity", "Legal support resources"]} index={1} />
      </div>
    </SectionBlock>

    <SectionBlock badge="Wellness" title="Emotional Support for Families" description="Foster parenting is emotionally intense. We provide the support you need.">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard icon={Brain} title="Mental Health Resources" description="Access to professional mental health support and self-care guides." index={0} />
        <FeatureCard icon={Brain} title="Support Guides" description="Practical guides for navigating the emotional challenges of foster care." index={1} />
        <FeatureCard icon={Brain} title="Community Discussions" description="Safe spaces to share and process your experiences with others." index={2} />
      </div>
    </SectionBlock>

    <PageCTA title="Start Your Foster Care Journey Today" description="Apply now or talk to an advisor to learn how Habitat Pilot supports your family." primaryLabel="Apply Now" secondaryLabel="Talk to an Advisor" />
    <Footer />
  </div>
);

export default FamilyJourney;
