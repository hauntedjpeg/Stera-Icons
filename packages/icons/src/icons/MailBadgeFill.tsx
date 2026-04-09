import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailBadgeFillProps = Omit<IconBaseProps, 'children'>;

const MailBadgeFill = memo(
  forwardRef<SVGSVGElement, MailBadgeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-badge-fill" {...props}>
      <path d="M8.6 12.63a5.8 5.8 0 0 0 6.8 0l3.87-2.8a4.5 4.5 0 0 0 2.6-.04v4.41q.01 1.24-.04 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05V9.8q0-1.08.03-1.83z" />
        <path d="M16.21 4.13a4.5 4.5 0 0 0 1.35 4.77l-3.19 2.3a4.05 4.05 0 0 1-4.74 0L2.61 6.15c.37-.68.94-1.24 1.63-1.6q.7-.33 1.52-.37.8-.06 2.04-.04zM20.5 2.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    </IconBase>
  ))
);

MailBadgeFill.displayName = 'MailBadgeFill';

// Triple export pattern (lucide-react style)
export { MailBadgeFill, MailBadgeFill as MailBadgeFillIcon, MailBadgeFill as SiMailBadgeFill };
export default MailBadgeFill;
export type { MailBadgeFillProps };
