import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CarrotRegular } from './CarrotRegular.js';
import { CarrotRegularDuotone } from './CarrotRegularDuotone.js';
import { CarrotBold } from './CarrotBold.js';
import { CarrotBoldDuotone } from './CarrotBoldDuotone.js';
import { CarrotFill } from './CarrotFill.js';
import { CarrotFillDuotone } from './CarrotFillDuotone.js';

export interface CarrotProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Carrot - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CarrotRegular } from 'stera-icons/icons/CarrotRegular';
 */
const Carrot = memo(forwardRef<SVGSVGElement, CarrotProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CarrotBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CarrotBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CarrotFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CarrotFill ref={ref} {...rest} />;
  if (duotone) return <CarrotRegularDuotone ref={ref} {...rest} />;
  return <CarrotRegular ref={ref} {...rest} />;
}));

Carrot.displayName = 'Carrot';

// Triple export pattern (lucide-react style)
export { Carrot, Carrot as CarrotIcon, Carrot as SiCarrot };
export default Carrot;
