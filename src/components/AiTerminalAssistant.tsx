import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, Terminal, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'system' | 'user' | 'assistant';
  text: string;
  timestamp: string;
  links?: { label: string; href: string }[];
}

export const AiTerminalAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'system',
      timestamp: 'SYSTEM / ONLINE',
      text: "Portfolio retrieval + connected intelligence assistant ready. Ask anything about Ravishka's cybersecurity background, DevOps pipelines, CloudSpace, or type /help for commands."
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleQuerySubmit = (e?: React.FormEvent, customPrompt?: string) => {
    if (e) e.preventDefault();
    const promptToUse = (customPrompt || query).trim();
    if (!promptToUse) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      timestamp: 'YOU',
      text: promptToUse
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuery('');

    // Generate intelligent response
    setTimeout(() => {
      const lower = promptToUse.toLowerCase();
      let reply = "";
      let links: { label: string; href: string }[] | undefined;

      if (lower.startsWith('/help')) {
        reply = "Available terminal commands:\n• /skills — View cybersecurity & DevOps capabilities\n• /projects — Browse operations & builds\n• /cloudspace — Info on CloudSpace v1.0 conference\n• /experience — View career & Metadew work\n• /contact — Direct email & social links\n• /clear — Clear terminal history";
      } else if (lower.startsWith('/clear')) {
        setMessages([
          {
            id: Date.now().toString(),
            sender: 'system',
            timestamp: 'SYSTEM / RESET',
            text: "Terminal log cleared. How can I assist your investigation?"
          }
        ]);
        return;
      } else if (lower.includes('cloudspace') || lower.startsWith('/cloudspace')) {
        reply = "Ravishka is the Founding Chairperson of CloudSpace v1.0 — Sri Lanka's largest cloud computing conference and SLTC's first-ever cloud initiative. He spearheaded the conference architecture, attendee validation platform, and coordinated with industry partners.";
        links = [{ label: 'View CloudSpace Project', href: '#work' }, { label: 'Community Section', href: '#community' }];
      } else if (lower.includes('codemania') || lower.includes('datathon')) {
        reply = "Ravishka served as Chairperson for Codemania V6.0 — Sri Lanka's largest inter-university Datathon. He architected the real-time submission evaluation engine and live scoreboard for over 30 university teams.";
        links = [{ label: 'View Datathon Project', href: '#work' }];
      } else if (lower.includes('skill') || lower.includes('devops') || lower.includes('tech') || lower.startsWith('/skills')) {
        reply = "Ravishka specializes in:\n• DevOps & Cloud: Docker, Kubernetes, CI/CD, GitHub Actions, Terraform, Microsoft Azure, AWS\n• Cybersecurity: Incident Triage, Network Protocol Analysis, Port Scanning, Linux Hardening, Wireshark, Snort\n• MLOps & AI: Python, FastAPI, PyTorch, LangChain, Ollama local model inference\n• Full-Stack: React, TypeScript, PostgreSQL, Next.js";
        links = [{ label: 'Open Constellation Graph', href: '#constellation' }];
      } else if (lower.includes('project') || lower.startsWith('/projects')) {
        reply = "Key documented builds include:\n1. Hardened CI/CD & Automated DevSecOps Pipeline (Trivy + K8s)\n2. Local LLM Inference Engine & RAG Pipeline (Ollama + LangChain)\n3. CloudSpace v1.0 National Event Platform\n4. Codemania V6.0 Datathon Engine\n5. Automated Vulnerability & Reconnaissance Tool\n6. CineVision Videography Portfolio";
        links = [{ label: 'Explore Project Archive', href: '#work' }];
      } else if (lower.includes('experience') || lower.includes('work') || lower.includes('metadew') || lower.startsWith('/experience')) {
        reply = "Career Field Log:\n• Metadew Technologies: Digital Marketing Specialist (Apr 2026 - Present)\n• Metadew Technologies: Application Support Engineer (Jan 2023 - Mar 2026)\n• Fiverr: Freelance Developer (2022 - Present)\n• Education: BSc (Hons) Cyber Security at SLTC (First Class Track), ICET HND (4.0 GPA), SLIM Diploma.";
        links = [{ label: 'View Full Timeline', href: '#journey' }];
      } else if (lower.includes('cert') || lower.includes('credential')) {
        reply = "Ravishka holds 15+ verified credentials including Microsoft Azure AZ-900, Cisco Network Defense & Cybersecurity, Fortinet Associate, Docker Essentials, and Python PCAP.";
        links = [{ label: 'Search Credentials Vault', href: '#credentials' }];
      } else if (lower.includes('contact') || lower.includes('email') || lower.startsWith('/contact')) {
        reply = "You can contact Ravishka directly at:\nEmail: contact.ravishkarathnayaka@gmail.com\nLinkedIn: linkedin.com/in/ravishkarathnayaka\nGitHub: github.com/ravishkarathnayaka";
        links = [{ label: 'Open Contact Terminal', href: '#contact' }];
      } else {
        reply = `Ravishka Rathnayaka is a Cybersecurity specialist and MLOps/DevOps engineer based in Colombo, Sri Lanka. He focuses on securing pipelines, hardening containers, orchestrating local LLMs, and leading developer communities. Would you like to explore his projects, certifications, or get in touch?`;
        links = [{ label: 'Explore Projects', href: '#work' }, { label: 'Connect with Ravishka', href: '#contact' }];
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        timestamp: 'WHOISRAVISHKA AI',
        text: reply,
        links
      };

      setMessages((prev) => [...prev, assistantMessage]);
    }, 400);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full border border-[#ff4d00] bg-[#06070a] text-[#ff4d00] flex items-center justify-center shadow-[0_0_30px_rgba(255,77,0,0.3)] hover:scale-110 hover:bg-[#ff4d00] hover:text-black transition-all group"
        aria-label="Open AI Terminal Assistant"
      >
        <span className="relative z-10 font-mono font-bold text-xs">AI</span>
        <div className="absolute inset-[-4px] rounded-full border border-[#ff4d00]/40 animate-ping opacity-60 pointer-events-none" />
      </button>

      {/* Interactive AI Drawer Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[min(440px,calc(100vw-2rem))] h-[min(620px,calc(100vh-4rem))] rounded-2xl border border-[#ff4d00]/50 bg-[#07080d]/95 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between font-mono text-xs text-[#9a9894] bg-black/60">
            <div className="flex items-center gap-2 text-white">
              <span className="w-2 h-2 rounded-full bg-[#ff4d00] shadow-[0_0_8px_#ff4d00]" />
              <span className="font-semibold tracking-wider">WHOISRAVISHKA AI</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#00f59b]">ONLINE</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded hover:bg-white/10 text-white"
                aria-label="Close Assistant"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-xs">
            {messages.map((m) => (
              <div 
                key={m.id}
                className={`p-3 rounded-lg ${
                  m.sender === 'user' 
                    ? 'bg-[#ff4d00]/15 border border-[#ff4d00]/30 text-white ml-8' 
                    : m.sender === 'system'
                    ? 'bg-white/5 border border-white/10 text-[#9a9894]'
                    : 'bg-[#0e1019] border border-white/10 text-[#f4f1eb]'
                }`}
              >
                <div className="flex items-center justify-between text-[9px] uppercase tracking-widest text-[#ff4d00] mb-1">
                  <span>{m.timestamp}</span>
                </div>
                <div className="whitespace-pre-line leading-relaxed text-xs">
                  {m.text}
                </div>

                {m.links && (
                  <div className="mt-3 pt-2 border-t border-white/10 flex flex-wrap gap-2">
                    {m.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1 text-[10px] text-[#ff4d00] hover:underline"
                      >
                        <span>{link.label}</span>
                        <ArrowRight size={10} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestion Chips */}
          <div className="p-2 border-t border-white/10 flex gap-2 overflow-x-auto bg-black/40 scrollbar-none font-mono text-[10px]">
            <button
              onClick={() => handleQuerySubmit(undefined, 'What are his DevOps skills?')}
              className="px-2.5 py-1 rounded bg-white/5 hover:bg-[#ff4d00]/20 hover:text-[#ff4d00] border border-white/10 text-[#9a9894] whitespace-nowrap transition-colors"
            >
              DevOps skills
            </button>
            <button
              onClick={() => handleQuerySubmit(undefined, 'Tell me about CloudSpace v1.0')}
              className="px-2.5 py-1 rounded bg-white/5 hover:bg-[#ff4d00]/20 hover:text-[#ff4d00] border border-white/10 text-[#9a9894] whitespace-nowrap transition-colors"
            >
              CloudSpace v1.0
            </button>
            <button
              onClick={() => handleQuerySubmit(undefined, 'Show certifications')}
              className="px-2.5 py-1 rounded bg-white/5 hover:bg-[#ff4d00]/20 hover:text-[#ff4d00] border border-white/10 text-[#9a9894] whitespace-nowrap transition-colors"
            >
              Certifications
            </button>
            <button
              onClick={() => handleQuerySubmit(undefined, '/help')}
              className="px-2.5 py-1 rounded bg-white/5 hover:bg-[#ff4d00]/20 hover:text-[#ff4d00] border border-white/10 text-[#9a9894] whitespace-nowrap transition-colors"
            >
              /help
            </button>
          </div>

          {/* Terminal Input Form */}
          <form onSubmit={handleQuerySubmit} className="p-3 border-t border-white/10 bg-black flex items-center gap-2 font-mono text-xs">
            <span className="text-[#ff4d00] font-bold">&gt;</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything or type /help..."
              className="flex-1 bg-transparent border-0 outline-none text-white placeholder-[#9a9894] text-xs"
            />
            <button
              type="submit"
              className="p-2 rounded bg-[#ff4d00] text-black hover:bg-[#ff7137] transition-colors"
              aria-label="Send Query"
            >
              <Send size={12} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
