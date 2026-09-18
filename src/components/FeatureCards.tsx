import { FeatureCardItem } from '../types.ts';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface FeatureCardsProps {
  cards: FeatureCardItem[];
  onSelectCard: (card: FeatureCardItem) => void;
}

export default function FeatureCards({ cards, onSelectCard }: FeatureCardsProps) {
  return (
    <section 
      id="bottom-feature-cards" 
      aria-label="Features and Case Studies"
      className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-12 pt-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={card.id}
            id={`feature-card-${card.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 + idx * 0.1, ease: 'easeOut' }}
            onClick={() => onSelectCard(card)}
            className="group relative p-5 sm:p-6 rounded-3xl bg-[#121226]/50 hover:bg-[#181834]/70 border border-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/40 cursor-pointer flex flex-col justify-between"
          >
            {/* Ambient inner glow on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

            {/* Top Row: Circular Avatar & Upward-Right Arrow */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-md">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                    <img
                      src={card.imageSrc}
                      alt={card.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Action Arrow Icon in subtle pill */}
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-cyan-300 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30 group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 stroke-[2]" />
              </div>
            </div>

            {/* Content: Title & Truncated Description */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-1 group-hover:text-cyan-200 transition-colors">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-neutral-300/80 line-clamp-3">
                {card.description}
              </p>
            </div>

            {/* Micro Badge / Category at bottom */}
            {card.category && (
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span className="text-cyan-300/80 font-sans tracking-wide">{card.category}</span>
                <span className="opacity-60 group-hover:opacity-100 group-hover:text-cyan-300 transition-opacity">
                  Learn more →
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
