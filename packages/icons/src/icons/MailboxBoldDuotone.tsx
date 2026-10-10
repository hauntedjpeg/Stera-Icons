import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailboxBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailboxBoldDuotone = memo(
  forwardRef<SVGSVGElement, MailboxBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.5 5c3.04 0 5.5 2.46 5.5 5.5V17c0 1.66-1.34 3-3 3h-9c.55 0 1-.45 1-1v-1h8c.55 0 1-.45 1-1v-6.5C21 8.57 19.43 7 17.5 7h-6.76c-1-1.22-2.53-2-4.24-2z" opacity={0.4} />
        <path d="M7.25 10c.55 0 1 .45 1 1s-.45 1-1 1h-1.5c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path fillRule="evenodd" d="M6.5 5C9.54 5 12 7.46 12 10.5V19c0 .55-.45 1-1 1H4c-1.66 0-3-1.34-3-3v-6.5C1 7.46 3.46 5 6.5 5m0 2C4.57 7 3 8.57 3 10.5V17c0 .55.45 1 1 1h6v-7.5C10 8.57 8.43 7 6.5 7" clipRule="evenodd" />
        <path d="M18 9c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1s-1-.45-1-1V11h-3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

MailboxBoldDuotone.displayName = 'MailboxBoldDuotone';

// Triple export pattern
export { MailboxBoldDuotone, MailboxBoldDuotone as MailboxBoldDuotoneIcon, MailboxBoldDuotone as SiMailboxBoldDuotone };
export default MailboxBoldDuotone;
export type { MailboxBoldDuotoneProps };
