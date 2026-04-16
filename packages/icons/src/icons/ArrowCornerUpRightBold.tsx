import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.3 5.3a1 1 0 0 1 1.4 0l5 5 .07.07a1 1 0 0 1-.06 1.34l-5 5a1 1 0 1 1-1.42-1.42L17.6 12H11c-1.94 0-2.67.01-3.24.2a4 4 0 0 0-2.56 2.56C5 15.33 5 16.06 5 18a1 1 0 0 1-2 0c0-1.78-.01-2.91.3-3.85a6 6 0 0 1 3.85-3.86C8.09 10 9.22 10 11 10h6.59l-3.3-3.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowCornerUpRightBold.displayName = 'ArrowCornerUpRightBold';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpRightBold, ArrowCornerUpRightBold as ArrowCornerUpRightBoldIcon, ArrowCornerUpRightBold as SiArrowCornerUpRightBold };
export default ArrowCornerUpRightBold;
export type { ArrowCornerUpRightBoldProps };
