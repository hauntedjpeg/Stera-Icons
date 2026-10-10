import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MapPinXRegular } from './MapPinXRegular.js';
import { MapPinXRegularDuotone } from './MapPinXRegularDuotone.js';
import { MapPinXBold } from './MapPinXBold.js';
import { MapPinXBoldDuotone } from './MapPinXBoldDuotone.js';
import { MapPinXFill } from './MapPinXFill.js';
import { MapPinXFillDuotone } from './MapPinXFillDuotone.js';

export interface MapPinXProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MapPinX - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MapPinXRegular } from 'stera-icons/icons/MapPinXRegular';
 */
const MapPinX = memo(forwardRef<SVGSVGElement, MapPinXProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <MapPinXBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MapPinXBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MapPinXFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MapPinXFill ref={ref} {...rest} />;
  if (duotone) return <MapPinXRegularDuotone ref={ref} {...rest} />;
  return <MapPinXRegular ref={ref} {...rest} />;
}));

MapPinX.displayName = 'MapPinX';

// Triple export pattern
export { MapPinX, MapPinX as MapPinXIcon, MapPinX as SiMapPinX };
export default MapPinX;
