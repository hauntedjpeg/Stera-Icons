import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PopsicleRegular } from './PopsicleRegular.js';
import { PopsicleRegularDuotone } from './PopsicleRegularDuotone.js';
import { PopsicleBold } from './PopsicleBold.js';
import { PopsicleBoldDuotone } from './PopsicleBoldDuotone.js';
import { PopsicleFill } from './PopsicleFill.js';
import { PopsicleFillDuotone } from './PopsicleFillDuotone.js';

export interface PopsicleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Popsicle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PopsicleRegular } from 'stera-icons/icons/PopsicleRegular';
 */
const Popsicle = memo(forwardRef<SVGSVGElement, PopsicleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PopsicleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PopsicleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PopsicleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PopsicleFill ref={ref} {...rest} />;
  if (duotone) return <PopsicleRegularDuotone ref={ref} {...rest} />;
  return <PopsicleRegular ref={ref} {...rest} />;
}));

Popsicle.displayName = 'Popsicle';

// Triple export pattern (lucide-react style)
export { Popsicle, Popsicle as PopsicleIcon, Popsicle as SiPopsicle };
export default Popsicle;
