import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Server, Shield, Users, Eye, Building, Calendar, ArrowRight, CheckCircle } from "lucide-react";
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
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={serverImage} alt="Server infrastructure" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          <div className="absolute inset-0 grid-overlay opacity-15" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-display font-medium tracking-[0.2em]">OUR SERVICES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Security Solutions for Every{" "}
              <span className="text-primary">Threat Level</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              From AI data centers to corporate campuses, Vigillink delivers armed, highly-trained security personnel with law enforcement-grade discipline and tactical proficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4 space-y-28">
          {services.map((service, index) => (
            <div key={service.title} className="space-y-8">
              {/* Image */}
              <div className="relative rounded-sm overflow-hidden border border-border">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="h-px w-8 bg-primary" />
                  <span className="text-primary text-xs font-display font-medium tracking-[0.2em]">{service.tag}</span>
                </div>
              </div>

              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start`}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                <div className="bg-card border border-border rounded-sm p-8">
                  <h3 className="font-display font-semibold text-foreground mb-4 text-sm tracking-wider">KEY CAPABILITIES</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-y border-border text-center">
        <div className="container mx-auto px-4">
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
        </div>
      </section>
    </Layout>
  );
};

export default Services;
