import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailBadgeFillProps = Omit<IconBaseProps, 'children'>;

const MailBadgeFill = memo(
  forwardRef<SVGSVGElement, MailBadgeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.6 12.63c2.03 1.46 4.77 1.46 6.8 0l3.87-2.8q.6.16 1.23.17.72 0 1.37-.21v4.41q.01 1.24-.04 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05V9.8q0-1.08.03-1.83z" />
        <path d="M16.21 4.13Q16 4.78 16 5.5c0 1.36.6 2.58 1.56 3.4l-3.19 2.3c-1.41 1.03-3.33 1.03-4.74 0L2.61 6.15c.37-.68.94-1.24 1.63-1.6q.7-.33 1.52-.37.8-.06 2.04-.04zM20.5 2.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3" />
    </IconBase>
  ))
);

MailBadgeFill.displayName = 'MailBadgeFill';

// Triple export pattern
export { MailBadgeFill, MailBadgeFill as MailBadgeFillIcon, MailBadgeFill as SiMailBadgeFill };
export default MailBadgeFill;
export type { MailBadgeFillProps };
