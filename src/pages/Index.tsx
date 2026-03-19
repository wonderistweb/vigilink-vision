import { Link } from "react-router-dom";
import NeuralNetwork from "@/components/NeuralNetwork";
import Layout from "@/components/Layout";
import BrandEmblem from "@/components/BrandEmblem";
import { Shield, Server, Users, Eye, ArrowRight, CheckCircle, Quote } from "lucide-react";
import { RevealSection } from "@/hooks/useScrollReveal";
import heroImage from "@/assets/hero-datacenter.jpg";
import clientHandshake2Image from "@/assets/client-handshake-2.png";
import operationsCenterImage from "@/assets/operations-center.jpg";
import conferenceImage from "@/assets/conference-presentation.png";
import datacenterCorridorImage from "@/assets/datacenter-corridor.jpg";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "24/7", label: "Operational Coverage" },
  { value: "100%", label: "Licensed & Armed" },
  { value: "50+", label: "Facilities Protected" },
];

const services = [
  {
    icon: Server,
    title: "Data Center Elite",
    description: "Specialized armed security for AI data centers, cloud infrastructure, and high-value computing environments.",
  },
  {
    icon: Shield,
    title: "Critical Infrastructure",
    description: "Multi-layered physical protection for energy, telecommunications, and mission-critical facilities.",
  },
  {
    icon: Users,
    title: "Executive Protection",
    description: "Close protection services for executives, dignitaries, and high-profile personnel in sensitive environments.",
  },
  {
    icon: Eye,
    title: "Surveillance & Monitoring",
    description: "Advanced surveillance integration with physical response teams for total situational awareness.",
  },
];

const testimonials = [
  {
    quote: "Vigillink transformed our data center security posture overnight. Their team understands AI infrastructure at a level no other security firm can match.",
    name: "Director of Operations",
    company: "Tier IV AI Data Center, Virginia",
  },
  {
    quote: "The professionalism and tactical expertise of Vigillink's armed specialists gives us complete confidence in the physical security of our GPU clusters.",
    name: "VP of Facilities",
    company: "Cloud Computing Provider, Texas",
  },
  {
    quote: "We evaluated a dozen firms before choosing Vigillink. Their law enforcement backgrounds and data center specialization made them the clear choice.",
    name: "Chief Security Officer",
    company: "National Infrastructure Company",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="AI Data Center Infrastructure" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
          <NeuralNetwork className="opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          <div className="absolute inset-0 grid-overlay opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl fade-in-up">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-display font-medium tracking-[0.2em]">
                MISSION-CRITICAL SECURITY
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-6 text-foreground">
              Securing the Pulse of{" "}
              <span className="text-primary glow-text">Intelligence</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Elite physical security tailored for national AI infrastructure and high-stakes data environments. Armed specialists. Redundant security layers. Zero compromise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex h-12 px-8 items-center justify-center rounded-sm bg-primary text-primary-foreground font-display font-semibold tracking-wide hover:bg-primary/90 transition-colors gap-2"
              >
                SECURE A CONSULTATION <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex h-12 px-8 items-center justify-center rounded-sm border border-border text-foreground font-display font-medium tracking-wide hover:border-primary hover:text-primary transition-colors"
              >
                OUR SERVICES
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px scan-line" />
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <RevealSection key={stat.label} delay={i * 0.1}>
                <div
                  className={`py-10 text-center ${
                    i < stats.length - 1 ? "border-r border-border" : ""
                  }`}
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <RevealSection>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-display font-medium tracking-[0.2em]">WHAT WE DO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Security Solutions for Any Challenge
            </h2>
            <p className="text-muted-foreground max-w-xl mb-12">
              From AI data centers to executive protection, Vigillink delivers uncompromising physical security across the nation's most critical environments.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <RevealSection key={service.title} delay={i * 0.1}>
                <div className="group p-6 bg-card border border-border rounded-sm hover:border-primary/50 hover:glow-border transition-all duration-300 h-full">
                  <service.icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-display font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={0.3}>
            <div className="mt-10 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-primary font-display font-medium tracking-wide hover:gap-3 transition-all"
              >
                VIEW ALL SERVICES <ArrowRight size={16} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-card border-y border-border digital-texture overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-display font-medium tracking-[0.2em]">WHO WE ARE</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                From Regional Roots to National Reach
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded as Security Niagara, Vigillink has evolved from a respected regional security provider into a national force specializing in critical infrastructure protection. Our team of highly trained, armed security specialists brings law enforcement-grade discipline to every engagement.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Armed specialists with law enforcement backgrounds",
                  "Specialized training for AI & data center environments",
                  "9+ annual certifications including active shooter response",
                  "24/7 operational command center",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-display font-medium tracking-wide hover:gap-3 transition-all"
              >
                LEARN MORE <ArrowRight size={16} />
              </Link>
            </RevealSection>
            <RevealSection delay={0.2}>
              <div className="relative">
                <img
                  src={clientHandshake2Image}
                  alt="Vigillink securing new data center security contract"
                  className="w-full rounded-sm border border-border"
                />
                <div className="absolute inset-0 rounded-sm border border-primary/20" />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <BrandEmblem className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] text-white opacity-[0.02] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <div className="text-center mb-16">
              <div className="flex items-center gap-2 justify-center mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-display font-medium tracking-[0.2em]">TESTIMONIALS</span>
                <div className="h-px w-12 bg-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Trusted by Industry Leaders
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <RevealSection key={i} delay={i * 0.15}>
                <div className="relative p-8 bg-card border border-border rounded-sm h-full flex flex-col">
                  <Quote className="w-8 h-8 text-primary/30 mb-4 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1 italic">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{t.company}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Leadership */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <div className="relative">
                <img src={conferenceImage} alt="Vigillink leadership presenting AI data center security solutions at industry conference" className="w-full rounded-sm border border-border" />
                <div className="absolute inset-0 rounded-sm border border-primary/20" />
              </div>
            </RevealSection>
            <RevealSection delay={0.2}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-display font-medium tracking-[0.2em]">INDUSTRY LEADERS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Shaping the Future of Data Center Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our leadership team regularly presents at industry conferences, sharing expertise on physical security best practices for AI infrastructure, advanced threat detection, and zero-trust architecture for computing facilities.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA with Brand Emblem */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={datacenterCorridorImage} alt="Data center infrastructure" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <BrandEmblem className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] text-white opacity-[0.02] pointer-events-none" />
        <RevealSection className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Ready to Secure Your Infrastructure?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Whether you're building a new data center or need to upgrade your existing security posture, Vigillink is ready to deploy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex h-12 px-8 items-center justify-center rounded-sm bg-primary text-primary-foreground font-display font-semibold tracking-wide hover:bg-primary/90 transition-colors gap-2"
            >
              CONTACT US <ArrowRight size={16} />
            </Link>
            <Link
              to="/careers"
              className="inline-flex h-12 px-8 items-center justify-center rounded-sm border border-border text-foreground font-display font-medium tracking-wide hover:border-primary hover:text-primary transition-colors"
            >
              JOIN OUR TEAM
            </Link>
          </div>
        </RevealSection>
      </section>
    </Layout>
  );
};

export default Index;
