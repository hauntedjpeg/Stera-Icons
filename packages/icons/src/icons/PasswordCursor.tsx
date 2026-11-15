import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PasswordCursorRegular } from './PasswordCursorRegular.js';
import { PasswordCursorRegularDuotone } from './PasswordCursorRegularDuotone.js';
import { PasswordCursorBold } from './PasswordCursorBold.js';
import { PasswordCursorBoldDuotone } from './PasswordCursorBoldDuotone.js';
import { PasswordCursorFill } from './PasswordCursorFill.js';
import { PasswordCursorFillDuotone } from './PasswordCursorFillDuotone.js';

export interface PasswordCursorProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PasswordCursor - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PasswordCursorRegular } from 'stera-icons/icons/PasswordCursorRegular';
 */
const PasswordCursor = memo(forwardRef<SVGSVGElement, PasswordCursorProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <PasswordCursorBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PasswordCursorBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PasswordCursorFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PasswordCursorFill ref={ref} {...rest} />;
  if (duotone) return <PasswordCursorRegularDuotone ref={ref} {...rest} />;
  return <PasswordCursorRegular ref={ref} {...rest} />;
}));

PasswordCursor.displayName = 'PasswordCursor';

// Triple export pattern
export { PasswordCursor, PasswordCursor as PasswordCursorIcon, PasswordCursor as SiPasswordCursor };
export default PasswordCursor;
