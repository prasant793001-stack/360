import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    // Simulate successful submission
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Reset status after showing success
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-4">
            Get in Touch
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Have a question about our perfumes or want to place a custom order?
            We'd love to hear from you.
          </p>
        </div>

        <div className="glass p-8 md:p-12 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-cream/80 text-sm uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-darkGray/50 border border-darkGray/50 rounded-xl text-cream placeholder-cream/40 focus:outline-none focus:border-brand transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-cream/80 text-sm uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-darkGray/50 border border-darkGray/50 rounded-xl text-cream placeholder-cream/40 focus:outline-none focus:border-brand transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-cream/80 text-sm uppercase tracking-widest mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 bg-darkGray/50 border border-darkGray/50 rounded-xl text-cream placeholder-cream/40 focus:outline-none focus:border-brand transition-colors duration-300"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-cream/80 text-sm uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-darkGray/50 border border-darkGray/50 rounded-xl text-cream placeholder-cream/40 focus:outline-none focus:border-brand transition-colors duration-300 resize-none"
                placeholder="Tell us about your inquiry..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="w-full py-4 bg-brand text-black font-display font-bold uppercase tracking-widest rounded-xl hover:bg-brand/80 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {/* Status messages */}
            {status === "success" && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center">
                Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
              </div>
            )}
            {status === "error" && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center">
                Please fill in all required fields.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
