import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Shield, Server, Users, Eye, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-datacenter.jpg";
import specialistImage from "@/assets/security-specialist.jpg";
import operationsCenterImage from "@/assets/operations-center.jpg";
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

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="AI Data Center Infrastructure" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
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

        {/* Scan line */}
        <div className="absolute bottom-0 left-0 right-0 h-px scan-line" />
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-10 text-center ${
                  i < stats.length - 1 ? "border-r border-border" : ""
                }`}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-6 bg-card border border-border rounded-sm hover:border-primary/50 hover:glow-border transition-all duration-300"
              >
                <service.icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-display font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-display font-medium tracking-wide hover:gap-3 transition-all"
            >
              VIEW ALL SERVICES <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
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
            </div>
            <div className="relative">
              <img
                src={specialistImage}
                alt="Vigillink Security Specialist"
                className="w-full rounded-sm border border-border"
              />
              <div className="absolute inset-0 rounded-sm border border-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Operations Center */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src={operationsCenterImage} alt="24/7 Security Operations Center" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-xl md:text-2xl font-display font-bold text-foreground text-center px-4">
            24/7 Security Operations Center — Always Watching
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={datacenterCorridorImage} alt="Data center infrastructure" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
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
        </div>
      </section>
    </Layout>
  );
};

export default Index;
