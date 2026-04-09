import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-left-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M21.88 12a9.88 9.88 0 1 0-19.76 0 9.88 9.88 0 0 0 19.76 0m-5 0c0 .48-.4.88-.88.88h-5.89l2.5 2.5a.88.88 0 0 1-1.23 1.24l-4-4a.9.9 0 0 1 0-1.24l4-4a.88.88 0 0 1 1.24 1.24l-2.5 2.5H16c.48 0 .88.4.88.88" clipRule="evenodd" opacity={.4} />
        <path d="M16.88 12c0-.48-.4-.87-.88-.87h-5.89l2.5-2.51a.88.88 0 0 0-1.23-1.24l-4 4a.9.9 0 0 0 0 1.24l4 4a.88.88 0 0 0 1.24-1.24l-2.5-2.5H16c.48 0 .87-.4.88-.88" />
    </IconBase>
  ))
);

ArrowCircleLeftFillDuotone.displayName = 'ArrowCircleLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleLeftFillDuotone, ArrowCircleLeftFillDuotone as ArrowCircleLeftFillDuotoneIcon, ArrowCircleLeftFillDuotone as SiArrowCircleLeftFillDuotone };
export default ArrowCircleLeftFillDuotone;
export type { ArrowCircleLeftFillDuotoneProps };
