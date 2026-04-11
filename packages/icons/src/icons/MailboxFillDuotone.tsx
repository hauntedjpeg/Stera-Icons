import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailboxFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailboxFillDuotone = memo(
  forwardRef<SVGSVGElement, MailboxFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.5 5.13c2.97 0 5.38 2.4 5.38 5.37V19c0 .48-.4.88-.88.88H4A2.9 2.9 0 0 1 1.13 17v-6.5c0-2.97 2.4-5.37 5.37-5.37m-.75 5a.88.88 0 0 0 0 1.74h1.5a.88.88 0 0 0 0-1.74z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M17.5 5.13c2.97 0 5.38 2.4 5.38 5.37V17A2.9 2.9 0 0 1 20 19.88h-9c.48 0 .88-.4.88-.88v-8.5c0-2.97-2.41-5.37-5.38-5.37zm-3.5 4a.88.88 0 0 0 0 1.74h3.13v.63a.88.88 0 0 0 1.75 0V10c0-.48-.4-.87-.88-.87z" clipRule="evenodd" />
        <path d="M7.25 10.13a.88.88 0 0 1 0 1.74h-1.5a.88.88 0 0 1 0-1.74z" />
    </IconBase>
  ))
);

MailboxFillDuotone.displayName = 'MailboxFillDuotone';

// Triple export pattern (lucide-react style)
export { MailboxFillDuotone, MailboxFillDuotone as MailboxFillDuotoneIcon, MailboxFillDuotone as SiMailboxFillDuotone };
export default MailboxFillDuotone;
export type { MailboxFillDuotoneProps };
