import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { UserLockRegular } from './UserLockRegular.js';
import { UserLockRegularDuotone } from './UserLockRegularDuotone.js';
import { UserLockBold } from './UserLockBold.js';
import { UserLockBoldDuotone } from './UserLockBoldDuotone.js';
import { UserLockFill } from './UserLockFill.js';
import { UserLockFillDuotone } from './UserLockFillDuotone.js';

export interface UserLockProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * UserLock - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { UserLockRegular } from 'stera-icons/icons/UserLockRegular';
 */
const UserLock = memo(forwardRef<SVGSVGElement, UserLockProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserLockBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <UserLockBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <UserLockFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <UserLockFill ref={ref} {...rest} />;
  if (duotone) return <UserLockRegularDuotone ref={ref} {...rest} />;
  return <UserLockRegular ref={ref} {...rest} />;
}));

UserLock.displayName = 'UserLock';

// Triple export pattern (lucide-react style)
export { UserLock, UserLock as UserLockIcon, UserLock as SiUserLock };
export default UserLock;
