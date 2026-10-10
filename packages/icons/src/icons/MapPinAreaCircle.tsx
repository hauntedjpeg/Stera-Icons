import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MapPinAreaCircleRegular } from './MapPinAreaCircleRegular.js';
import { MapPinAreaCircleRegularDuotone } from './MapPinAreaCircleRegularDuotone.js';
import { MapPinAreaCircleBold } from './MapPinAreaCircleBold.js';
import { MapPinAreaCircleBoldDuotone } from './MapPinAreaCircleBoldDuotone.js';
import { MapPinAreaCircleFill } from './MapPinAreaCircleFill.js';
import { MapPinAreaCircleFillDuotone } from './MapPinAreaCircleFillDuotone.js';

export interface MapPinAreaCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MapPinAreaCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MapPinAreaCircleRegular } from 'stera-icons/icons/MapPinAreaCircleRegular';
 */
const MapPinAreaCircle = memo(forwardRef<SVGSVGElement, MapPinAreaCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <MapPinAreaCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MapPinAreaCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MapPinAreaCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MapPinAreaCircleFill ref={ref} {...rest} />;
  if (duotone) return <MapPinAreaCircleRegularDuotone ref={ref} {...rest} />;
  return <MapPinAreaCircleRegular ref={ref} {...rest} />;
}));

MapPinAreaCircle.displayName = 'MapPinAreaCircle';

// Triple export pattern
export { MapPinAreaCircle, MapPinAreaCircle as MapPinAreaCircleIcon, MapPinAreaCircle as SiMapPinAreaCircle };
export default MapPinAreaCircle;
