import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailboxFillProps = Omit<IconBaseProps, 'children'>;

const MailboxFill = memo(
  forwardRef<SVGSVGElement, MailboxFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.25 10.13c.48 0 .88.39.88.87s-.4.88-.88.88h-1.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
        <path fillRule="evenodd" d="M17.5 5.13c2.97 0 5.38 2.4 5.38 5.37V17c0 1.59-1.3 2.88-2.88 2.88H4c-1.59 0-2.87-1.3-2.87-2.88v-6.5c0-2.97 2.4-5.37 5.37-5.37zm-11 1.75c-2 0-3.62 1.62-3.62 3.62V17c0 .62.5 1.13 1.12 1.13h6.13V10.5c0-2-1.63-3.62-3.63-3.62M14 9.13c-.48 0-.87.39-.87.87s.39.88.87.88h3.13v.62c0 .48.39.88.87.88s.88-.4.88-.88V10c0-.48-.4-.87-.88-.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailboxFill.displayName = 'MailboxFill';

// Triple export pattern
export { MailboxFill, MailboxFill as MailboxFillIcon, MailboxFill as SiMailboxFill };
export default MailboxFill;
export type { MailboxFillProps };
