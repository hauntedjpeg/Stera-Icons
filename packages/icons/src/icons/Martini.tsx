import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MartiniRegular } from './MartiniRegular.js';
import { MartiniRegularDuotone } from './MartiniRegularDuotone.js';
import { MartiniBold } from './MartiniBold.js';
import { MartiniBoldDuotone } from './MartiniBoldDuotone.js';
import { MartiniFill } from './MartiniFill.js';
import { MartiniFillDuotone } from './MartiniFillDuotone.js';

export interface MartiniProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Martini - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MartiniRegular } from 'stera-icons/icons/MartiniRegular';
 */
const Martini = memo(forwardRef<SVGSVGElement, MartiniProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <MartiniBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MartiniBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MartiniFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MartiniFill ref={ref} {...rest} />;
  if (duotone) return <MartiniRegularDuotone ref={ref} {...rest} />;
  return <MartiniRegular ref={ref} {...rest} />;
}));

Martini.displayName = 'Martini';

// Triple export pattern
export { Martini, Martini as MartiniIcon, Martini as SiMartini };
export default Martini;
