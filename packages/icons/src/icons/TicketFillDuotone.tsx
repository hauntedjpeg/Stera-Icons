import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TicketFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TicketFillDuotone = memo(
  forwardRef<SVGSVGElement, TicketFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="ticket-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M19.5 5a2 2 0 0 1 2 2v2a.5.5 0 0 1-.5.5 2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5v2a2 2 0 0 1-2 2h-4.62v-2a.88.88 0 0 0-1.76 0v2H4.5a2 2 0 0 1-2-2v-2c0-.28.22-.5.5-.5a2.5 2.5 0 0 0 0-5 .5.5 0 0 1-.5-.5V7c0-1.1.9-2 2-2h8.63v2a.88.88 0 0 0 1.74 0V5zM14 10.13c-.48 0-.87.39-.87.87v2a.88.88 0 0 0 1.74 0v-2c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M14 16.13c.48 0 .88.39.88.87v2h-1.76v-2c0-.48.4-.87.88-.87M14 10.13c.48 0 .88.39.88.87v2a.88.88 0 0 1-1.76 0v-2c0-.48.4-.87.88-.87M14.88 7a.88.88 0 0 1-1.76 0V5h1.76z" />
    </IconBase>
  ))
);

TicketFillDuotone.displayName = 'TicketFillDuotone';

// Triple export pattern (lucide-react style)
export { TicketFillDuotone, TicketFillDuotone as TicketFillDuotoneIcon, TicketFillDuotone as SiTicketFillDuotone };
export default TicketFillDuotone;
export type { TicketFillDuotoneProps };
