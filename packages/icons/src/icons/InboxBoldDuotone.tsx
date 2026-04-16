import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InboxBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const InboxBoldDuotone = memo(
  forwardRef<SVGSVGElement, InboxBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.65 3.5a3 3 0 0 1 2.78 1.89l2.49 6.21A1 1 0 0 0 21 11h-1.48l-1.95-4.87a1 1 0 0 0-.92-.63h-9.3a1 1 0 0 0-.92.63L4.48 11H3a1 1 0 0 0-.92.6L4.57 5.4A3 3 0 0 1 7.35 3.5z" opacity={.4} />
        <path fillRule="evenodd" d="M8 11a1 1 0 0 1 .85.48l1.7 2.77h2.9l1.7-2.77.07-.11A1 1 0 0 1 16 11h5a1 1 0 0 1 1 1v2.7q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.93 2 14.7V12a1 1 0 0 1 1-1zm-4 3.7c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V13h-3.44l-1.7 2.77a1 1 0 0 1-.86.48h-4a1 1 0 0 1-.85-.48L7.45 13H4z" clipRule="evenodd" />
    </IconBase>
  ))
);

InboxBoldDuotone.displayName = 'InboxBoldDuotone';

// Triple export pattern (lucide-react style)
export { InboxBoldDuotone, InboxBoldDuotone as InboxBoldDuotoneIcon, InboxBoldDuotone as SiInboxBoldDuotone };
export default InboxBoldDuotone;
export type { InboxBoldDuotoneProps };
