import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TicketBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TicketBoldDuotone = memo(
  forwardRef<SVGSVGElement, TicketBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 15c.55 0 1 .45 1 1v1.5h-2V16c0-.55.45-1 1-1M14 10c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1M15 6.5V8c0 .55-.45 1-1 1s-1-.45-1-1V6.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M18.6 4.5q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T22 7.9v1.6c0 .55-.45 1-1 1-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5q.42 0 .7.3.3.28.3.7v1.6q0 .61-.02 1.07t-.25.96q-.37.73-1.1 1.1-.49.22-.96.25t-1.07.02H5.4q-.61 0-1.07-.02t-.96-.25q-.73-.37-1.1-1.1-.22-.49-.25-.96T2 16.1v-1.6c0-.55.45-1 1-1 .83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5c-.55 0-1-.45-1-1V7.9q0-.61.02-1.07t.25-.96q.37-.73 1.1-1.1.49-.22.96-.25T5.4 4.5zm-13.2 2c-.44 0-.7 0-.9.02q-.14 0-.19.02l-.03.01q-.15.08-.23.22v.04q-.02.06-.03.19C4 7.2 4 7.46 4 7.9v.75c1.45.43 2.5 1.76 2.5 3.35S5.45 14.92 4 15.35v.75c0 .44 0 .7.02.9q0 .14.02.19l.01.03q.08.15.22.23h.04q.06.02.19.03c.2.02.46.02.9.02h13.2c.44 0 .7 0 .9-.02q.14 0 .19-.02l.03-.01q.15-.08.23-.22v-.04q.02-.06.03-.19c.02-.2.02-.46.02-.9v-.75c-1.45-.43-2.5-1.76-2.5-3.35s1.05-2.92 2.5-3.35V7.9c0-.44 0-.7-.02-.9q0-.14-.02-.19l-.01-.03q-.08-.15-.22-.23h-.04q-.06-.02-.19-.03c-.2-.02-.46-.02-.9-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

TicketBoldDuotone.displayName = 'TicketBoldDuotone';

// Triple export pattern
export { TicketBoldDuotone, TicketBoldDuotone as TicketBoldDuotoneIcon, TicketBoldDuotone as SiTicketBoldDuotone };
export default TicketBoldDuotone;
export type { TicketBoldDuotoneProps };
