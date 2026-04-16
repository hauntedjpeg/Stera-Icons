import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 5a1 1 0 0 1 1 1c0 1.94.01 2.67.2 3.24a4 4 0 0 0 2.56 2.56c.57.19 1.3.2 3.24.2h6.59l1 1-1 1H11c-1.78 0-2.91.01-3.85-.3a6 6 0 0 1-3.86-3.85C3 8.91 3 7.78 3 6a1 1 0 0 1 1-1" opacity={.4} />
        <path d="M14.3 7.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 .07 1.33l-.06.08-5 5a1 1 0 1 1-1.42-1.42L18.6 13l-4.3-4.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowCornerDownRightBoldDuotone.displayName = 'ArrowCornerDownRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightBoldDuotone, ArrowCornerDownRightBoldDuotone as ArrowCornerDownRightBoldDuotoneIcon, ArrowCornerDownRightBoldDuotone as SiArrowCornerDownRightBoldDuotone };
export default ArrowCornerDownRightBoldDuotone;
export type { ArrowCornerDownRightBoldDuotoneProps };
