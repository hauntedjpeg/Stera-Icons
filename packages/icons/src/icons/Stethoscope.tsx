import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { StethoscopeRegular } from './StethoscopeRegular.js';
import { StethoscopeRegularDuotone } from './StethoscopeRegularDuotone.js';
import { StethoscopeBold } from './StethoscopeBold.js';
import { StethoscopeBoldDuotone } from './StethoscopeBoldDuotone.js';
import { StethoscopeFill } from './StethoscopeFill.js';
import { StethoscopeFillDuotone } from './StethoscopeFillDuotone.js';

export interface StethoscopeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Stethoscope - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { StethoscopeRegular } from 'stera-icons/icons/StethoscopeRegular';
 */
const Stethoscope = memo(forwardRef<SVGSVGElement, StethoscopeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <StethoscopeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <StethoscopeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <StethoscopeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <StethoscopeFill ref={ref} {...rest} />;
  if (duotone) return <StethoscopeRegularDuotone ref={ref} {...rest} />;
  return <StethoscopeRegular ref={ref} {...rest} />;
}));

Stethoscope.displayName = 'Stethoscope';

// Triple export pattern (lucide-react style)
export { Stethoscope, Stethoscope as StethoscopeIcon, Stethoscope as SiStethoscope };
export default Stethoscope;
