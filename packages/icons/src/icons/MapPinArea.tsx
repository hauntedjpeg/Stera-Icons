import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MapPinAreaRegular } from './MapPinAreaRegular.js';
import { MapPinAreaRegularDuotone } from './MapPinAreaRegularDuotone.js';
import { MapPinAreaBold } from './MapPinAreaBold.js';
import { MapPinAreaBoldDuotone } from './MapPinAreaBoldDuotone.js';
import { MapPinAreaFill } from './MapPinAreaFill.js';
import { MapPinAreaFillDuotone } from './MapPinAreaFillDuotone.js';

export interface MapPinAreaProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MapPinArea - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MapPinAreaRegular } from 'stera-icons/icons/MapPinAreaRegular';
 */
const MapPinArea = memo(forwardRef<SVGSVGElement, MapPinAreaProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <MapPinAreaBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MapPinAreaBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MapPinAreaFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MapPinAreaFill ref={ref} {...rest} />;
  if (duotone) return <MapPinAreaRegularDuotone ref={ref} {...rest} />;
  return <MapPinAreaRegular ref={ref} {...rest} />;
}));

MapPinArea.displayName = 'MapPinArea';

// Triple export pattern
export { MapPinArea, MapPinArea as MapPinAreaIcon, MapPinArea as SiMapPinArea };
export default MapPinArea;
