import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsLeftRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowsLeftRightBold = memo(
  forwardRef<SVGSVGElement, ArrowsLeftRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.8 12.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-2.29 2.3H20.5c.55 0 1 .45 1 1s-.45 1-1 1H4.91l2.3 2.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-4-4c-.36-.36-.39-.94-.07-1.33l.07-.08zM16.8 2.8c.38-.4 1.02-.4 1.4 0l4 4 .07.07q.23.27.23.63 0 .42-.3.7l-4 4c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l2.29-2.3H3.5c-.55 0-1-.45-1-1s.45-1 1-1h15.59l-2.3-2.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ArrowsLeftRightBold.displayName = 'ArrowsLeftRightBold';

// Triple export pattern
export { ArrowsLeftRightBold, ArrowsLeftRightBold as ArrowsLeftRightBoldIcon, ArrowsLeftRightBold as SiArrowsLeftRightBold };
export default ArrowsLeftRightBold;
export type { ArrowsLeftRightBoldProps };
