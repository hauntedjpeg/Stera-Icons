import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { EuroRegular } from './EuroRegular.js';
import { EuroRegularDuotone } from './EuroRegularDuotone.js';
import { EuroBold } from './EuroBold.js';
import { EuroBoldDuotone } from './EuroBoldDuotone.js';
import { EuroFill } from './EuroFill.js';
import { EuroFillDuotone } from './EuroFillDuotone.js';

export interface EuroProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Euro - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { EuroRegular } from 'stera-icons/icons/EuroRegular';
 */
const Euro = memo(forwardRef<SVGSVGElement, EuroProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <EuroBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <EuroBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <EuroFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <EuroFill ref={ref} {...rest} />;
  if (duotone) return <EuroRegularDuotone ref={ref} {...rest} />;
  return <EuroRegular ref={ref} {...rest} />;
}));

Euro.displayName = 'Euro';

// Triple export pattern
export { Euro, Euro as EuroIcon, Euro as SiEuro };
export default Euro;
