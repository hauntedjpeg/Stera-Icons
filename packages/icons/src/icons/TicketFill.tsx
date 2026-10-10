import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TicketFillProps = Omit<IconBaseProps, 'children'>;

const TicketFill = memo(
  forwardRef<SVGSVGElement, TicketFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.13 7c0 .48.39.88.87.88s.88-.4.88-.88V5h4.62c1.1 0 2 .9 2 2v2c0 .28-.22.5-.5.5-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.28 0 .5.22.5.5v2c0 1.1-.9 2-2 2h-4.62v-2c0-.48-.4-.87-.88-.87s-.87.39-.87.87v2H4.5c-1.1 0-2-.9-2-2v-2c0-.28.22-.5.5-.5 1.38 0 2.5-1.12 2.5-2.5S4.38 9.5 3 9.5c-.28 0-.5-.22-.5-.5V7c0-1.1.9-2 2-2h8.63zm.87 3.13c-.48 0-.87.39-.87.87v2c0 .48.39.88.87.88s.88-.4.88-.88v-2c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

TicketFill.displayName = 'TicketFill';

// Triple export pattern
export { TicketFill, TicketFill as TicketFillIcon, TicketFill as SiTicketFill };
export default TicketFill;
export type { TicketFillProps };
