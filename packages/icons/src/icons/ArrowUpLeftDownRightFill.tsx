import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftDownRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftDownRightFill = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftDownRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.5 3.13a.88.88 0 0 1 .62 1.49L8.49 7.25l8.26 8.26 2.63-2.63a.88.88 0 0 1 1.5.62V20c0 .48-.4.88-.88.88h-6.5a.88.88 0 0 1-.62-1.5l2.63-2.63-8.26-8.26-2.63 2.63a.88.88 0 0 1-1.5-.62V4c0-.48.4-.87.88-.87z" />
    </IconBase>
  ))
);

ArrowUpLeftDownRightFill.displayName = 'ArrowUpLeftDownRightFill';

// Triple export pattern (lucide-react style)
export { ArrowUpLeftDownRightFill, ArrowUpLeftDownRightFill as ArrowUpLeftDownRightFillIcon, ArrowUpLeftDownRightFill as SiArrowUpLeftDownRightFill };
export default ArrowUpLeftDownRightFill;
export type { ArrowUpLeftDownRightFillProps };
