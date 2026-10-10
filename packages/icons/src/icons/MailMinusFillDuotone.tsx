import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailMinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailMinusFillDuotone = memo(
  forwardRef<SVGSVGElement, MailMinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.2 4.13h1.13q.5 0 .91.04c.56.04 1.06.14 1.52.38q.84.43 1.37 1.17.18.25.32.52.09.16.14.33l.08.23.02.07.04.2.02.08.04.22v.07l.01.06.03.26q.06.8.05 2.04v2.7c0 .48-.4.88-.88.88s-.87-.4-.87-.88V9.21l-5.28 3.8c-1.7 1.24-4 1.24-5.7 0l-5.27-3.8v4.99c0 .85 0 1.44.03 1.9.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04H13c.48 0 .88.39.88.87s-.4.88-.88.88H7.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05V9.8q-.01-1.24.04-2.04 0-.15.03-.28V7.4q.07-.44.21-.84l.03-.08.1-.23q.59-1.11 1.7-1.7.7-.33 1.52-.37.8-.06 2.04-.04z" opacity={.4} />
        <path d="M21 15.13c.48 0 .88.39.88.87s-.4.88-.88.88h-6c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

MailMinusFillDuotone.displayName = 'MailMinusFillDuotone';

// Triple export pattern
export { MailMinusFillDuotone, MailMinusFillDuotone as MailMinusFillDuotoneIcon, MailMinusFillDuotone as SiMailMinusFillDuotone };
export default MailMinusFillDuotone;
export type { MailMinusFillDuotoneProps };
