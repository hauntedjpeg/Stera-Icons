import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CheeseRegular } from './CheeseRegular.js';
import { CheeseRegularDuotone } from './CheeseRegularDuotone.js';
import { CheeseBold } from './CheeseBold.js';
import { CheeseBoldDuotone } from './CheeseBoldDuotone.js';
import { CheeseFill } from './CheeseFill.js';
import { CheeseFillDuotone } from './CheeseFillDuotone.js';

export interface CheeseProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Cheese - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CheeseRegular } from 'stera-icons/icons/CheeseRegular';
 */
const Cheese = memo(forwardRef<SVGSVGElement, CheeseProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CheeseBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CheeseBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CheeseFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CheeseFill ref={ref} {...rest} />;
  if (duotone) return <CheeseRegularDuotone ref={ref} {...rest} />;
  return <CheeseRegular ref={ref} {...rest} />;
}));

Cheese.displayName = 'Cheese';

// Triple export pattern (lucide-react style)
export { Cheese, Cheese as CheeseIcon, Cheese as SiCheese };
export default Cheese;
