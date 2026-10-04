import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CakeRegular } from './CakeRegular.js';
import { CakeRegularDuotone } from './CakeRegularDuotone.js';
import { CakeBold } from './CakeBold.js';
import { CakeBoldDuotone } from './CakeBoldDuotone.js';
import { CakeFill } from './CakeFill.js';
import { CakeFillDuotone } from './CakeFillDuotone.js';

export interface CakeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Cake - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CakeRegular } from 'stera-icons/icons/CakeRegular';
 */
const Cake = memo(forwardRef<SVGSVGElement, CakeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CakeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CakeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CakeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CakeFill ref={ref} {...rest} />;
  if (duotone) return <CakeRegularDuotone ref={ref} {...rest} />;
  return <CakeRegular ref={ref} {...rest} />;
}));

Cake.displayName = 'Cake';

// Triple export pattern (lucide-react style)
export { Cake, Cake as CakeIcon, Cake as SiCake };
export default Cake;
