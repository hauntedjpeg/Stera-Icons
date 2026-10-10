import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UsersBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UsersBoldDuotone = memo(
  forwardRef<SVGSVGElement, UsersBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 3c3.04 0 5.5 2.46 5.5 5.5 0 1.68-.75 3.17-1.93 4.18 1.71.73 3.04 2.03 3.78 3.8.11.3.25.61.32.95q.12.55 0 1.15c-.08.4-.28.78-.48 1.07s-.47.62-.8.84c-.8.54-1.66.51-2.59.51h-.51c-.55 0-1-.45-1-1s.45-1 1-1h.51c1.1 0 1.28-.03 1.48-.17l.02-.02.07-.06.16-.21.13-.23.04-.09v-.03q.05-.25.02-.34c-.03-.12-.08-.26-.22-.6-.7-1.66-2.09-2.76-4.04-3.12q-.39-.07-.67-.37c-.64-.68-.29-1.7.47-2l.24-.1c1.18-.56 2-1.76 2-3.16C18.5 6.57 16.93 5 15 5c-.55 0-1-.45-1-1s.45-1 1-1" opacity={.4} />
        <path fillRule="evenodd" d="M9 3c3.04 0 5.5 2.46 5.5 5.5 0 1.68-.75 3.17-1.93 4.18 1.7.73 3.03 2.02 3.78 3.8.11.3.25.61.32.95q.12.55 0 1.15c-.08.4-.28.78-.48 1.07s-.47.62-.8.84c-.8.54-1.66.51-2.59.51H5.2c-.93 0-1.79.03-2.6-.5-.32-.23-.6-.56-.8-.85-.19-.3-.4-.68-.47-1.07q-.12-.6 0-1.15.12-.52.32-.94c.75-1.8 2.08-3.08 3.78-3.8C4.25 11.66 3.5 10.17 3.5 8.5 3.5 5.46 5.96 3 9 3m0 11c-2.74 0-4.65 1.23-5.5 3.26-.14.33-.2.47-.22.59q-.02.09.01.34l.01.03.04.09.13.23q.08.12.16.2l.07.07.02.02c.2.14.37.17 1.48.17h7.6c1.11 0 1.28-.03 1.48-.17l.02-.02.07-.06.16-.21.13-.23.04-.09v-.03q.05-.25.02-.34c-.03-.12-.08-.26-.22-.6C13.66 15.24 11.74 14 9 14m0-9C7.07 5 5.5 6.57 5.5 8.5S7.07 12 9 12s3.5-1.57 3.5-3.5S10.93 5 9 5" clipRule="evenodd" />
    </IconBase>
  ))
);

UsersBoldDuotone.displayName = 'UsersBoldDuotone';

// Triple export pattern
export { UsersBoldDuotone, UsersBoldDuotone as UsersBoldDuotoneIcon, UsersBoldDuotone as SiUsersBoldDuotone };
export default UsersBoldDuotone;
export type { UsersBoldDuotoneProps };
