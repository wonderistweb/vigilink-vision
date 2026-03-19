import { useState } from "react";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import BrandEmblem from "@/components/BrandEmblem";
import datacenterExteriorImage from "@/assets/datacenter-exterior.jpg";
import clientHandshakeImage from "@/assets/client-handshake.png";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
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
          <img src={datacenterExteriorImage} alt="Secured data center facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-display font-medium tracking-[0.2em]">CONTACT</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Secure a{" "}
              <span className="text-primary">Consultation</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Ready to discuss your security requirements? Our team is standing by to design a protection program tailored to your facility and threat profile.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        <BrandEmblem className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] text-white opacity-[0.02] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're commissioning a new data center or evaluating your current security posture, we provide complimentary threat assessments for qualified facilities.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">info@vigillink.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">(716) 555-0100</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm mb-1">Headquarters</h3>
                    <p className="text-muted-foreground text-sm">National Operations — United States</p>
                  </div>
                </div>
              </div>

              <div className="rounded-sm overflow-hidden border border-border">
                <img src={clientHandshakeImage} alt="Vigillink finalizing security contract with client at data center facility" className="w-full h-48 object-cover" />
              </div>

              <div className="p-6 border border-border rounded-sm bg-background relative overflow-hidden">
                <h3 className="font-display font-semibold text-foreground text-sm mb-2 relative z-10">RESPONSE TIME</h3>
                <p className="text-muted-foreground text-sm">
                  All inquiries receive a response within 24 hours. For urgent security needs, call our operations line directly.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="text-center py-20 bg-background border border-border rounded-sm">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">Message Received</h3>
                  <p className="text-muted-foreground">A member of our operations team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-display font-medium text-foreground mb-2">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full h-11 px-4 bg-background border border-border rounded-sm text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-display font-medium text-foreground mb-2">Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full h-11 px-4 bg-background border border-border rounded-sm text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
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
                        className="w-full h-11 px-4 bg-background border border-border rounded-sm text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-display font-medium text-foreground mb-2">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full h-11 px-4 bg-background border border-border rounded-sm text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-display font-medium text-foreground mb-2">Message *</label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your facility and security requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-12 flex items-center justify-center gap-2 rounded-sm bg-primary text-primary-foreground font-display font-semibold tracking-wide hover:bg-primary/90 transition-colors"
                  >
                    SEND MESSAGE <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
