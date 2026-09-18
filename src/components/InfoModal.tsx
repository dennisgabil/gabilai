import React, { useState } from "react";
import { ModalContent } from "../types.ts";
import {
  X,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Cpu,
  Globe2,
  ShieldCheck,
  Mail,
  Lock,
  User,
  Send,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface InfoModalProps {
  modalContent: ModalContent | null;
  onClose: () => void;
}

export default function InfoModal({ modalContent, onClose }: InfoModalProps) {
  const [connectSubmitted, setConnectSubmitted] = useState(false);
  const [authSubmitted, setAuthSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "overview" | "benchmarks" | "architecture"
  >("overview");

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    authEmail: "",
    authPassword: "",
  });

  if (!modalContent) return null;

  const handleConnectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConnectSubmitted(true);
    setTimeout(() => {
      // Auto close after showing success
    }, 2500);
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div
        id="info-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          id="info-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#101024] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-cyan-950/60 text-white"
        >
          {/* Close Button */}
          <button
            id="btn-close-modal"
            aria-label="Close dialog"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* CARD DETAILS VIEW */}
          {modalContent.type === "card" && modalContent.cardData && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-cyan-400 to-purple-500 shrink-0">
                  <img
                    src={modalContent.cardData.imageSrc}
                    alt={modalContent.cardData.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                    {modalContent.cardData.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-0.5">
                    {modalContent.cardData.title}
                  </h2>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-sm leading-relaxed text-neutral-200">
                {modalContent.cardData.fullContent ||
                  modalContent.cardData.description}
              </div>

              {modalContent.cardData.metrics && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{modalContent.cardData.metrics}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Dynamic Quantization
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Real-time weights pruning down to 1.58-bit precision.
                    </p>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <Globe2 className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Edge Synchronization
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Instant distributed model routing across 320+ edge points.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Close Specification
                </button>
              </div>
            </div>
          )}

          {/* DISCOVER VIEW */}
          {modalContent.type === "discover" && (
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-medium mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  GABILAI Autonomous Cognitive Architecture
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  Discover the Next Epoch of AI
                </h2>
                <p className="text-sm text-neutral-300 mt-1">
                  Engineered to synthesize perception, continuous reasoning, and
                  deterministic execution.
                </p>
              </div>

              {/* Subtabs */}
              <div className="flex border-b border-white/10 gap-4 text-xs sm:text-sm font-medium">
                {(["overview", "benchmarks", "architecture"] as const).map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-2 capitalize transition-colors ${
                        activeTab === tab
                          ? "text-cyan-400 border-b-2 border-cyan-400"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ),
                )}
              </div>

              {activeTab === "overview" && (
                <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
                  <p>
                    GABILAI is not just a language model; it is a foundational
                    neural operating fabric. By marrying multi-layer associative
                    memory with sparse mixture-of-experts (MoE), our system
                    handles complex industrial automation, hyper-personalized
                    customer telemetry, and synthetic research simulation with
                    near-zero latency.
                  </p>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-teal-400" />
                      Core Guarantees
                    </h4>
                    <ul className="text-xs space-y-1.5 text-neutral-300 list-disc list-inside">
                      <li>
                        Deterministic provenance tracking on all generated
                        artifacts.
                      </li>
                      <li>
                        Zero data retention policy across client inference
                        pipelines.
                      </li>
                      <li>
                        Self-healing context windows with continuous temporal
                        recollection.
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "benchmarks" && (
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-white">
                        End-to-End Latency
                      </span>
                      <span className="font-mono text-teal-300">
                        9.2 ms (7.8x faster)
                      </span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-teal-400 to-cyan-400 h-full w-[94%]" />
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-white">
                        Multimodal Reasoning Accuracy
                      </span>
                      <span className="font-mono text-teal-300">
                        98.7% SOTA
                      </span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-linear-to-r from-teal-400 to-cyan-400 h-full w-[98%]" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "architecture" && (
                <div className="p-4 rounded-2xl bg-[#0b0b18] border border-cyan-500/20 font-mono text-xs text-neutral-300 space-y-2">
                  <div className="text-cyan-400">
                    // GABILAI System Pipeline
                  </div>
                  <div>
                    Input Stream &gt; Quantized Tokenizer &gt; Latent Reasoning
                    Engine
                  </div>
                  <div>
                    Reasoning Engine &gt; Real-Time Verification Sandbox
                  </div>
                  <div className="text-teal-300">
                    Output Stream &gt; Verified Production Action
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Got It
                </button>
              </div>
            </div>
          )}

          {/* CONNECT WITH US VIEW */}
          {modalContent.type === "connect" && (
            <div>
              {connectSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-teal-400/20 text-teal-300 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you for reaching out. A GABILAI senior solutions
                    engineer will contact you within 2 business hours.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-4 px-6 py-2 rounded-full bg-white text-slate-950 font-semibold text-sm cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleConnectSubmit} className="space-y-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">
                      Connect With Us
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                      Discuss custom enterprise deployments, API access, or
                      collaborative AI research.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                        <input
                          required
                          type="text"
                          placeholder="Dennis Gabil"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Work Email
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                        <input
                          required
                          type="email"
                          placeholder="dennis@gabil.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Global Systems"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Project Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your use case, scaling goals, or integration requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-400 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-full text-neutral-300 hover:text-white text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-300 to-cyan-400 text-slate-950 font-semibold text-sm hover:opacity-95 flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                    >
                      <span>Send Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* AUTH VIEW (Sign In / Sign Up) */}
          {modalContent.type === "auth" && (
            <div>
              {authSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-teal-400/20 text-teal-300 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {modalContent.authMode === "signin"
                      ? "Welcome Back"
                      : "Account Created Successfully"}
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-sm mx-auto">
                    You have authenticated into the GABILAI Neural Console.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-4 px-6 py-2 rounded-full bg-white text-slate-950 font-semibold text-sm cursor-pointer"
                  >
                    Enter Workspace
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAuthSubmit} className="space-y-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">
                      {modalContent.authMode === "signin"
                        ? "Sign In to GABILAI"
                        : "Create GABILAI Account"}
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                      Access API keys, model benchmarks, and production
                      inference endpoints.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                      <input
                        required
                        type="email"
                        placeholder="you@domain.com"
                        value={formData.authEmail}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            authEmail: e.target.value,
                          })
                        }
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                      <input
                        required
                        type="password"
                        placeholder="••••••••••••"
                        value={formData.authPassword}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            authPassword: e.target.value,
                          })
                        }
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-full text-neutral-300 hover:text-white text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-300 to-cyan-400 text-slate-950 font-semibold text-sm hover:opacity-95 flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                    >
                      <span>
                        {modalContent.authMode === "signin"
                          ? "Sign In"
                          : "Create Account"}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
