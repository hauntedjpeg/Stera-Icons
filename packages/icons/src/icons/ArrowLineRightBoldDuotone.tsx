import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1" opacity={.4} />
        <path d="M10.7 4.3c-.38-.4-1.02-.4-1.4 0-.4.38-.4 1.02 0 1.4l5.29 5.3H3c-.55 0-1 .45-1 1s.45 1 1 1h11.59l-5.3 5.3c-.39.38-.39 1.02 0 1.4.4.4 1.03.4 1.42 0l7-7q.05-.04.08-.1.03-.01.04-.05l.07-.12.06-.14.01-.05L18 12q0-.12-.03-.23l-.01-.06-.06-.14-.07-.13-.12-.15z" />
    </IconBase>
  ))
);

ArrowLineRightBoldDuotone.displayName = 'ArrowLineRightBoldDuotone';

// Triple export pattern
export { ArrowLineRightBoldDuotone, ArrowLineRightBoldDuotone as ArrowLineRightBoldDuotoneIcon, ArrowLineRightBoldDuotone as SiArrowLineRightBoldDuotone };
export default ArrowLineRightBoldDuotone;
export type { ArrowLineRightBoldDuotoneProps };
