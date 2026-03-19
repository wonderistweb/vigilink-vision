import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Server, Shield, Users, Eye, Building, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import BrandEmblem from "@/components/BrandEmblem";
import NeuralNetwork from "@/components/NeuralNetwork";
import { RevealSection } from "@/hooks/useScrollReveal";
import serverImage from "@/assets/server-detail.jpg";
import datacenterCorridorImage from "@/assets/datacenter-corridor.jpg";
import accessControlImage from "@/assets/access-control.jpg";
import operationsCenterImage from "@/assets/operations-center.jpg";
import datacenterExteriorImage from "@/assets/datacenter-exterior.jpg";
import infrastructureImage from "@/assets/infrastructure-night.jpg";
import teamBriefingImage from "@/assets/team-briefing.jpg";

const services = [
  {
    icon: Server,
    title: "AI Data Center Security",
    tag: "DATA CENTER ELITE",
    image: datacenterCorridorImage,
    description: "Purpose-built security programs for AI and cloud computing facilities. Our specialists understand the unique threat profile of data centers—from insider threats to physical perimeter defense.",
    features: [
      "Armed perimeter and interior patrol",
      "Multi-zone access control enforcement",
      "Equipment transport escort & chain of custody",
      "24/7 security operations center integration",
      "Threat assessment & vulnerability auditing",
    ],
  },
  {
    icon: Users,
    title: "Executive Protection",
    tag: "CLOSE PROTECTION",
    image: teamBriefingImage,
    description: "Discreet, professional close protection for C-suite executives, visiting dignitaries, and high-profile personnel operating in or around sensitive facilities.",
    features: [
      "Advance threat assessment & route planning",
      "Armed close protection detail",
      "Secure transportation coordination",
      "Event security management",
      "Travel security protocols",
    ],
  },
  {
    icon: Shield,
    title: "Critical Infrastructure Protection",
    tag: "INFRASTRUCTURE",
    image: infrastructureImage,
    description: "Comprehensive physical security for energy facilities, telecommunications hubs, water treatment plants, and other essential infrastructure that demands zero-failure protection.",
    features: [
      "Perimeter defense & intrusion response",
      "Regulatory compliance support (NERC CIP, etc.)",
      "Emergency action plan development",
      "Coordination with local law enforcement",
      "Redundant security layer design",
    ],
  },
  {
    icon: Eye,
    title: "Surveillance & Monitoring",
    tag: "SURVEILLANCE",
    image: operationsCenterImage,
    description: "Advanced surveillance system oversight integrated with rapid physical response teams, ensuring threats are detected and neutralized before they escalate.",
    features: [
      "CCTV & sensor monitoring",
      "Alarm response & verification",
      "License plate & facial recognition integration",
      "Incident documentation & reporting",
      "System health & uptime monitoring",
    ],
  },
  {
    icon: Building,
    title: "Property & Building Security",
    tag: "PROPERTY",
    image: accessControlImage,
    description: "Professional armed security for commercial properties, corporate campuses, industrial sites, and high-value real estate portfolios.",
    features: [
      "Lobby & access point staffing",
      "Patrol & incident response",
      "Tenant & visitor management",
      "After-hours security programs",
      "Loss prevention & asset protection",
    ],
  },
  {
    icon: Calendar,
    title: "Event Security",
    tag: "EVENTS",
    image: datacenterExteriorImage,
    description: "Scalable security solutions for corporate events, product launches, shareholder meetings, and large-scale public gatherings.",
    features: [
      "Crowd management & flow control",
      "VIP & talent protection",
      "Credential verification",
      "Emergency evacuation planning",
      "Post-event security debriefing",
    ],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const active = services[activeService];

  return (
    <Layout>
      {/* Hero with Neural Network */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={serverImage} alt="Server infrastructure" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <NeuralNetwork className="opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl fade-in-up">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-display font-medium tracking-[0.2em]">OUR SERVICES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Security Solutions for Every{" "}
              <span className="text-primary glow-text">Threat Level</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              From AI data centers to corporate campuses, Vigillink delivers armed, highly-trained security personnel with law enforcement-grade discipline and tactical proficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Service Selector */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Explore Our Capabilities
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Select a service area to learn more about our specialized security solutions.
              </p>
            </div>
          </RevealSection>

          {/* Service tabs */}
          <RevealSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-16">
              {services.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setActiveService(i)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-sm font-display text-sm font-medium tracking-wide transition-all duration-300 ${
                    i === activeService
                      ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(192_100%_50%/0.3)]"
                      : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  <s.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{s.tag}</span>
                </button>
              ))}
            </div>
          </RevealSection>

          {/* Active service detail */}
          <div
            key={activeService}
            className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-border rounded-sm overflow-hidden bg-card animate-fade-in"
          >
            {/* Image column */}
            <div className="lg:col-span-2 relative min-h-[300px]">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary text-xs font-display font-medium tracking-[0.2em]">{active.tag}</span>
              </div>
            </div>

            {/* Content column */}
            <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <active.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">{active.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {active.description}
              </p>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-4 text-sm tracking-wider">KEY CAPABILITIES</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {active.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Grid Overview */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        <NeuralNetwork className="opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <RevealSection>
            <div className="text-center mb-16">
              <div className="flex items-center gap-2 justify-center mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-display font-medium tracking-[0.2em]">FULL SPECTRUM</span>
                <div className="h-px w-12 bg-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Comprehensive Security Architecture
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <RevealSection key={s.title} delay={i * 0.1}>
                <button
                  onClick={() => {
                    setActiveService(i);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  className="w-full text-left group p-8 bg-background border border-border rounded-sm hover:border-primary/50 transition-all duration-300 relative overflow-hidden h-full"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                    <BrandEmblem className="w-full h-full text-primary" />
                  </div>
                  <s.icon className="w-10 h-10 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_hsl(192_100%_50%/0.5)] transition-all duration-300" strokeWidth={1.5} />
                  <h3 className="font-display font-bold text-foreground mb-2 text-lg">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-display font-medium group-hover:gap-2 transition-all">
                    EXPLORE <ArrowRight size={14} />
                  </span>
                </button>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <BrandEmblem className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] text-white opacity-[0.02] pointer-events-none" />
        <RevealSection className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Need a Custom Security Solution?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Every facility has unique vulnerabilities. Let us design a security program that meets your exact requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex h-12 px-8 items-center justify-center rounded-sm bg-primary text-primary-foreground font-display font-semibold tracking-wide hover:bg-primary/90 transition-colors gap-2"
          >
            REQUEST A PROPOSAL <ArrowRight size={16} />
          </Link>
        </RevealSection>
      </section>
    </Layout>
  );
};

export default Services;
