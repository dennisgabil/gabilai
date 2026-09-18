import { FeatureCardItem } from './types.ts';
import cardGlobalImpact from './assets/images/card_global_impact.jpg';
import cardTailored from './assets/images/card_tailored.jpg';
import cardAdvanced from './assets/images/card_advanced.jpg';

export const FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: 'global-impact',
    title: 'Global Impact:',
    description: "No two businesses are alike. That's why we work closely with each client to understand their unique...",
    fullContent: "No two businesses are alike. That's why we work closely with each client to understand their unique operational DNA, scaling requirements, and customer touchpoints. Operating across 42 countries, GABILAI models currently power over 120 million daily predictive inference requests with 99.99% fault tolerance.",
    imageSrc: cardGlobalImpact,
    category: 'Enterprise Transformation',
    metrics: '42+ Countries • 120M Daily Inferences'
  },
  {
    id: 'tailored-solutions',
    title: 'Tailored Solutions:',
    description: "From startups to Fortune 500 companies, our tailored AI solutions drive measurable results on a...",
    fullContent: "From startups to Fortune 500 companies, our tailored AI solutions drive measurable results on a unified, low-latency framework. We tailor specialized transformer layers and autonomous decision pipelines that integrate natively into existing tech stacks without architectural disruption.",
    imageSrc: cardTailored,
    category: 'Bespoke Architecture',
    metrics: '94% Faster Time-to-Value • Zero Lock-in'
  },
  {
    id: 'advanced-ai',
    title: 'Advanced AI Solutions:',
    description: "Our proprietary AI algorithms are engineered to deliver unparalleled accuracy, efficiency, and...",
    fullContent: "Our proprietary AI algorithms are engineered to deliver unparalleled accuracy, efficiency, and resilience. Featuring dynamic quantizations, multi-modal reasoning engines, and self-optimizing token distillation, GABILAI represents the zenith of cognitive computing.",
    imageSrc: cardAdvanced,
    category: 'Neural Frontiers',
    metrics: 'Sub-12ms Latency • 4x Token Efficiency'
  }
];

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
  { id: 'function', label: 'Function' }
] as const;
