import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LampRegular } from './LampRegular.js';
import { LampRegularDuotone } from './LampRegularDuotone.js';
import { LampBold } from './LampBold.js';
import { LampBoldDuotone } from './LampBoldDuotone.js';
import { LampFill } from './LampFill.js';
import { LampFillDuotone } from './LampFillDuotone.js';

export interface LampProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Lamp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LampRegular } from 'stera-icons/icons/LampRegular';
 */
const Lamp = memo(forwardRef<SVGSVGElement, LampProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LampBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LampBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LampFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LampFill ref={ref} {...rest} />;
  if (duotone) return <LampRegularDuotone ref={ref} {...rest} />;
  return <LampRegular ref={ref} {...rest} />;
}));

Lamp.displayName = 'Lamp';

// Triple export pattern (lucide-react style)
export { Lamp, Lamp as LampIcon, Lamp as SiLamp };
export default Lamp;
