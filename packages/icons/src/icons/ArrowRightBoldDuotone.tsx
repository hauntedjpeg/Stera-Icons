import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m17.59 12-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h11.59z" opacity={.4} />
        <path d="M11.3 4.3c.38-.4 1.02-.4 1.4 0l7 7c.4.38.4 1.02 0 1.4l-7 7c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l6.29-6.3-6.3-6.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ArrowRightBoldDuotone.displayName = 'ArrowRightBoldDuotone';

// Triple export pattern
export { ArrowRightBoldDuotone, ArrowRightBoldDuotone as ArrowRightBoldDuotoneIcon, ArrowRightBoldDuotone as SiArrowRightBoldDuotone };
export default ArrowRightBoldDuotone;
export type { ArrowRightBoldDuotoneProps };
