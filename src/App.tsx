import { useState } from "react";
import Navbar from "./components/Navbar.tsx";
import HeroSection from "./components/HeroSection.tsx";
import FeatureCards from "./components/FeatureCards.tsx";
import InfoModal from "./components/InfoModal.tsx";
import SectionViews from "./components/SectionViews.tsx";
import { ActiveNavTab, FeatureCardItem, ModalContent } from "./types.ts";
import { FEATURE_CARDS } from "./data.ts";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveNavTab>("home");
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const handleSelectCard = (card: FeatureCardItem) => {
    setModalContent({
      type: "card",
      title: card.title,
      cardData: card,
    });
  };

  const handleDiscover = () => {
    setModalContent({
      type: "discover",
      title: "Discover GABILAI AI Architecture",
      subtitle: "Next-generation cognitive inference engine",
    });
  };

  const handleConnect = () => {
    setModalContent({
      type: "connect",
      title: "Connect With Us",
      subtitle:
        "Schedule an enterprise consultation or technical demonstration",
    });
  };

  const handleOpenAuth = (mode: "signin" | "signup") => {
    setModalContent({
      type: "auth",
      title: mode === "signin" ? "Sign In" : "Create Account",
      authMode: mode,
    });
  };

  return (
    <div
      id="app-root"
      className="relative min-h-screen bg-[#070714] text-white flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden font-sans"
    >
      {/* Dynamic Background Ambient Gradients */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      >
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[150px]" />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[140px]" />

        {/* Subtle grid mesh overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      {/* Top Header / Navigation */}
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenAuth={handleOpenAuth}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col justify-center">
        {activeTab === "home" ? (
          <>
            <HeroSection
              onDiscover={handleDiscover}
              onConnect={handleConnect}
            />

            <FeatureCards
              cards={FEATURE_CARDS}
              onSelectCard={handleSelectCard}
            />
          </>
        ) : (
          <SectionViews
            type={activeTab}
            onBackToHome={() => setActiveTab("home")}
            onConnect={handleConnect}
          />
        )}
      </main>

      {/* Subtle Footer Bar */}
      <footer
        id="app-footer"
        className="relative z-10 py-6 border-t border-white/5 text-center text-xs text-neutral-400"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="font-medium text-neutral-300">
              GABILAI Intelligence Systems © {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex items-center gap-6 text-neutral-400">
            <button
              onClick={handleDiscover}
              className="hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Framework Specs
            </button>
            <button
              onClick={handleConnect}
              className="hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Enterprise Inquiry
            </button>
            <span className="text-neutral-500 font-mono text-[11px]">
              Sub-12ms Engine
            </span>
          </div>
        </div>
      </footer>

      {/* Interactive Modal Dialog */}
      <InfoModal
        modalContent={modalContent}
        onClose={() => setModalContent(null)}
      />
    </div>
  );
}
