import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BiohazardRegular } from './BiohazardRegular.js';
import { BiohazardRegularDuotone } from './BiohazardRegularDuotone.js';
import { BiohazardBold } from './BiohazardBold.js';
import { BiohazardBoldDuotone } from './BiohazardBoldDuotone.js';
import { BiohazardFill } from './BiohazardFill.js';
import { BiohazardFillDuotone } from './BiohazardFillDuotone.js';

export interface BiohazardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Biohazard - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BiohazardRegular } from 'stera-icons/icons/BiohazardRegular';
 */
const Biohazard = memo(forwardRef<SVGSVGElement, BiohazardProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BiohazardBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BiohazardBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BiohazardFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BiohazardFill ref={ref} {...rest} />;
  if (duotone) return <BiohazardRegularDuotone ref={ref} {...rest} />;
  return <BiohazardRegular ref={ref} {...rest} />;
}));

Biohazard.displayName = 'Biohazard';

// Triple export pattern (lucide-react style)
export { Biohazard, Biohazard as BiohazardIcon, Biohazard as SiBiohazard };
export default Biohazard;
