import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PenNibAltRegular } from './PenNibAltRegular.js';
import { PenNibAltRegularDuotone } from './PenNibAltRegularDuotone.js';
import { PenNibAltBold } from './PenNibAltBold.js';
import { PenNibAltBoldDuotone } from './PenNibAltBoldDuotone.js';
import { PenNibAltFill } from './PenNibAltFill.js';
import { PenNibAltFillDuotone } from './PenNibAltFillDuotone.js';

export interface PenNibAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PenNibAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PenNibAltRegular } from 'stera-icons/icons/PenNibAltRegular';
 */
const PenNibAlt = memo(forwardRef<SVGSVGElement, PenNibAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PenNibAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PenNibAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PenNibAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PenNibAltFill ref={ref} {...rest} />;
  if (duotone) return <PenNibAltRegularDuotone ref={ref} {...rest} />;
  return <PenNibAltRegular ref={ref} {...rest} />;
}));

PenNibAlt.displayName = 'PenNibAlt';

// Triple export pattern (lucide-react style)
export { PenNibAlt, PenNibAlt as PenNibAltIcon, PenNibAlt as SiPenNibAlt };
export default PenNibAlt;
