import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LaptopRegular } from './LaptopRegular.js';
import { LaptopRegularDuotone } from './LaptopRegularDuotone.js';
import { LaptopBold } from './LaptopBold.js';
import { LaptopBoldDuotone } from './LaptopBoldDuotone.js';
import { LaptopFill } from './LaptopFill.js';
import { LaptopFillDuotone } from './LaptopFillDuotone.js';

export interface LaptopProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Laptop - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LaptopRegular } from 'stera-icons/icons/LaptopRegular';
 */
const Laptop = memo(forwardRef<SVGSVGElement, LaptopProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LaptopBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LaptopBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LaptopFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LaptopFill ref={ref} {...rest} />;
  if (duotone) return <LaptopRegularDuotone ref={ref} {...rest} />;
  return <LaptopRegular ref={ref} {...rest} />;
}));

Laptop.displayName = 'Laptop';

// Triple export pattern (lucide-react style)
export { Laptop, Laptop as LaptopIcon, Laptop as SiLaptop };
export default Laptop;
