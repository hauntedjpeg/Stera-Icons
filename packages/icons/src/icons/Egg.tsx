import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { EggRegular } from './EggRegular.js';
import { EggRegularDuotone } from './EggRegularDuotone.js';
import { EggBold } from './EggBold.js';
import { EggBoldDuotone } from './EggBoldDuotone.js';
import { EggFill } from './EggFill.js';
import { EggFillDuotone } from './EggFillDuotone.js';

export interface EggProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Egg - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { EggRegular } from 'stera-icons/icons/EggRegular';
 */
const Egg = memo(forwardRef<SVGSVGElement, EggProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <EggBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <EggBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <EggFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <EggFill ref={ref} {...rest} />;
  if (duotone) return <EggRegularDuotone ref={ref} {...rest} />;
  return <EggRegular ref={ref} {...rest} />;
}));

Egg.displayName = 'Egg';

// Triple export pattern (lucide-react style)
export { Egg, Egg as EggIcon, Egg as SiEgg };
export default Egg;
