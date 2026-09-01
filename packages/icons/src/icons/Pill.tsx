import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PillRegular } from './PillRegular.js';
import { PillRegularDuotone } from './PillRegularDuotone.js';
import { PillBold } from './PillBold.js';
import { PillBoldDuotone } from './PillBoldDuotone.js';
import { PillFill } from './PillFill.js';
import { PillFillDuotone } from './PillFillDuotone.js';

export interface PillProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Pill - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PillRegular } from 'stera-icons/icons/PillRegular';
 */
const Pill = memo(forwardRef<SVGSVGElement, PillProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PillBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PillBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PillFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PillFill ref={ref} {...rest} />;
  if (duotone) return <PillRegularDuotone ref={ref} {...rest} />;
  return <PillRegular ref={ref} {...rest} />;
}));

Pill.displayName = 'Pill';

// Triple export pattern (lucide-react style)
export { Pill, Pill as PillIcon, Pill as SiPill };
export default Pill;
