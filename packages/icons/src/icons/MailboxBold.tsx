import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailboxBoldProps = Omit<IconBaseProps, 'children'>;

const MailboxBold = memo(
  forwardRef<SVGSVGElement, MailboxBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.25 10c.55 0 1 .45 1 1s-.45 1-1 1h-1.5c-.55 0-1-.45-1-1s.45-1 1-1zM18 9c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1s-1-.45-1-1V11h-3c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M17.5 5c3.04 0 5.5 2.46 5.5 5.5V17c0 1.66-1.34 3-3 3H4c-1.66 0-3-1.34-3-3v-6.5C1 7.46 3.46 5 6.5 5zm-11 2C4.57 7 3 8.57 3 10.5V17c0 .55.45 1 1 1h6v-7.5C10 8.57 8.43 7 6.5 7m4.24 0c.79.95 1.26 2.17 1.26 3.5V18h8c.55 0 1-.45 1-1v-6.5C21 8.57 19.43 7 17.5 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailboxBold.displayName = 'MailboxBold';

// Triple export pattern
export { MailboxBold, MailboxBold as MailboxBoldIcon, MailboxBold as SiMailboxBold };
export default MailboxBold;
export type { MailboxBoldProps };
