import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SmartphoneRegular } from './SmartphoneRegular.js';
import { SmartphoneRegularDuotone } from './SmartphoneRegularDuotone.js';
import { SmartphoneBold } from './SmartphoneBold.js';
import { SmartphoneBoldDuotone } from './SmartphoneBoldDuotone.js';
import { SmartphoneFill } from './SmartphoneFill.js';
import { SmartphoneFillDuotone } from './SmartphoneFillDuotone.js';

export interface SmartphoneProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Smartphone - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SmartphoneRegular } from 'stera-icons/icons/SmartphoneRegular';
 */
const Smartphone = memo(forwardRef<SVGSVGElement, SmartphoneProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SmartphoneBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SmartphoneBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SmartphoneFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SmartphoneFill ref={ref} {...rest} />;
  if (duotone) return <SmartphoneRegularDuotone ref={ref} {...rest} />;
  return <SmartphoneRegular ref={ref} {...rest} />;
}));

Smartphone.displayName = 'Smartphone';

// Triple export pattern (lucide-react style)
export { Smartphone, Smartphone as SmartphoneIcon, Smartphone as SiSmartphone };
export default Smartphone;
