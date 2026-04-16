import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.3 5.3a1 1 0 1 1 1.4 1.4L6.42 10H13c1.78 0 2.91-.01 3.85.3a6 6 0 0 1 3.86 3.85c.3.94.29 2.07.29 3.85a1 1 0 0 1-2 0c0-1.94-.01-2.67-.2-3.24a4 4 0 0 0-2.56-2.56c-.57-.19-1.3-.2-3.24-.2H6.41l3.3 3.3a1 1 0 0 1-1.42 1.4l-5-5a1 1 0 0 1-.06-1.33l.06-.08z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftBold.displayName = 'ArrowCornerUpLeftBold';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeftBold, ArrowCornerUpLeftBold as ArrowCornerUpLeftBoldIcon, ArrowCornerUpLeftBold as SiArrowCornerUpLeftBold };
export default ArrowCornerUpLeftBold;
export type { ArrowCornerUpLeftBoldProps };
