import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21.88 12c0-5.45-4.43-9.87-9.88-9.87S2.13 6.55 2.13 12s4.42 9.88 9.87 9.88 9.88-4.43 9.88-9.88m-5 0c0 .48-.4.88-.88.88h-5.89l2.5 2.5c.35.34.35.9 0 1.24-.33.34-.89.34-1.23 0l-4-4q-.25-.26-.25-.62t.25-.62l4-4c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-2.5 2.5H16c.48 0 .88.4.88.88" clipRule="evenodd" opacity={.4} />
        <path d="M16.88 12c0-.48-.4-.87-.88-.87h-5.89l2.5-2.51c.35-.34.35-.9 0-1.24-.33-.34-.89-.34-1.23 0l-4 4q-.25.27-.25.62 0 .36.25.62l4 4c.34.34.9.34 1.24 0s.34-.9 0-1.24l-2.5-2.5H16c.48 0 .87-.4.88-.88" />
    </IconBase>
  ))
);

ArrowCircleLeftFillDuotone.displayName = 'ArrowCircleLeftFillDuotone';

// Triple export pattern
export { ArrowCircleLeftFillDuotone, ArrowCircleLeftFillDuotone as ArrowCircleLeftFillDuotoneIcon, ArrowCircleLeftFillDuotone as SiArrowCircleLeftFillDuotone };
export default ArrowCircleLeftFillDuotone;
export type { ArrowCircleLeftFillDuotoneProps };
