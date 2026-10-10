import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.3 5.3c.38-.4 1.02-.4 1.4 0l5 5 .07.07q.23.27.23.63 0 .42-.3.7l-5 5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l3.29-3.3H11c-1.94 0-2.67.01-3.24.2-1.21.4-2.17 1.35-2.56 2.56C5 15.33 5 16.06 5 18c0 .55-.45 1-1 1s-1-.45-1-1c0-1.78-.01-2.91.3-3.85.59-1.83 2.02-3.26 3.85-3.86C8.09 10 9.22 10 11 10h6.59l-3.3-3.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ArrowCornerUpRightBold.displayName = 'ArrowCornerUpRightBold';

// Triple export pattern
export { ArrowCornerUpRightBold, ArrowCornerUpRightBold as ArrowCornerUpRightBoldIcon, ArrowCornerUpRightBold as SiArrowCornerUpRightBold };
export default ArrowCornerUpRightBold;
export type { ArrowCornerUpRightBoldProps };
