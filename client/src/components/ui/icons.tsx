import { 
  Paintbrush, 
  Wrench, 
  HardHat, 
  Hand, 
  UserRound,
  Hammer,
  Building2,
  Scale,
  ShoppingBasket,
  HelpCircle,
  LucideIcon
} from "lucide-react";

type IconName = 'paint-roller' | 'wrench' | 'hard-hat' | 'hand-sparkles' | 'user-nurse' | 'hammer' | 'building' | 'balance-scale' | 'shopping-basket' | 'help';

// Add any other icons you need here
export const Icons: Record<IconName, LucideIcon> = {
  'paint-roller': Paintbrush,
  'wrench': Wrench,
  'hard-hat': HardHat,
  'hand-sparkles': Hand,
  'user-nurse': UserRound,
  'hammer': Hammer,
  'building': Building2,
  'balance-scale': Scale,
  'shopping-basket': ShoppingBasket,
  // Default fallback icon
  'help': HelpCircle
};
