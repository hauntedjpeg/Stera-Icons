import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ScanXRegular } from './ScanXRegular.js';
import { ScanXRegularDuotone } from './ScanXRegularDuotone.js';
import { ScanXBold } from './ScanXBold.js';
import { ScanXBoldDuotone } from './ScanXBoldDuotone.js';
import { ScanXFill } from './ScanXFill.js';
import { ScanXFillDuotone } from './ScanXFillDuotone.js';

export interface ScanXProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanX - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScanXRegular } from 'stera-icons/icons/ScanXRegular';
 */
const ScanX = memo(forwardRef<SVGSVGElement, ScanXProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanXBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanXBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanXFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanXFill ref={ref} {...rest} />;
  if (duotone) return <ScanXRegularDuotone ref={ref} {...rest} />;
  return <ScanXRegular ref={ref} {...rest} />;
}));

ScanX.displayName = 'ScanX';

// Triple export pattern
export { ScanX, ScanX as ScanXIcon, ScanX as SiScanX };
export default ScanX;
