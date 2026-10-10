import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailBadgeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailBadgeFillDuotone = memo(
  forwardRef<SVGSVGElement, MailBadgeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.2 7.5c-.02.3.11.58.36.76l6.59 4.76c1.7 1.23 4 1.23 5.7 0l4.42-3.2q.59.18 1.23.18.72 0 1.37-.21v4.41q.01 1.24-.04 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.58-1.7-1.69-.33-.69-.37-1.52-.06-.8-.04-2.04V9.8q-.01-1.23.04-2.04 0-.14.03-.26" opacity={.4} />
        <path d="M16.21 4.13Q16 4.78 16 5.5c0 2.06 1.38 3.8 3.27 4.33l-4.42 3.19c-1.7 1.23-4 1.23-5.7 0l-6.6-4.76c-.25-.19-.39-.5-.35-.82q.08-.64.35-1.2.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" />
        <path d="M20.5 2.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3" />
    </IconBase>
  ))
);

MailBadgeFillDuotone.displayName = 'MailBadgeFillDuotone';

// Triple export pattern
export { MailBadgeFillDuotone, MailBadgeFillDuotone as MailBadgeFillDuotoneIcon, MailBadgeFillDuotone as SiMailBadgeFillDuotone };
export default MailBadgeFillDuotone;
export type { MailBadgeFillDuotoneProps };
