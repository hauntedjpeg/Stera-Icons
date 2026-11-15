import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m18.59 11-1 1H8.8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C5 14.36 5 14.94 5 15.8V18c0 .55-.45 1-1 1s-1-.45-1-1v-2.2q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q7.57 10 8.8 10h8.79z" opacity={.4} />
        <path d="M14.3 5.3c.38-.4 1.02-.4 1.4 0l5 5 .07.07q.23.27.23.63 0 .42-.3.7l-5 5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l4.29-4.3-4.3-4.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ArrowCornerUpRightBoldDuotone.displayName = 'ArrowCornerUpRightBoldDuotone';

// Triple export pattern
export { ArrowCornerUpRightBoldDuotone, ArrowCornerUpRightBoldDuotone as ArrowCornerUpRightBoldDuotoneIcon, ArrowCornerUpRightBoldDuotone as SiArrowCornerUpRightBoldDuotone };
export default ArrowCornerUpRightBoldDuotone;
export type { ArrowCornerUpRightBoldDuotoneProps };
