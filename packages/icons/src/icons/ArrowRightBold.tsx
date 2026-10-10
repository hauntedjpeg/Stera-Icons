import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowRightBold = memo(
  forwardRef<SVGSVGElement, ArrowRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.3 4.3c.38-.4 1.02-.4 1.4 0l7 7c.4.38.4 1.02 0 1.4l-7 7c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l5.29-5.3H5c-.55 0-1-.45-1-1s.45-1 1-1h11.59l-5.3-5.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ArrowRightBold.displayName = 'ArrowRightBold';

// Triple export pattern
export { ArrowRightBold, ArrowRightBold as ArrowRightBoldIcon, ArrowRightBold as SiArrowRightBold };
export default ArrowRightBold;
export type { ArrowRightBoldProps };
