import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailboxFillProps = Omit<IconBaseProps, 'children'>;

const MailboxFill = memo(
  forwardRef<SVGSVGElement, MailboxFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.25 10.13a.88.88 0 0 1 0 1.74h-1.5a.88.88 0 0 1 0-1.74z" />
        <path fillRule="evenodd" d="M17.5 5.13c2.97 0 5.38 2.4 5.38 5.37V17A2.9 2.9 0 0 1 20 19.88H4A2.9 2.9 0 0 1 1.13 17v-6.5c0-2.97 2.4-5.37 5.37-5.37zm-11 1.75c-2 0-3.62 1.62-3.62 3.62V17c0 .62.5 1.13 1.12 1.13h6.13V10.5c0-2-1.63-3.62-3.63-3.62M14 9.13a.88.88 0 0 0 0 1.74h3.13v.63a.88.88 0 0 0 1.75 0V10c0-.48-.4-.87-.88-.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailboxFill.displayName = 'MailboxFill';

// Triple export pattern (lucide-react style)
export { MailboxFill, MailboxFill as MailboxFillIcon, MailboxFill as SiMailboxFill };
export default MailboxFill;
export type { MailboxFillProps };
