import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailboxFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailboxFillDuotone = memo(
  forwardRef<SVGSVGElement, MailboxFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.5 5.13c2.97 0 5.38 2.4 5.38 5.37V19c0 .48-.4.88-.88.88H4c-1.59 0-2.87-1.3-2.87-2.88v-6.5c0-2.97 2.4-5.37 5.37-5.37m-.75 5c-.48 0-.87.39-.87.87s.39.88.87.88h1.5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M17.5 5.13c2.97 0 5.38 2.4 5.38 5.37V17c0 1.59-1.3 2.88-2.88 2.88h-9c.48 0 .88-.4.88-.88v-8.5c0-2.97-2.41-5.37-5.38-5.37zm-3.5 4c-.48 0-.87.39-.87.87s.39.88.87.88h3.13v.62c0 .48.39.88.87.88s.88-.4.88-.88V10c0-.48-.4-.87-.88-.87z" clipRule="evenodd" />
        <path d="M7.25 10.13c.48 0 .88.39.88.87s-.4.88-.88.88h-1.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

MailboxFillDuotone.displayName = 'MailboxFillDuotone';

// Triple export pattern
export { MailboxFillDuotone, MailboxFillDuotone as MailboxFillDuotoneIcon, MailboxFillDuotone as SiMailboxFillDuotone };
export default MailboxFillDuotone;
export type { MailboxFillDuotoneProps };
