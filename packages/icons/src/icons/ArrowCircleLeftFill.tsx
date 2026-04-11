import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21.88 12a9.88 9.88 0 1 0-19.76 0 9.88 9.88 0 0 0 19.76 0m-5 0c0 .48-.4.88-.88.88h-5.89l2.5 2.5a.88.88 0 0 1-1.23 1.24l-4-4a.9.9 0 0 1 0-1.24l4-4a.88.88 0 0 1 1.24 1.24l-2.5 2.5H16c.48 0 .88.4.88.88" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleLeftFill.displayName = 'ArrowCircleLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleLeftFill, ArrowCircleLeftFill as ArrowCircleLeftFillIcon, ArrowCircleLeftFill as SiArrowCircleLeftFill };
export default ArrowCircleLeftFill;
export type { ArrowCircleLeftFillProps };
