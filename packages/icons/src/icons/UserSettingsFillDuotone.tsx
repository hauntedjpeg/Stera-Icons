import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserSettingsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UserSettingsFillDuotone = memo(
  forwardRef<SVGSVGElement, UserSettingsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19.38 14.97c.28-.48.89-.65 1.37-.37.47.28.64.89.36 1.37l-.33.58q.36.42.55.95H22c.55 0 1 .46 1 1 0 .56-.45 1-1 1h-.67q-.2.54-.55.95l.33.58c.28.48.11 1.1-.36 1.37-.48.28-1.1.11-1.37-.37l-.34-.58q-.26.05-.54.05t-.55-.05l-.34.58c-.27.48-.89.64-1.36.37-.48-.28-.65-.9-.37-1.37l.34-.59q-.36-.41-.55-.94H15c-.55 0-1-.44-1-1 0-.54.45-1 1-1h.67q.18-.53.55-.94l-.34-.59c-.28-.48-.11-1.09.37-1.36.47-.28 1.09-.12 1.36.36l.34.58q.27-.05.55-.05t.54.05zm-.88 2.53q-.27 0-.5.14c-.3.17-.5.5-.5.86 0 .37.2.7.5.87q.23.13.5.13t.5-.13c.3-.17.5-.5.5-.87s-.2-.7-.5-.87q-.23-.12-.5-.13" clipRule="evenodd" />
        <path d="M12 3.5c2.76 0 5 2.24 5 5 0 1.81-.96 3.4-2.4 4.28 1.89.42 3.44 1.35 4.48 2.7l-.04.07q-.26-.05-.54-.05t-.55.05l-.34-.58c-.27-.48-.89-.64-1.36-.36-.48.27-.65.88-.37 1.36l.34.59q-.36.42-.55.94H15c-.55 0-1 .46-1 1 0 .56.45 1 1 1h.67q.2.53.55.94l-.04.06H7.2c-.95 0-1.61.02-2.28-.44-.25-.18-.49-.47-.66-.74s-.34-.61-.39-.91q-.09-.52.02-.94c.06-.28.19-.53.3-.79.96-2.03 2.81-3.36 5.22-3.9C7.96 11.9 7 10.3 7 8.5c0-2.76 2.24-5 5-5" opacity={.4} />
    </IconBase>
  ))
);

UserSettingsFillDuotone.displayName = 'UserSettingsFillDuotone';

// Triple export pattern
export { UserSettingsFillDuotone, UserSettingsFillDuotone as UserSettingsFillDuotoneIcon, UserSettingsFillDuotone as SiUserSettingsFillDuotone };
export default UserSettingsFillDuotone;
export type { UserSettingsFillDuotoneProps };
