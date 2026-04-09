import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailBadgeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailBadgeFillDuotone = memo(
  forwardRef<SVGSVGElement, MailBadgeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-badge-fill-duotone" {...props}>
      <path d="M2.2 7.5c-.02.3.11.58.36.76l6.59 4.76c1.7 1.23 4 1.23 5.7 0l4.42-3.2a4.5 4.5 0 0 0 2.6-.03v4.41q.01 1.24-.04 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.69 4 4 0 0 1-.37-1.52q-.06-.8-.04-2.04V9.8q-.01-1.23.04-2.04 0-.14.03-.26" opacity={.4} />
        <path d="M16.21 4.13a4.5 4.5 0 0 0 3.06 5.7l-4.42 3.19a4.9 4.9 0 0 1-5.7 0l-6.6-4.76a.9.9 0 0 1-.35-.82q.08-.64.35-1.2.57-1.11 1.7-1.7.68-.33 1.5-.37.82-.06 2.05-.04z" />
        <path d="M20.5 2.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    </IconBase>
  ))
);

MailBadgeFillDuotone.displayName = 'MailBadgeFillDuotone';

// Triple export pattern (lucide-react style)
export { MailBadgeFillDuotone, MailBadgeFillDuotone as MailBadgeFillDuotoneIcon, MailBadgeFillDuotone as SiMailBadgeFillDuotone };
export default MailBadgeFillDuotone;
export type { MailBadgeFillDuotoneProps };
