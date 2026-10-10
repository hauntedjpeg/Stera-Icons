import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 5c.55 0 1 .45 1 1 0 1.94.01 2.67.2 3.24.4 1.21 1.35 2.17 2.56 2.56.57.19 1.3.2 3.24.2h6.59l-3.3-3.3c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l5 5q.28.28.29.7 0 .36-.23.63l-.06.08-5 5c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42L17.6 14H11c-1.78 0-2.91.01-3.85-.3-1.83-.59-3.26-2.02-3.86-3.85C3 8.91 3 7.78 3 6c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ArrowCornerDownRightBold.displayName = 'ArrowCornerDownRightBold';

// Triple export pattern
export { ArrowCornerDownRightBold, ArrowCornerDownRightBold as ArrowCornerDownRightBoldIcon, ArrowCornerDownRightBold as SiArrowCornerDownRightBold };
export default ArrowCornerDownRightBold;
export type { ArrowCornerDownRightBoldProps };
