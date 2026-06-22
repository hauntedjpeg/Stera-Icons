import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ContrastCircleRegular } from './ContrastCircleRegular.js';
import { ContrastCircleRegularDuotone } from './ContrastCircleRegularDuotone.js';
import { ContrastCircleBold } from './ContrastCircleBold.js';
import { ContrastCircleBoldDuotone } from './ContrastCircleBoldDuotone.js';
import { ContrastCircleFill } from './ContrastCircleFill.js';
import { ContrastCircleFillDuotone } from './ContrastCircleFillDuotone.js';

export interface ContrastCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ContrastCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ContrastCircleRegular } from 'stera-icons/icons/ContrastCircleRegular';
 */
const ContrastCircle = memo(forwardRef<SVGSVGElement, ContrastCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ContrastCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ContrastCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ContrastCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ContrastCircleFill ref={ref} {...rest} />;
  if (duotone) return <ContrastCircleRegularDuotone ref={ref} {...rest} />;
  return <ContrastCircleRegular ref={ref} {...rest} />;
}));

ContrastCircle.displayName = 'ContrastCircle';

// Triple export pattern (lucide-react style)
export { ContrastCircle, ContrastCircle as ContrastCircleIcon, ContrastCircle as SiContrastCircle };
export default ContrastCircle;
