import React, { useState } from 'react';
import { Check, Copy, Send, ArrowUpRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct form transmission to Ravishka's email inbox via FormSubmit.co AJAX endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Message from Portfolio",
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name} - ${formData.subject}`,
          _template: "table"
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback: Open mailto client
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        setSubmitted(true);
      }
    } catch {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-[90vh] py-28 bg-[#ff4d00] text-black overflow-hidden flex items-center">
      {/* Background Animated Signal Rings */}
      <div className="absolute right-[-10vw] top-1/2 -translate-y-1/2 w-[70vw] h-[70vw] pointer-events-none" aria-hidden="true">
        <span className="absolute inset-0 rounded-full border border-black/15 animate-ping opacity-30 duration-1000" />
        <span className="absolute inset-[18%] rounded-full border border-black/20" />
        <span className="absolute inset-[36%] rounded-full border border-black/25" />
        <span className="absolute inset-[54%] rounded-full border border-black/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Direct Mail Link */}
          <div className="lg:col-span-6 space-y-8">
            <div className="font-mono text-xs uppercase tracking-widest text-black/80 font-medium">
              // CONNECT &amp; COLLABORATE
            </div>

            <h2 className="font-serif text-5xl sm:text-7xl font-medium tracking-tight text-black leading-[0.9]">
              LET'S GET IN TOUCH &amp;<br />
              <i className="text-white not-italic italic font-normal">BUILD TOGETHER.</i>
            </h2>

            <p className="text-black/80 text-base md:text-lg max-w-md font-sans leading-relaxed">
              Have a project in mind, need automated cloud pipelines, want to collaborate on AI systems, or produce event media? Feel free to reach out.
            </p>

            {/* Interactive Email Bar with Copy Button & Gmail Direct Web Link */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-lg sm:text-xl font-medium text-black border-b-2 border-black pb-1 hover:text-white hover:border-white transition-colors flex items-center gap-3 group"
                >
                  <span>{profile.email}</span>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-full bg-black/10 hover:bg-black hover:text-white border border-black/20 font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-1.5"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check size={13} className="text-[#00f59b]" /> : <Copy size={13} />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>

                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=Project%20Inquiry%20from%20Portfolio`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full bg-black/10 hover:bg-black hover:text-white border border-black/20 font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-1.5"
                    title="Open directly in Gmail browser"
                  >
                    <ExternalLink size={13} />
                    <span>Gmail Web</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Verified Direct Channels */}
            <div className="pt-6 border-t border-black/15 font-mono text-xs text-black/80 flex flex-wrap gap-4">
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LINKEDIN ↗
              </a>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GITHUB ↗
              </a>
              <a href={profile.socials.medium} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                MEDIUM ↗
              </a>
              <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                INSTAGRAM ↗
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Direct Terminal Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#090b10] border border-white/15 rounded-xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 font-mono text-xs text-[#9a9894]">
                <span className="flex items-center gap-2 text-white">
                  <span className="w-2 h-2 rounded-full bg-[#ff4d00]" />
                  <span>SEND A MESSAGE</span>
                </span>
                <span>DELIVERS TO GMAIL INBOX</span>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full border-2 border-[#00f59b] text-[#00f59b] flex items-center justify-center mx-auto mb-3">
                    <Check size={24} />
                  </div>
                  <h3 className="font-serif text-2xl text-white font-medium">
                    Message Dispatched!
                  </h3>
                  <p className="text-[#9a9894] text-xs max-w-sm mx-auto leading-relaxed font-sans">
                    Your message has been sent directly to:
                    <span className="text-white font-mono block font-medium text-xs my-2 px-2 py-1 bg-white/5 border border-white/10 rounded">
                      {profile.email}
                    </span>
                    Ravishka will receive it in his Gmail inbox and reply to your email ({formData.email || 'your email'}) shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                    className="mt-4 text-xs font-mono text-[#ff4d00] hover:underline block mx-auto"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div>
                    <label className="block text-[#9a9894] uppercase tracking-wider mb-1.5">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-2.5 rounded bg-white/5 border border-white/15 text-white placeholder-white/20 focus:outline-none focus:border-[#ff4d00]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#9a9894] uppercase tracking-wider mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 rounded bg-white/5 border border-white/15 text-white placeholder-white/20 focus:outline-none focus:border-[#ff4d00]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#9a9894] uppercase tracking-wider mb-1.5">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Subject of your message"
                      className="w-full px-4 py-2.5 rounded bg-white/5 border border-white/15 text-white placeholder-white/20 focus:outline-none focus:border-[#ff4d00]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#9a9894] uppercase tracking-wider mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      className="w-full px-4 py-2.5 rounded bg-white/5 border border-white/15 text-white placeholder-white/20 focus:outline-none focus:border-[#ff4d00] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded bg-[#ff4d00] hover:bg-[#ff7137] text-black font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
