import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AvocadoRegular } from './AvocadoRegular.js';
import { AvocadoRegularDuotone } from './AvocadoRegularDuotone.js';
import { AvocadoBold } from './AvocadoBold.js';
import { AvocadoBoldDuotone } from './AvocadoBoldDuotone.js';
import { AvocadoFill } from './AvocadoFill.js';
import { AvocadoFillDuotone } from './AvocadoFillDuotone.js';

export interface AvocadoProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Avocado - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AvocadoRegular } from 'stera-icons/icons/AvocadoRegular';
 */
const Avocado = memo(forwardRef<SVGSVGElement, AvocadoProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <AvocadoBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AvocadoBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AvocadoFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AvocadoFill ref={ref} {...rest} />;
  if (duotone) return <AvocadoRegularDuotone ref={ref} {...rest} />;
  return <AvocadoRegular ref={ref} {...rest} />;
}));

Avocado.displayName = 'Avocado';

// Triple export pattern
export { Avocado, Avocado as AvocadoIcon, Avocado as SiAvocado };
export default Avocado;
