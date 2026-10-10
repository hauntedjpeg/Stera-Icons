import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 4.41V19.6l-1 1-1-1V4.4l1-1z" opacity={.4} />
        <path d="M15.8 16.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-4.5 4.5c-.36.37-.94.4-1.33.08l-.08-.07-4.5-4.5c-.39-.4-.39-1.03 0-1.42.4-.39 1.03-.39 1.42 0L12 20.6zM12 1q.42 0 .7.3l4.5 4.5c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L12 3.42l-3.8 3.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l4.5-4.5.07-.06Q11.64 1 12 1" />
    </IconBase>
  ))
);

ArrowUpDownBoldDuotone.displayName = 'ArrowUpDownBoldDuotone';

// Triple export pattern
export { ArrowUpDownBoldDuotone, ArrowUpDownBoldDuotone as ArrowUpDownBoldDuotoneIcon, ArrowUpDownBoldDuotone as SiArrowUpDownBoldDuotone };
export default ArrowUpDownBoldDuotone;
export type { ArrowUpDownBoldDuotoneProps };
