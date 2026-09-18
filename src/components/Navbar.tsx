import { useState } from "react";
import { ActiveNavTab } from "../types.ts";
import { NAV_LINKS } from "../data.ts";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeTab: ActiveNavTab;
  onTabChange: (tab: ActiveNavTab) => void;
  onOpenAuth: (mode: "signin" | "signup") => void;
}

export default function Navbar({
  activeTab,
  onTabChange,
  onOpenAuth,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="main-header"
      className="relative z-40 w-full pt-6 pb-2 px-6 sm:px-10 lg:px-14"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Brand Identity */}
        <a
          href="#home"
          id="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            onTabChange("home");
          }}
          className="group flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-95"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-teal-300 flex items-center justify-center shadow-lg shadow-cyan-500/25">
            <Sparkles className="w-4 h-4 text-slate-950 stroke-[2.5]" />
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-wider uppercase">
            GABIL<span className="text-cyan-400 font-extrabold">AI</span>
          </span>
        </a>

        {/* Center Floating Glass Navigation Capsule */}
        <nav
          id="desktop-navigation"
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-[#16162a]/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                id={`nav-item-${link.id}`}
                onClick={() => onTabChange(link.id as ActiveNavTab)}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full cursor-pointer select-none ${
                  isActive
                    ? "text-slate-950 font-semibold shadow-md"
                    : "text-neutral-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Sign In & Sign Up */}
        <div id="header-actions" className="hidden sm:flex items-center gap-3">
          <button
            id="btn-sign-in"
            onClick={() => onOpenAuth("signin")}
            className="px-5 py-2 text-sm font-medium text-neutral-200 hover:text-white rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
          >
            Sign In
          </button>
          <button
            id="btn-sign-up"
            onClick={() => onOpenAuth("signup")}
            className="px-5 py-2 text-sm font-semibold text-slate-950 rounded-full bg-gradient-to-r from-teal-300 to-cyan-400 hover:from-teal-200 hover:to-cyan-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/35 transition-all active:scale-95 cursor-pointer"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          id="btn-mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-white/10 border border-white/10 text-neutral-200 hover:text-white"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 p-4 rounded-2xl bg-[#121226]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-3"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onTabChange(link.id as ActiveNavTab);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeTab === link.id
                      ? "bg-white text-slate-950 font-semibold"
                      : "text-neutral-300 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center gap-2">
              <button
                onClick={() => {
                  onOpenAuth("signin");
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2 text-center text-sm font-medium text-white rounded-xl bg-white/5 border border-white/10"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  onOpenAuth("signup");
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2 text-center text-sm font-semibold text-slate-950 rounded-xl bg-gradient-to-r from-teal-300 to-cyan-400"
              >
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
