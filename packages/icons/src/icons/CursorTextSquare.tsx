import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CursorTextSquareRegular } from './CursorTextSquareRegular.js';
import { CursorTextSquareRegularDuotone } from './CursorTextSquareRegularDuotone.js';
import { CursorTextSquareBold } from './CursorTextSquareBold.js';
import { CursorTextSquareBoldDuotone } from './CursorTextSquareBoldDuotone.js';
import { CursorTextSquareFill } from './CursorTextSquareFill.js';
import { CursorTextSquareFillDuotone } from './CursorTextSquareFillDuotone.js';

export interface CursorTextSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CursorTextSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CursorTextSquareRegular } from 'stera-icons/icons/CursorTextSquareRegular';
 */
const CursorTextSquare = memo(forwardRef<SVGSVGElement, CursorTextSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorTextSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CursorTextSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CursorTextSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CursorTextSquareFill ref={ref} {...rest} />;
  if (duotone) return <CursorTextSquareRegularDuotone ref={ref} {...rest} />;
  return <CursorTextSquareRegular ref={ref} {...rest} />;
}));

CursorTextSquare.displayName = 'CursorTextSquare';

// Triple export pattern (lucide-react style)
export { CursorTextSquare, CursorTextSquare as CursorTextSquareIcon, CursorTextSquare as SiCursorTextSquare };
export default CursorTextSquare;
