import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InboxBoldProps = Omit<IconBaseProps, 'children'>;

const InboxBold = memo(
  forwardRef<SVGSVGElement, InboxBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.65 3.5c1.22 0 2.33.75 2.78 1.89l2.49 6.21.04.11.03.14.01.15v4.5q-.02 1.33-.76 2.34l-.01.02c-.73 1-1.9 1.64-3.23 1.64H6c-1.33 0-2.5-.65-3.23-1.64l-.02-.02C2.28 18.18 2 17.37 2 16.5V12l.01-.15q0-.08.03-.14l.04-.1 2.49-6.22C5.02 4.25 6.13 3.5 7.35 3.5zM4 14.7c0 .86 0 1.44.04 1.89.03.42.1.64.17.8l.01.03q.3.57.87.86c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.56-.3.87-.86v-.03c.08-.16.15-.38.18-.8.04-.45.04-1.03.04-1.89V13h-3.44l-1.7 2.77q-.32.46-.86.48h-4c-.35 0-.67-.18-.85-.48L7.45 13H4zm3.35-9.2c-.4 0-.77.25-.92.63L4.48 11H8c.35 0 .67.18.85.48l1.7 2.77h2.9l1.7-2.77.07-.11q.31-.36.78-.37h3.52l-1.95-4.87c-.15-.38-.52-.63-.92-.63z" clipRule="evenodd" />
    </IconBase>
  ))
);

InboxBold.displayName = 'InboxBold';

// Triple export pattern
export { InboxBold, InboxBold as InboxBoldIcon, InboxBold as SiInboxBold };
export default InboxBold;
export type { InboxBoldProps };
