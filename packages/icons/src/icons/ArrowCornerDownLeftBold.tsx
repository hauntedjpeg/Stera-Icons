import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 5c.55 0 1 .45 1 1 0 1.78.01 2.91-.3 3.85-.59 1.83-2.02 3.26-3.85 3.86-.94.3-2.07.29-3.85.29H6.41l3.3 3.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-5-5-.06-.07Q3 13.36 3 13q0-.42.3-.7l5-5c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L6.42 12H13c1.94 0 2.67-.01 3.24-.2 1.21-.4 2.17-1.35 2.56-2.56.19-.57.2-1.3.2-3.24 0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ArrowCornerDownLeftBold.displayName = 'ArrowCornerDownLeftBold';

// Triple export pattern
export { ArrowCornerDownLeftBold, ArrowCornerDownLeftBold as ArrowCornerDownLeftBoldIcon, ArrowCornerDownLeftBold as SiArrowCornerDownLeftBold };
export default ArrowCornerDownLeftBold;
export type { ArrowCornerDownLeftBoldProps };
