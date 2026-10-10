import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsLeftRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowsLeftRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowsLeftRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 16.5c.55 0 1 .45 1 1s-.45 1-1 1H4.91l-1-1 1-1zM20.09 7.5l-1 1H3.5c-.55 0-1-.45-1-1s.45-1 1-1h15.59z" opacity={0.4} />
        <path d="M5.8 12.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-3.29 3.3 3.3 3.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-4-4c-.36-.36-.39-.94-.07-1.33l.07-.08zM16.8 2.8c.38-.4 1.02-.4 1.4 0l4 4 .07.07q.23.27.23.63 0 .42-.3.7l-4 4c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l3.29-3.3-3.3-3.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ArrowsLeftRightBoldDuotone.displayName = 'ArrowsLeftRightBoldDuotone';

// Triple export pattern
export { ArrowsLeftRightBoldDuotone, ArrowsLeftRightBoldDuotone as ArrowsLeftRightBoldDuotoneIcon, ArrowsLeftRightBoldDuotone as SiArrowsLeftRightBoldDuotone };
export default ArrowsLeftRightBoldDuotone;
export type { ArrowsLeftRightBoldDuotoneProps };
