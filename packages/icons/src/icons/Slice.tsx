import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SliceRegular } from './SliceRegular.js';
import { SliceRegularDuotone } from './SliceRegularDuotone.js';
import { SliceBold } from './SliceBold.js';
import { SliceBoldDuotone } from './SliceBoldDuotone.js';
import { SliceFill } from './SliceFill.js';
import { SliceFillDuotone } from './SliceFillDuotone.js';

export interface SliceProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Slice - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SliceRegular } from 'stera-icons/icons/SliceRegular';
 */
const Slice = memo(forwardRef<SVGSVGElement, SliceProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SliceBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SliceBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SliceFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SliceFill ref={ref} {...rest} />;
  if (duotone) return <SliceRegularDuotone ref={ref} {...rest} />;
  return <SliceRegular ref={ref} {...rest} />;
}));

Slice.displayName = 'Slice';

// Triple export pattern (lucide-react style)
export { Slice, Slice as SliceIcon, Slice as SiSlice };
export default Slice;
