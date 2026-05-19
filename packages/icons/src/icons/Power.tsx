import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PowerRegular } from './PowerRegular.js';
import { PowerRegularDuotone } from './PowerRegularDuotone.js';
import { PowerBold } from './PowerBold.js';
import { PowerBoldDuotone } from './PowerBoldDuotone.js';
import { PowerFill } from './PowerFill.js';
import { PowerFillDuotone } from './PowerFillDuotone.js';

export interface PowerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Power - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PowerRegular } from 'stera-icons/icons/PowerRegular';
 */
const Power = memo(forwardRef<SVGSVGElement, PowerProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PowerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PowerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PowerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PowerFill ref={ref} {...rest} />;
  if (duotone) return <PowerRegularDuotone ref={ref} {...rest} />;
  return <PowerRegular ref={ref} {...rest} />;
}));

Power.displayName = 'Power';

// Triple export pattern (lucide-react style)
export { Power, Power as PowerIcon, Power as SiPower };
export default Power;
