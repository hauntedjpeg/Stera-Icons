import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserSettingsBoldProps = Omit<IconBaseProps, 'children'>;

const UserSettingsBold = memo(
  forwardRef<SVGSVGElement, UserSettingsBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19.38 14.97c.28-.48.89-.65 1.37-.37.47.28.64.89.36 1.37l-.33.58q.36.42.55.95H22c.55 0 1 .46 1 1 0 .56-.45 1-1 1h-.67q-.2.54-.55.95l.33.58c.28.48.11 1.1-.36 1.37-.48.28-1.1.11-1.37-.37l-.34-.58q-.26.05-.54.05t-.55-.05l-.34.58c-.27.48-.89.64-1.36.37-.48-.28-.65-.9-.37-1.37l.34-.59q-.36-.41-.55-.94H15c-.55 0-1-.44-1-1 0-.54.45-1 1-1h.67q.18-.53.55-.94l-.34-.59c-.28-.48-.11-1.09.37-1.36.47-.28 1.09-.12 1.36.36l.34.58q.27-.05.55-.05t.54.05zm-.88 2.53q-.27 0-.5.14c-.3.17-.5.5-.5.86 0 .37.2.7.5.87q.23.12.5.13.27 0 .5-.13c.3-.17.5-.5.5-.87s-.2-.7-.5-.87q-.23-.12-.5-.13" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 3c3.04 0 5.5 2.46 5.5 5.5 0 1.73-.8 3.28-2.05 4.29q.19.32.1.73c-.12.53-.66.87-1.2.74Q13.28 14 12 14c-3.26 0-5.5 1.3-6.44 3.32-.14.3-.19.4-.21.5q-.04.06 0 .34l.04.11.14.25q.07.13.16.22l.08.08c.21.15.36.18 1.43.18h5.12c.56 0 1 .45 1 1s-.44 1-1 1H7.2c-.9 0-1.75.03-2.56-.53-.34-.23-.61-.58-.8-.88s-.4-.7-.46-1.1q-.11-.6.02-1.14c.08-.33.23-.64.35-.88.89-1.9 2.5-3.21 4.55-3.9-1.1-1-1.8-2.46-1.8-4.07C6.5 5.46 8.96 3 12 3m0 2c-1.93 0-3.5 1.57-3.5 3.5S10.07 12 12 12s3.5-1.57 3.5-3.5S13.93 5 12 5" clipRule="evenodd" />
    </IconBase>
  ))
);

UserSettingsBold.displayName = 'UserSettingsBold';

// Triple export pattern
export { UserSettingsBold, UserSettingsBold as UserSettingsBoldIcon, UserSettingsBold as SiUserSettingsBold };
export default UserSettingsBold;
export type { UserSettingsBoldProps };
