import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { KunaiRegular } from './KunaiRegular.js';
import { KunaiRegularDuotone } from './KunaiRegularDuotone.js';
import { KunaiBold } from './KunaiBold.js';
import { KunaiBoldDuotone } from './KunaiBoldDuotone.js';
import { KunaiFill } from './KunaiFill.js';
import { KunaiFillDuotone } from './KunaiFillDuotone.js';

export interface KunaiProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Kunai - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { KunaiRegular } from 'stera-icons/icons/KunaiRegular';
 */
const Kunai = memo(forwardRef<SVGSVGElement, KunaiProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <KunaiBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <KunaiBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <KunaiFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <KunaiFill ref={ref} {...rest} />;
  if (duotone) return <KunaiRegularDuotone ref={ref} {...rest} />;
  return <KunaiRegular ref={ref} {...rest} />;
}));

Kunai.displayName = 'Kunai';

// Triple export pattern (lucide-react style)
export { Kunai, Kunai as KunaiIcon, Kunai as SiKunai };
export default Kunai;
