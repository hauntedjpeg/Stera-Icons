import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CursorBoxRegular } from './CursorBoxRegular.js';
import { CursorBoxRegularDuotone } from './CursorBoxRegularDuotone.js';
import { CursorBoxBold } from './CursorBoxBold.js';
import { CursorBoxBoldDuotone } from './CursorBoxBoldDuotone.js';
import { CursorBoxFill } from './CursorBoxFill.js';
import { CursorBoxFillDuotone } from './CursorBoxFillDuotone.js';

export interface CursorBoxProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CursorBox - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CursorBoxRegular } from 'stera-icons/icons/CursorBoxRegular';
 */
const CursorBox = memo(forwardRef<SVGSVGElement, CursorBoxProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorBoxBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CursorBoxBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CursorBoxFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CursorBoxFill ref={ref} {...rest} />;
  if (duotone) return <CursorBoxRegularDuotone ref={ref} {...rest} />;
  return <CursorBoxRegular ref={ref} {...rest} />;
}));

CursorBox.displayName = 'CursorBox';

// Triple export pattern (lucide-react style)
export { CursorBox, CursorBox as CursorBoxIcon, CursorBox as SiCursorBox };
export default CursorBox;
