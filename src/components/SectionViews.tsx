import {
  Sparkles,
  Cpu,
  Layers,
  Terminal,
  Shield,
  Workflow,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";

interface SectionViewsProps {
  type: "about" | "features" | "function";
  onBackToHome: () => void;
  onConnect: () => void;
}

export default function SectionViews({
  type,
  onBackToHome,
  onConnect,
}: SectionViewsProps) {
  return (
    <motion.section
      key={type}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative z-20 w-full max-w-5xl mx-auto px-6 py-10 min-h-[500px]"
    >
      <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase">
          <Sparkles className="w-4 h-4" />
          <span>GABILAI // {type.toUpperCase()}</span>
        </div>
        <button
          onClick={onBackToHome}
          className="text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          ← Return to Overview
        </button>
      </div>

      {type === "about" && (
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Pioneering Cognitive Architecture
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed max-w-3xl">
              Founded on the premise that artificial intelligence should not
              just generate, but perceive, reason, and harmonize with complex
              real-world dynamics. GABILAI develops foundational intelligence
              frameworks for global institutions, creative studios, and
              automated industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-3xl bg-[#121226]/60 border border-white/10 backdrop-blur-xl">
              <div className="text-3xl font-black text-white">42+</div>
              <div className="text-xs text-cyan-300 font-mono mt-1">
                Territories Deployed
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                Serving enterprise workloads across North America, EMEA, and
                APAC.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-[#121226]/60 border border-white/10 backdrop-blur-xl">
              <div className="text-3xl font-black text-white">99.99%</div>
              <div className="text-xs text-teal-300 font-mono mt-1">
                Fault-Tolerant Uptime
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                Zero unmanaged drift across billions of parameter inferences.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-[#121226]/60 border border-white/10 backdrop-blur-xl">
              <div className="text-3xl font-black text-white">&lt;10ms</div>
              <div className="text-xs text-purple-300 font-mono mt-1">
                Edge Latency
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                Optimized for millisecond-level automated robotic and server
                loops.
              </p>
            </div>
          </div>
        </div>
      )}

      {type === "features" && (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Autonomous Systems & Neural Engines
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed max-w-3xl mt-2">
              Explore the core capabilities that set GABILAI algorithms apart
              from conventional generative models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-[#121226]/60 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Sparse Mixture of Experts
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Dynamically activates only the most relevant subnetworks per
                token, reducing compute costs by 75% without sacrificing nuanced
                reasoning.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#121226]/60 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-400/10 text-teal-300 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Multi-Modal Latent Fusion
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Seamlessly bridges visual tokens, audio telemetry, and symbolic
                code inside a single unified hyper-dimensional embedding space.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#121226]/60 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-400/10 text-purple-300 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Deterministic Guardrails
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Mathematical proof verifiers run in parallel to suppress
                hallucinations and enforce corporate compliance guarantees.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#121226]/60 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-pink-400/10 text-pink-300 flex items-center justify-center">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Autonomous Agent Loop
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Self-reflective planning agents capable of recursive error
                correction, API calling, and tool execution without manual
                prompt engineering.
              </p>
            </div>
          </div>
        </div>
      )}

      {type === "function" && (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Operational Functions & Execution
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed max-w-3xl mt-2">
              How developers and enterprises interface with GABILAI endpoints in
              production environments.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#0e0e22] border border-white/10 font-mono text-xs sm:text-sm text-neutral-300 space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 pb-2 border-b border-white/10">
              <Terminal className="w-4 h-4" />
              <span>inference_client.ts — Production Stream</span>
            </div>
            <pre className="overflow-x-auto text-cyan-200">
              {`import { GabilClient } from '@gabilai/ai';

const client = new GabilClient({
  apiKey: process.env.GABILAI_API_KEY,
  region: 'global-accelerated'
});

const response = await client.reason({
  model: 'gabilai-v4.8-ultra',
  context: 'High-frequency telemetry log stream',
  optimization: 'minimum-latency',
  guardrails: { hallucinationSuppression: true }
});

console.log('Deterministic Inference Result:', response.output);`}
            </pre>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onConnect}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-300 to-cyan-400 text-slate-950 font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer"
            >
              Request API Key Access
            </button>
            <button
              onClick={onBackToHome}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm transition-colors cursor-pointer"
            >
              Back to Visual Showcase
            </button>
          </div>
        </div>
      )}
    </motion.section>
  );
}
