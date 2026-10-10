import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.3 5.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L6.42 10H13c1.78 0 2.91-.01 3.85.3 1.83.59 3.26 2.02 3.86 3.85.3.94.29 2.07.29 3.85 0 .55-.45 1-1 1s-1-.45-1-1c0-1.94-.01-2.67-.2-3.24-.4-1.21-1.35-2.17-2.56-2.56-.57-.19-1.3-.2-3.24-.2H6.41l3.3 3.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-5-5q-.28-.28-.29-.7 0-.36.23-.63l.06-.08z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftBold.displayName = 'ArrowCornerUpLeftBold';

// Triple export pattern
export { ArrowCornerUpLeftBold, ArrowCornerUpLeftBold as ArrowCornerUpLeftBoldIcon, ArrowCornerUpLeftBold as SiArrowCornerUpLeftBold };
export default ArrowCornerUpLeftBold;
export type { ArrowCornerUpLeftBoldProps };
