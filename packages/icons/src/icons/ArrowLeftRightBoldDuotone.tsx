import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLeftRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m20.59 12-1 1H4.4l-1-1 1-1H19.6z" opacity={.4} />
        <path d="M5.8 6.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L3.42 12l3.8 3.8c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-4.5-4.5-.07-.07c-.32-.4-.3-.97.07-1.34zM16.8 6.8c.38-.4 1.02-.4 1.4 0l4.5 4.5q.3.28.3.7 0 .36-.23.63l-.06.08-4.5 4.5c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42L20.6 12l-3.8-3.8c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ArrowLeftRightBoldDuotone.displayName = 'ArrowLeftRightBoldDuotone';

// Triple export pattern
export { ArrowLeftRightBoldDuotone, ArrowLeftRightBoldDuotone as ArrowLeftRightBoldDuotoneIcon, ArrowLeftRightBoldDuotone as SiArrowLeftRightBoldDuotone };
export default ArrowLeftRightBoldDuotone;
export type { ArrowLeftRightBoldDuotoneProps };
