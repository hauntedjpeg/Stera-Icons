import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TicketFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TicketFillDuotone = memo(
  forwardRef<SVGSVGElement, TicketFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19.5 5c1.1 0 2 .9 2 2v2c0 .28-.22.5-.5.5-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.28 0 .5.22.5.5v2c0 1.1-.9 2-2 2h-4.62v-2c0-.48-.4-.87-.88-.87s-.87.39-.87.87v2H4.5c-1.1 0-2-.9-2-2v-2c0-.28.22-.5.5-.5 1.38 0 2.5-1.12 2.5-2.5S4.38 9.5 3 9.5c-.28 0-.5-.22-.5-.5V7c0-1.1.9-2 2-2h8.63v2c0 .48.39.88.87.88s.88-.4.88-.88V5zM14 10.13c-.48 0-.87.39-.87.87v2c0 .48.39.88.87.88s.88-.4.88-.88v-2c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M14 16.13c.48 0 .88.39.88.87v2h-1.76v-2c0-.48.4-.87.88-.87M14 10.13c.48 0 .88.39.88.87v2c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-2c0-.48.39-.87.87-.87M14.88 7c0 .48-.4.88-.88.88s-.87-.4-.87-.88V5h1.74z" />
    </IconBase>
  ))
);

TicketFillDuotone.displayName = 'TicketFillDuotone';

// Triple export pattern
export { TicketFillDuotone, TicketFillDuotone as TicketFillDuotoneIcon, TicketFillDuotone as SiTicketFillDuotone };
export default TicketFillDuotone;
export type { TicketFillDuotoneProps };
