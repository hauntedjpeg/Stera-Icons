import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CursorTextCircleRegular } from './CursorTextCircleRegular.js';
import { CursorTextCircleRegularDuotone } from './CursorTextCircleRegularDuotone.js';
import { CursorTextCircleBold } from './CursorTextCircleBold.js';
import { CursorTextCircleBoldDuotone } from './CursorTextCircleBoldDuotone.js';
import { CursorTextCircleFill } from './CursorTextCircleFill.js';
import { CursorTextCircleFillDuotone } from './CursorTextCircleFillDuotone.js';

export interface CursorTextCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CursorTextCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CursorTextCircleRegular } from 'stera-icons/icons/CursorTextCircleRegular';
 */
const CursorTextCircle = memo(forwardRef<SVGSVGElement, CursorTextCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorTextCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CursorTextCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CursorTextCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CursorTextCircleFill ref={ref} {...rest} />;
  if (duotone) return <CursorTextCircleRegularDuotone ref={ref} {...rest} />;
  return <CursorTextCircleRegular ref={ref} {...rest} />;
}));

CursorTextCircle.displayName = 'CursorTextCircle';

// Triple export pattern (lucide-react style)
export { CursorTextCircle, CursorTextCircle as CursorTextCircleIcon, CursorTextCircle as SiCursorTextCircle };
export default CursorTextCircle;
