import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 5a1 1 0 0 1 1 1c0 1.94.01 2.67.2 3.24a4 4 0 0 0 2.56 2.56c.57.19 1.3.2 3.24.2h6.59l-3.3-3.3a1 1 0 0 1 1.42-1.4l5 5a1 1 0 0 1 .06 1.33l-.06.08-5 5a1 1 0 0 1-1.42-1.42L17.6 14H11c-1.78 0-2.91.01-3.85-.3a6 6 0 0 1-3.86-3.85C3 8.91 3 7.78 3 6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowCornerDownRightBold.displayName = 'ArrowCornerDownRightBold';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightBold, ArrowCornerDownRightBold as ArrowCornerDownRightBoldIcon, ArrowCornerDownRightBold as SiArrowCornerDownRightBold };
export default ArrowCornerDownRightBold;
export type { ArrowCornerDownRightBoldProps };
