import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, MailPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-plus-fill-duotone" {...props}>
      <path d="M17.33 4.13q.5 0 .91.04c.56.04 1.06.14 1.52.38a4 4 0 0 1 1.91 2.25l.02.07.04.2.02.08.04.22v.07l.01.06.03.26q.06.8.05 2.04V12a.87.87 0 1 1-1.75 0V9.21l-5.28 3.8a4.8 4.8 0 0 1-2.85.93c-1 0-2-.3-2.85-.92l-5.27-3.8v4.98c0 .85 0 1.44.03 1.9.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04H13a.88.88 0 0 1 0 1.75H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05V9.8q-.01-1.24.04-2.04 0-.15.03-.28V7.4a4 4 0 0 1 .35-1.15q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04h9.53" opacity={.4} />
        <path d="M18 13.13c.48 0 .87.39.87.87v2.12H21a.87.87 0 1 1 0 1.75h-2.13V20a.88.88 0 0 1-1.75 0v-2.13H15a.88.88 0 0 1 0-1.75h2.12V14c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

MailPlusFillDuotone.displayName = 'MailPlusFillDuotone';

// Triple export pattern (lucide-react style)
export { MailPlusFillDuotone, MailPlusFillDuotone as MailPlusFillDuotoneIcon, MailPlusFillDuotone as SiMailPlusFillDuotone };
export default MailPlusFillDuotone;
export type { MailPlusFillDuotoneProps };
