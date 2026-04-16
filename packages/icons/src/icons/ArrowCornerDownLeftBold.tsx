import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 5a1 1 0 0 1 1 1c0 1.78.01 2.91-.3 3.85a6 6 0 0 1-3.85 3.86c-.94.3-2.07.29-3.85.29H6.41l3.3 3.3a1 1 0 1 1-1.42 1.4l-5-5-.06-.07a1 1 0 0 1 .06-1.34l5-5a1 1 0 1 1 1.42 1.42L6.4 12H13c1.94 0 2.67-.01 3.24-.2a4 4 0 0 0 2.56-2.56c.19-.57.2-1.3.2-3.24a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowCornerDownLeftBold.displayName = 'ArrowCornerDownLeftBold';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownLeftBold, ArrowCornerDownLeftBold as ArrowCornerDownLeftBoldIcon, ArrowCornerDownLeftBold as SiArrowCornerDownLeftBold };
export default ArrowCornerDownLeftBold;
export type { ArrowCornerDownLeftBoldProps };
