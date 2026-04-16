import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InboxBoldProps = Omit<IconBaseProps, 'children'>;

const InboxBold = memo(
  forwardRef<SVGSVGElement, InboxBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.65 3.5a3 3 0 0 1 2.78 1.89l2.49 6.21a1 1 0 0 1 .08.4v4.5q-.02 1.33-.76 2.34l-.01.02A4 4 0 0 1 18 20.5H6a4 4 0 0 1-3.23-1.64l-.02-.02A4 4 0 0 1 2 16.5V12a1 1 0 0 1 .08-.4L4.57 5.4A3 3 0 0 1 7.35 3.5zM4 14.7c0 .86 0 1.44.04 1.89.03.42.1.64.17.8l.01.03q.3.57.87.86c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.86v-.03c.08-.16.15-.38.18-.8.04-.45.04-1.03.04-1.89V13h-3.44l-1.7 2.77a1 1 0 0 1-.86.48h-4a1 1 0 0 1-.85-.48L7.45 13H4zm3.35-9.2a1 1 0 0 0-.92.63L4.48 11H8a1 1 0 0 1 .85.48l1.7 2.77h2.9l1.7-2.77.07-.11A1 1 0 0 1 16 11h3.52l-1.95-4.87a1 1 0 0 0-.92-.63z" clipRule="evenodd" />
    </IconBase>
  ))
);

InboxBold.displayName = 'InboxBold';

// Triple export pattern (lucide-react style)
export { InboxBold, InboxBold as InboxBoldIcon, InboxBold as SiInboxBold };
export default InboxBold;
export type { InboxBoldProps };
