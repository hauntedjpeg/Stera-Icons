import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LayoutListAltRegular } from './LayoutListAltRegular.js';
import { LayoutListAltRegularDuotone } from './LayoutListAltRegularDuotone.js';
import { LayoutListAltBold } from './LayoutListAltBold.js';
import { LayoutListAltBoldDuotone } from './LayoutListAltBoldDuotone.js';
import { LayoutListAltFill } from './LayoutListAltFill.js';
import { LayoutListAltFillDuotone } from './LayoutListAltFillDuotone.js';

export interface LayoutListAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayoutListAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LayoutListAltRegular } from 'stera-icons/icons/LayoutListAltRegular';
 */
const LayoutListAlt = memo(forwardRef<SVGSVGElement, LayoutListAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutListAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LayoutListAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LayoutListAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LayoutListAltFill ref={ref} {...rest} />;
  if (duotone) return <LayoutListAltRegularDuotone ref={ref} {...rest} />;
  return <LayoutListAltRegular ref={ref} {...rest} />;
}));

LayoutListAlt.displayName = 'LayoutListAlt';

// Triple export pattern (lucide-react style)
export { LayoutListAlt, LayoutListAlt as LayoutListAltIcon, LayoutListAlt as SiLayoutListAlt };
export default LayoutListAlt;
