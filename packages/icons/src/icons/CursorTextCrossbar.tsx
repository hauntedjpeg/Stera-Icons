import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CursorTextCrossbarRegular } from './CursorTextCrossbarRegular.js';
import { CursorTextCrossbarRegularDuotone } from './CursorTextCrossbarRegularDuotone.js';
import { CursorTextCrossbarBold } from './CursorTextCrossbarBold.js';
import { CursorTextCrossbarBoldDuotone } from './CursorTextCrossbarBoldDuotone.js';
import { CursorTextCrossbarFill } from './CursorTextCrossbarFill.js';
import { CursorTextCrossbarFillDuotone } from './CursorTextCrossbarFillDuotone.js';

export interface CursorTextCrossbarProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CursorTextCrossbar - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CursorTextCrossbarRegular } from 'stera-icons/icons/CursorTextCrossbarRegular';
 */
const CursorTextCrossbar = memo(forwardRef<SVGSVGElement, CursorTextCrossbarProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorTextCrossbarBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CursorTextCrossbarBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CursorTextCrossbarFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CursorTextCrossbarFill ref={ref} {...rest} />;
  if (duotone) return <CursorTextCrossbarRegularDuotone ref={ref} {...rest} />;
  return <CursorTextCrossbarRegular ref={ref} {...rest} />;
}));

CursorTextCrossbar.displayName = 'CursorTextCrossbar';

// Triple export pattern
export { CursorTextCrossbar, CursorTextCrossbar as CursorTextCrossbarIcon, CursorTextCrossbar as SiCursorTextCrossbar };
export default CursorTextCrossbar;
