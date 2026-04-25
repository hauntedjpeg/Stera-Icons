import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { UserListRegular } from './UserListRegular.js';
import { UserListRegularDuotone } from './UserListRegularDuotone.js';
import { UserListBold } from './UserListBold.js';
import { UserListBoldDuotone } from './UserListBoldDuotone.js';
import { UserListFill } from './UserListFill.js';
import { UserListFillDuotone } from './UserListFillDuotone.js';

export interface UserListProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * UserList - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { UserListRegular } from 'stera-icons/icons/UserListRegular';
 */
const UserList = memo(forwardRef<SVGSVGElement, UserListProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserListBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <UserListBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <UserListFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <UserListFill ref={ref} {...rest} />;
  if (duotone) return <UserListRegularDuotone ref={ref} {...rest} />;
  return <UserListRegular ref={ref} {...rest} />;
}));

UserList.displayName = 'UserList';

// Triple export pattern (lucide-react style)
export { UserList, UserList as UserListIcon, UserList as SiUserList };
export default UserList;
