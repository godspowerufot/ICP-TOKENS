export interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}
export interface ServiceCardProps {
  type?: "left" | "right";
  title: string;
  description: string;
  buttonText: string;
  image?: string;
  backgroundColor?: string;
  onButtonClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

// Interface for individual card data
export interface CardData {
  type: "left" | "right";
  title: string;
  description: string;
  buttonText: string;
  backgroundColor: string;
  image?: string;
}

// Interface for ServiceCardsGrid component props
export interface ServiceCardsGridProps {
  cards?: CardData[];
  gridTitle?: string;
  gridSubtitle?: string;
  gridClassName?: string;
}
