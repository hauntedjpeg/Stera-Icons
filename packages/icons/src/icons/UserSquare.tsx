import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { UserSquareRegular } from './UserSquareRegular.js';
import { UserSquareRegularDuotone } from './UserSquareRegularDuotone.js';
import { UserSquareBold } from './UserSquareBold.js';
import { UserSquareBoldDuotone } from './UserSquareBoldDuotone.js';
import { UserSquareFill } from './UserSquareFill.js';
import { UserSquareFillDuotone } from './UserSquareFillDuotone.js';

export interface UserSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * UserSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { UserSquareRegular } from 'stera-icons/icons/UserSquareRegular';
 */
const UserSquare = memo(forwardRef<SVGSVGElement, UserSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <UserSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <UserSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <UserSquareFill ref={ref} {...rest} />;
  if (duotone) return <UserSquareRegularDuotone ref={ref} {...rest} />;
  return <UserSquareRegular ref={ref} {...rest} />;
}));

UserSquare.displayName = 'UserSquare';

// Triple export pattern (lucide-react style)
export { UserSquare, UserSquare as UserSquareIcon, UserSquare as SiUserSquare };
export default UserSquare;
