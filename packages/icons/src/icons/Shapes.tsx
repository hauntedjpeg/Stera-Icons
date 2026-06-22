import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ShapesRegular } from './ShapesRegular.js';
import { ShapesRegularDuotone } from './ShapesRegularDuotone.js';
import { ShapesBold } from './ShapesBold.js';
import { ShapesBoldDuotone } from './ShapesBoldDuotone.js';
import { ShapesFill } from './ShapesFill.js';
import { ShapesFillDuotone } from './ShapesFillDuotone.js';

export interface ShapesProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Shapes - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ShapesRegular } from 'stera-icons/icons/ShapesRegular';
 */
const Shapes = memo(forwardRef<SVGSVGElement, ShapesProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShapesBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ShapesBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ShapesFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ShapesFill ref={ref} {...rest} />;
  if (duotone) return <ShapesRegularDuotone ref={ref} {...rest} />;
  return <ShapesRegular ref={ref} {...rest} />;
}));

Shapes.displayName = 'Shapes';

// Triple export pattern (lucide-react style)
export { Shapes, Shapes as ShapesIcon, Shapes as SiShapes };
export default Shapes;
