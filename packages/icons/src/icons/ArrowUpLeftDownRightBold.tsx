import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftDownRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftDownRightBold = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftDownRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.5 3c.55 0 1 .45 1 1s-.45 1-1 1H6.41L19 17.59V13.5c0-.55.45-1 1-1s1 .45 1 1V20c0 .55-.45 1-1 1h-6.5c-.55 0-1-.45-1-1s.45-1 1-1h4.09L5 6.41v4.09c0 .55-.45 1-1 1s-1-.45-1-1V4c0-.55.45-1 1-1z" />
    </IconBase>
  ))
);

ArrowUpLeftDownRightBold.displayName = 'ArrowUpLeftDownRightBold';

// Triple export pattern
export { ArrowUpLeftDownRightBold, ArrowUpLeftDownRightBold as ArrowUpLeftDownRightBoldIcon, ArrowUpLeftDownRightBold as SiArrowUpLeftDownRightBold };
export default ArrowUpLeftDownRightBold;
export type { ArrowUpLeftDownRightBoldProps };
