export interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  fullContent?: string;
  imageSrc: string;
  category: string;
  metrics?: string;
}

export type ActiveNavTab = 'home' | 'about' | 'features' | 'function';

export interface ModalContent {
  type: 'card' | 'discover' | 'connect' | 'auth';
  title: string;
  subtitle?: string;
  cardData?: FeatureCardItem;
  authMode?: 'signin' | 'signup';
}
