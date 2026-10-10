import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowLineRightBold = memo(
  forwardRef<SVGSVGElement, ArrowLineRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1M10.7 4.3c-.38-.4-1.02-.4-1.4 0-.4.38-.4 1.02 0 1.4l5.29 5.3H3c-.55 0-1 .45-1 1s.45 1 1 1h11.59l-5.3 5.3c-.39.38-.39 1.02 0 1.4.4.4 1.03.4 1.42 0l7-7c.39-.38.39-1.02 0-1.4z" />
    </IconBase>
  ))
);

ArrowLineRightBold.displayName = 'ArrowLineRightBold';

// Triple export pattern
export { ArrowLineRightBold, ArrowLineRightBold as ArrowLineRightBoldIcon, ArrowLineRightBold as SiArrowLineRightBold };
export default ArrowLineRightBold;
export type { ArrowLineRightBoldProps };
