import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 5c.55 0 1 .45 1 1v2.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.79l1 1-1 1H8.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q3 9.43 3 8.2V6c0-.55.45-1 1-1" opacity={.4} />
        <path d="M14.3 7.3c.38-.4 1.02-.4 1.4 0l5 5q.3.28.3.7 0 .36-.23.63l-.06.08-5 5c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42L18.6 13l-4.3-4.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ArrowCornerDownRightBoldDuotone.displayName = 'ArrowCornerDownRightBoldDuotone';

// Triple export pattern
export { ArrowCornerDownRightBoldDuotone, ArrowCornerDownRightBoldDuotone as ArrowCornerDownRightBoldDuotoneIcon, ArrowCornerDownRightBoldDuotone as SiArrowCornerDownRightBoldDuotone };
export default ArrowCornerDownRightBoldDuotone;
export type { ArrowCornerDownRightBoldDuotoneProps };
