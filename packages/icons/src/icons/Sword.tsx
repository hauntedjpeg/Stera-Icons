import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SwordRegular } from './SwordRegular.js';
import { SwordRegularDuotone } from './SwordRegularDuotone.js';
import { SwordBold } from './SwordBold.js';
import { SwordBoldDuotone } from './SwordBoldDuotone.js';
import { SwordFill } from './SwordFill.js';
import { SwordFillDuotone } from './SwordFillDuotone.js';

export interface SwordProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Sword - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SwordRegular } from 'stera-icons/icons/SwordRegular';
 */
const Sword = memo(forwardRef<SVGSVGElement, SwordProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SwordBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SwordBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SwordFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SwordFill ref={ref} {...rest} />;
  if (duotone) return <SwordRegularDuotone ref={ref} {...rest} />;
  return <SwordRegular ref={ref} {...rest} />;
}));

Sword.displayName = 'Sword';

// Triple export pattern (lucide-react style)
export { Sword, Sword as SwordIcon, Sword as SiSword };
export default Sword;
