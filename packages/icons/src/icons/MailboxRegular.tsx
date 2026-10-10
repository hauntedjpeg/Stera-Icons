import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailboxRegularProps = Omit<IconBaseProps, 'children'>;

const MailboxRegular = memo(
  forwardRef<SVGSVGElement, MailboxRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.25 10.25c.41 0 .75.34.75.75s-.34.75-.75.75h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM18 9.25c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.75H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M17.5 5.25c2.9 0 5.25 2.35 5.25 5.25V17c0 1.52-1.23 2.75-2.75 2.75H4c-1.52 0-2.75-1.23-2.75-2.75v-6.5c0-2.9 2.35-5.25 5.25-5.25zm-11 1.5c-2.07 0-3.75 1.68-3.75 3.75V17c0 .69.56 1.25 1.25 1.25h6.25V10.5c0-2.07-1.68-3.75-3.75-3.75m3.67 0c.97.95 1.58 2.28 1.58 3.75v7.75H20c.69 0 1.25-.56 1.25-1.25v-6.5c0-2.07-1.68-3.75-3.75-3.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailboxRegular.displayName = 'MailboxRegular';

// Triple export pattern
export { MailboxRegular, MailboxRegular as MailboxRegularIcon, MailboxRegular as SiMailboxRegular };
export default MailboxRegular;
export type { MailboxRegularProps };
