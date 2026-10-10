import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UserSettingsRegularProps = Omit<IconBaseProps, 'children'>;

const UserSettingsRegular = memo(
  forwardRef<SVGSVGElement, UserSettingsRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19.6 15.1c.2-.37.66-.49 1.02-.28s.48.66.28 1.02l-.43.74q.48.5.68 1.17H22c.42 0 .75.34.75.76 0 .41-.34.75-.75.75h-.85q-.2.67-.68 1.16l.42.74c.21.36.09.82-.27 1.02s-.82.09-1.02-.27l-.43-.74q-.33.08-.67.08t-.68-.09l-.42.74c-.21.36-.67.49-1.03.28s-.48-.67-.27-1.03l.42-.74q-.46-.49-.66-1.16H15c-.41 0-.75-.33-.75-.74 0-.42.33-.75.75-.75h.85q.2-.68.67-1.17l-.42-.74c-.21-.36-.09-.82.27-1.03.36-.2.82-.08 1.02.28l.43.74q.33-.09.68-.09.34 0 .67.08zm-1.1 2.15q-.35 0-.63.17c-.37.22-.62.62-.62 1.08s.25.87.62 1.08q.29.17.63.17t.62-.16c.38-.22.63-.63.63-1.09s-.25-.87-.63-1.08q-.28-.16-.62-.17M12 3.25c2.9 0 5.25 2.35 5.25 5.25 0 1.74-.85 3.29-2.16 4.24.19.18.28.45.22.72-.1.4-.5.65-.9.55q-1.1-.26-2.41-.26c-3.33 0-5.66 1.32-6.67 3.46-.14.3-.2.43-.23.55-.02.1-.03.21 0 .44q.02.12.21.45.23.32.32.38c.29.2.52.22 1.57.22h5.12c.42 0 .75.34.75.75s-.33.75-.75.75H7.2c-.93 0-1.68.02-2.42-.49-.3-.2-.55-.52-.73-.8-.18-.3-.36-.66-.42-1.01q-.1-.57.02-1.04.12-.45.32-.84c.92-1.95 2.64-3.27 4.84-3.9-1.25-.96-2.06-2.47-2.06-4.17 0-2.9 2.35-5.25 5.25-5.25m0 1.5c-2.07 0-3.75 1.68-3.75 3.75s1.68 3.75 3.75 3.75 3.75-1.68 3.75-3.75S14.07 4.75 12 4.75" clipRule="evenodd" />
    </IconBase>
  ))
);

UserSettingsRegular.displayName = 'UserSettingsRegular';

// Triple export pattern
export { UserSettingsRegular, UserSettingsRegular as UserSettingsRegularIcon, UserSettingsRegular as SiUserSettingsRegular };
export default UserSettingsRegular;
export type { UserSettingsRegularProps };
