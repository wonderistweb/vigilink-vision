import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Target, Award, Users } from "lucide-react";
import BrandEmblem from "@/components/BrandEmblem";
import { RevealSection } from "@/hooks/useScrollReveal";
import teamImage from "@/assets/team-facility.png";
import facilityImage from "@/assets/facility-exterior.jpg";
import foundersImage from "@/assets/founders-ops-center.png";

const values = [
  { icon: Shield, title: "Integrity", description: "Every action we take upholds the highest ethical and professional standards." },
  { icon: Target, title: "Precision", description: "Calculated, methodical security operations with zero margin for error." },
  { icon: Award, title: "Excellence", description: "Continuous training ensures our specialists remain the best in the industry." },
  { icon: Users, title: "Accountability", description: "Transparent operations with full reporting and chain-of-command discipline." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={facilityImage} alt="Vigillink secured facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl fade-in-up">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-display font-medium tracking-[0.2em]">ABOUT VIGILLINK</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              From Regional Foundation to{" "}
              <span className="text-primary">National Reach</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We protect the hardware that powers the future. Vigillink is the evolution of Security Niagara—built on over a decade of operational excellence and forged for the demands of national infrastructure security.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div className="relative">
                <img src={teamImage} alt="Vigillink operations team" className="w-full rounded-sm border border-border" />
              </div>
            </RevealSection>
            <RevealSection delay={0.2}>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Vigillink Security Group began as Security Solutions of Niagara, founded by Detective Paul Kudela and Officer Jason Haug in 2018. Both brought extensive law enforcement experience—Paul as a veteran detective and Jason as an operations specialist who managed all facets of security business operations.
                </p>
                <p>
                  Building on the foundation laid by KJR Security (established in 2010), they assembled a team of highly trained, off-duty certified law enforcement officers who shared their commitment to professional, reliable security services.
                </p>
                <p>
                  As the AI data center industry exploded nationally, clients began seeking specialized physical security for their most sensitive computing facilities. Vigillink was born—a rebrand and strategic evolution positioning the firm as the premier provider of armed security for critical digital infrastructure nationwide.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative overflow-hidden">
        <BrandEmblem className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] text-white opacity-[0.02] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <div className="text-center mb-16">
              <div className="flex items-center gap-2 justify-center mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-display font-medium tracking-[0.2em]">OUR VALUES</span>
                <div className="h-px w-12 bg-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                The Principles That Drive Us
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <RevealSection key={v.title} delay={i * 0.1}>
                <div className="p-6 bg-card border border-border rounded-sm text-center h-full">
                  <v.icon className="w-10 h-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-card border-y border-border digital-texture overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-display font-medium tracking-[0.2em]">LEADERSHIP</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Led by Those Who Serve</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our leadership team brings decades of combined experience in law enforcement, military operations, and private security. Every decision is informed by real-world field experience and a deep understanding of threat landscapes.
              </p>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-display font-semibold text-foreground">Paul Kudela — Co-Founder</h3>
                  <p className="text-sm text-muted-foreground">Veteran detective with extensive experience in criminal investigation and security operations.</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-display font-semibold text-foreground">Jason Haug — Co-Founder</h3>
                  <p className="text-sm text-muted-foreground">Operations specialist with deep expertise in security logistics, personnel management, and business operations.</p>
                </div>
              </div>
            </RevealSection>
            <RevealSection delay={0.2}>
              <img src={foundersImage} alt="Vigillink co-founders Paul Kudela and Jason Haug in operations center" className="w-full rounded-sm border border-border" />
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <RevealSection className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Ready to Work With the Best?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Whether you need armed security for a new AI data center or want to upgrade your facility's protection, we're here.
          </p>
          <Link
            to="/contact"
            className="inline-flex h-12 px-8 items-center justify-center rounded-sm bg-primary text-primary-foreground font-display font-semibold tracking-wide hover:bg-primary/90 transition-colors gap-2"
          >
            GET IN TOUCH <ArrowRight size={16} />
          </Link>
        </RevealSection>
      </section>
    </Layout>
  );
};

export default About;
