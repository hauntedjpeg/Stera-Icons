import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailMinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailMinusFillDuotone = memo(
  forwardRef<SVGSVGElement, MailMinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-minus-fill-duotone" {...props}>
      <path d="M16.2 4.13h1.13q.5 0 .91.04c.56.04 1.06.14 1.52.38a4 4 0 0 1 1.91 2.25l.02.07.04.2.02.08.04.22v.07l.01.06.03.26q.06.8.05 2.04v2.7a.87.87 0 1 1-1.75 0V9.21l-5.28 3.8a4.9 4.9 0 0 1-5.7 0l-5.27-3.8v4.99c0 .85 0 1.44.03 1.9.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04H13a.88.88 0 0 1 0 1.75H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05V9.8q-.01-1.24.04-2.04 0-.15.03-.28V7.4a4 4 0 0 1 .35-1.15q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" opacity={.4} />
        <path d="M21 15.13a.88.88 0 0 1 0 1.74h-6a.88.88 0 0 1 0-1.75z" />
    </IconBase>
  ))
);

MailMinusFillDuotone.displayName = 'MailMinusFillDuotone';

// Triple export pattern (lucide-react style)
export { MailMinusFillDuotone, MailMinusFillDuotone as MailMinusFillDuotoneIcon, MailMinusFillDuotone as SiMailMinusFillDuotone };
export default MailMinusFillDuotone;
export type { MailMinusFillDuotoneProps };
