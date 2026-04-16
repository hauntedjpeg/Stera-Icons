import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ScanCheckRegular } from './ScanCheckRegular.js';
import { ScanCheckRegularDuotone } from './ScanCheckRegularDuotone.js';
import { ScanCheckBold } from './ScanCheckBold.js';
import { ScanCheckBoldDuotone } from './ScanCheckBoldDuotone.js';
import { ScanCheckFill } from './ScanCheckFill.js';
import { ScanCheckFillDuotone } from './ScanCheckFillDuotone.js';

export interface ScanCheckProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanCheck - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScanCheckRegular } from 'stera-icons/icons/ScanCheckRegular';
 */
const ScanCheck = memo(forwardRef<SVGSVGElement, ScanCheckProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanCheckBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanCheckBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanCheckFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanCheckFill ref={ref} {...rest} />;
  if (duotone) return <ScanCheckRegularDuotone ref={ref} {...rest} />;
  return <ScanCheckRegular ref={ref} {...rest} />;
}));

ScanCheck.displayName = 'ScanCheck';

// Triple export pattern (lucide-react style)
export { ScanCheck, ScanCheck as ScanCheckIcon, ScanCheck as SiScanCheck };
export default ScanCheck;
