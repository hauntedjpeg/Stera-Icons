import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PizzaRegular } from './PizzaRegular.js';
import { PizzaRegularDuotone } from './PizzaRegularDuotone.js';
import { PizzaBold } from './PizzaBold.js';
import { PizzaBoldDuotone } from './PizzaBoldDuotone.js';
import { PizzaFill } from './PizzaFill.js';
import { PizzaFillDuotone } from './PizzaFillDuotone.js';

export interface PizzaProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Pizza - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PizzaRegular } from 'stera-icons/icons/PizzaRegular';
 */
const Pizza = memo(forwardRef<SVGSVGElement, PizzaProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PizzaBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PizzaBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PizzaFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PizzaFill ref={ref} {...rest} />;
  if (duotone) return <PizzaRegularDuotone ref={ref} {...rest} />;
  return <PizzaRegular ref={ref} {...rest} />;
}));

Pizza.displayName = 'Pizza';

// Triple export pattern (lucide-react style)
export { Pizza, Pizza as PizzaIcon, Pizza as SiPizza };
export default Pizza;
