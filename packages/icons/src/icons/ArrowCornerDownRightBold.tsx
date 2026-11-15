import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 5c.55 0 1 .45 1 1v2.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.79l-3.3-3.3c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l5 5q.28.28.29.7 0 .36-.23.63l-.06.08-5 5c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42L17.6 14H8.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q3 9.43 3 8.2V6c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ArrowCornerDownRightBold.displayName = 'ArrowCornerDownRightBold';

// Triple export pattern
export { ArrowCornerDownRightBold, ArrowCornerDownRightBold as ArrowCornerDownRightBoldIcon, ArrowCornerDownRightBold as SiArrowCornerDownRightBold };
export default ArrowCornerDownRightBold;
export type { ArrowCornerDownRightBoldProps };
