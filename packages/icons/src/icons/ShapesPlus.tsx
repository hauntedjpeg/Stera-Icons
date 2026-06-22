import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ShapesPlusRegular } from './ShapesPlusRegular.js';
import { ShapesPlusRegularDuotone } from './ShapesPlusRegularDuotone.js';
import { ShapesPlusBold } from './ShapesPlusBold.js';
import { ShapesPlusBoldDuotone } from './ShapesPlusBoldDuotone.js';
import { ShapesPlusFill } from './ShapesPlusFill.js';
import { ShapesPlusFillDuotone } from './ShapesPlusFillDuotone.js';

export interface ShapesPlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ShapesPlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ShapesPlusRegular } from 'stera-icons/icons/ShapesPlusRegular';
 */
const ShapesPlus = memo(forwardRef<SVGSVGElement, ShapesPlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShapesPlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ShapesPlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ShapesPlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ShapesPlusFill ref={ref} {...rest} />;
  if (duotone) return <ShapesPlusRegularDuotone ref={ref} {...rest} />;
  return <ShapesPlusRegular ref={ref} {...rest} />;
}));

ShapesPlus.displayName = 'ShapesPlus';

// Triple export pattern (lucide-react style)
export { ShapesPlus, ShapesPlus as ShapesPlusIcon, ShapesPlus as SiShapesPlus };
export default ShapesPlus;
