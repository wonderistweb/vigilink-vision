import { useState } from "react";
import Layout from "@/components/Layout";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import BrandEmblem from "@/components/BrandEmblem";
import teamBriefingImage from "@/assets/team-briefing.jpg";
import accessControlImage from "@/assets/access-control.jpg";

const benefits = [
  "Competitive compensation with performance bonuses",
  "Comprehensive health and dental benefits",
  "Ongoing professional training and certifications",
  "Career advancement opportunities nationwide",
  "Equipment and tactical gear provided",
  "Flexible scheduling options",
];

const requirements = [
  "Valid security guard license (state-specific)",
  "Clean background and drug screening",
  "Firearms permit / armed guard certification",
  "Prior law enforcement, military, or security experience preferred",
  "Strong communication and situational awareness skills",
  "Ability to maintain composure under pressure",
];

const Careers = () => {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    experience: "", position: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={teamBriefingImage} alt="Security team briefing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-display font-medium tracking-[0.2em]">CAREERS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Join the{" "}
              <span className="text-primary">Vanguard</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We're building a national team of elite security professionals. If you have law enforcement or military experience and want to protect the infrastructure that shapes the future, we want to hear from you.
            </p>
          </div>
        </div>
      </section>


      {/* Benefits & Requirements */}
      <section className="py-24 bg-card border-b border-border relative overflow-hidden">
        <BrandEmblem className="absolute right-[-8%] bottom-[-15%] w-[500px] h-[500px] md:w-[650px] md:h-[650px] text-white opacity-[0.02] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">What We Offer</h2>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Requirements</h2>
              <ul className="space-y-3">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Apply Now</h2>
            <p className="text-muted-foreground">
              Submit your information below and our recruiting team will be in touch within 48 hours.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16 bg-card border border-border rounded-sm">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">Application Received</h3>
              <p className="text-muted-foreground">Thank you for your interest. Our team will review your application and contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-display font-medium text-foreground mb-2">First Name *</label>
                  <input
                    required
                    type="text"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full h-11 px-4 bg-card border border-border rounded-sm text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-display font-medium text-foreground mb-2">Last Name *</label>
                  <input
                    required
                    type="text"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full h-11 px-4 bg-card border border-border rounded-sm text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-display font-medium text-foreground mb-2">Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full h-11 px-4 bg-card border border-border rounded-sm text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-display font-medium text-foreground mb-2">Phone *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full h-11 px-4 bg-card border border-border rounded-sm text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-display font-medium text-foreground mb-2">Years of Experience</label>
                  <select
                    value={form.experience}
                    onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    className="w-full h-11 px-4 bg-card border border-border rounded-sm text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select...</option>
                    <option value="0-2">0–2 years</option>
                    <option value="3-5">3–5 years</option>
                    <option value="5-10">5–10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-display font-medium text-foreground mb-2">Position of Interest</label>
                  <select
                    value={form.position}
                    onChange={(e) => setForm({ ...form, position: e.target.value })}
                    className="w-full h-11 px-4 bg-card border border-border rounded-sm text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select...</option>
                    <option value="armed-specialist">Armed Security Specialist</option>
                    <option value="data-center">Data Center Security Officer</option>
                    <option value="executive-protection">Executive Protection Agent</option>
                    <option value="supervisor">Site Supervisor</option>
                    <option value="operations">Operations Coordinator</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-display font-medium text-foreground mb-2">Tell Us About Yourself</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Describe your background, certifications, and why you're interested in Vigillink..."
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 flex items-center justify-center gap-2 rounded-sm bg-primary text-primary-foreground font-display font-semibold tracking-wide hover:bg-primary/90 transition-colors"
              >
                SUBMIT APPLICATION <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
