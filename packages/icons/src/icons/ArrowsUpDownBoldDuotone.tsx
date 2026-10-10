import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsUpDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowsUpDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowsUpDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 5.41V21c0 .55-.45 1-1 1s-1-.45-1-1V5.41l1-1zM17 3c.55 0 1 .45 1 1v15.59l-1 1-1-1V4c0-.55.45-1 1-1" opacity={0.4} />
        <path d="M20.3 17.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-4 4c-.36.37-.94.4-1.33.08l-.08-.07-4-4c-.39-.4-.39-1.03 0-1.42.4-.39 1.03-.39 1.42 0L17 20.6zM7 2q.42 0 .7.3l4 4c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L7 4.42l-3.3 3.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l4-4 .07-.06Q6.64 2 7 2" />
    </IconBase>
  ))
);

ArrowsUpDownBoldDuotone.displayName = 'ArrowsUpDownBoldDuotone';

// Triple export pattern
export { ArrowsUpDownBoldDuotone, ArrowsUpDownBoldDuotone as ArrowsUpDownBoldDuotoneIcon, ArrowsUpDownBoldDuotone as SiArrowsUpDownBoldDuotone };
export default ArrowsUpDownBoldDuotone;
export type { ArrowsUpDownBoldDuotoneProps };
