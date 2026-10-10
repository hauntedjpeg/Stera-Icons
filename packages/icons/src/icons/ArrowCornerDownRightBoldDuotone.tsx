import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 5c.55 0 1 .45 1 1 0 1.94.01 2.67.2 3.24.4 1.21 1.35 2.17 2.56 2.56.57.19 1.3.2 3.24.2h6.59l1 1-1 1H11c-1.78 0-2.91.01-3.85-.3-1.83-.59-3.26-2.02-3.86-3.85C3 8.91 3 7.78 3 6c0-.55.45-1 1-1" opacity={.4} />
        <path d="M14.3 7.3c.38-.4 1.02-.4 1.4 0l5 5q.3.28.3.7 0 .36-.23.63l-.06.08-5 5c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42L18.6 13l-4.3-4.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ArrowCornerDownRightBoldDuotone.displayName = 'ArrowCornerDownRightBoldDuotone';

// Triple export pattern
export { ArrowCornerDownRightBoldDuotone, ArrowCornerDownRightBoldDuotone as ArrowCornerDownRightBoldDuotoneIcon, ArrowCornerDownRightBoldDuotone as SiArrowCornerDownRightBoldDuotone };
export default ArrowCornerDownRightBoldDuotone;
export type { ArrowCornerDownRightBoldDuotoneProps };
