import React from 'react';
import { NoiseAndCursor } from './components/NoiseAndCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignalMarquee } from './components/SignalMarquee';
import { Manifesto } from './components/Manifesto';
import { SocConsole } from './components/SocConsole';
import { ThreatIntel } from './components/ThreatIntel';
import { Constellation } from './components/Constellation';
import { ProjectsArchive } from './components/ProjectsArchive';
import { CredentialsVault } from './components/CredentialsVault';
import { WritingSection } from './components/WritingSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { CommunitySection } from './components/CommunitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiTerminalAssistant } from './components/AiTerminalAssistant';

export function App() {
  return (
    <div className="min-h-screen bg-[#060709] text-[#f4f1eb] relative selection:bg-[#ff4d00] selection:text-black">
      {/* Noise and cursor lighting layer */}
      <NoiseAndCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Flow */}
      <main id="main-content">
        <Hero />
        <SignalMarquee />
        <Manifesto />
        <SocConsole />
        <ThreatIntel />
        <Constellation />
        <ProjectsArchive />
        <CredentialsVault />
        <WritingSection />
        <JourneyTimeline />
        <CommunitySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive AI Terminal Assistant */}
      <AiTerminalAssistant />
    </div>
  );
}

export default App;
