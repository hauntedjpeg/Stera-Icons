import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { RadarRegular } from './RadarRegular.js';
import { RadarRegularDuotone } from './RadarRegularDuotone.js';
import { RadarBold } from './RadarBold.js';
import { RadarBoldDuotone } from './RadarBoldDuotone.js';
import { RadarFill } from './RadarFill.js';
import { RadarFillDuotone } from './RadarFillDuotone.js';

export interface RadarProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Radar - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { RadarRegular } from 'stera-icons/icons/RadarRegular';
 */
const Radar = memo(forwardRef<SVGSVGElement, RadarProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RadarBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RadarBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RadarFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RadarFill ref={ref} {...rest} />;
  if (duotone) return <RadarRegularDuotone ref={ref} {...rest} />;
  return <RadarRegular ref={ref} {...rest} />;
}));

Radar.displayName = 'Radar';

// Triple export pattern (lucide-react style)
export { Radar, Radar as RadarIcon, Radar as SiRadar };
export default Radar;
