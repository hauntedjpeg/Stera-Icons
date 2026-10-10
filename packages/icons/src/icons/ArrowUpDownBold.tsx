import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpDownBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowUpDownBold = memo(
  forwardRef<SVGSVGElement, ArrowUpDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1q.42 0 .7.3l4.5 4.5c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L13 4.42V19.6l2.8-2.8c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-4.5 4.5c-.36.36-.94.39-1.33.07l-.08-.07-4.5-4.5c-.39-.4-.39-1.03 0-1.42.4-.39 1.03-.39 1.42 0L11 19.6V4.4l-2.8 2.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l4.5-4.5.07-.06Q11.64 1 12 1" />
    </IconBase>
  ))
);

ArrowUpDownBold.displayName = 'ArrowUpDownBold';

// Triple export pattern
export { ArrowUpDownBold, ArrowUpDownBold as ArrowUpDownBoldIcon, ArrowUpDownBold as SiArrowUpDownBold };
export default ArrowUpDownBold;
export type { ArrowUpDownBoldProps };
