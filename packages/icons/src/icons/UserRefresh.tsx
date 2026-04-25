import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { UserRefreshRegular } from './UserRefreshRegular.js';
import { UserRefreshRegularDuotone } from './UserRefreshRegularDuotone.js';
import { UserRefreshBold } from './UserRefreshBold.js';
import { UserRefreshBoldDuotone } from './UserRefreshBoldDuotone.js';
import { UserRefreshFill } from './UserRefreshFill.js';
import { UserRefreshFillDuotone } from './UserRefreshFillDuotone.js';

export interface UserRefreshProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * UserRefresh - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { UserRefreshRegular } from 'stera-icons/icons/UserRefreshRegular';
 */
const UserRefresh = memo(forwardRef<SVGSVGElement, UserRefreshProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <UserRefreshBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <UserRefreshBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <UserRefreshFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <UserRefreshFill ref={ref} {...rest} />;
  if (duotone) return <UserRefreshRegularDuotone ref={ref} {...rest} />;
  return <UserRefreshRegular ref={ref} {...rest} />;
}));

UserRefresh.displayName = 'UserRefresh';

// Triple export pattern (lucide-react style)
export { UserRefresh, UserRefresh as UserRefreshIcon, UserRefresh as SiUserRefresh };
export default UserRefresh;
