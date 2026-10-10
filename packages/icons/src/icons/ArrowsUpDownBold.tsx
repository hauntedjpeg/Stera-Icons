import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsUpDownBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowsUpDownBold = memo(
  forwardRef<SVGSVGElement, ArrowsUpDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 3c.55 0 1 .45 1 1v15.59l2.3-2.3c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-4 4c-.36.36-.94.39-1.33.07l-.08-.07-4-4c-.39-.4-.39-1.03 0-1.42.4-.39 1.03-.39 1.42 0L16 19.6V4c0-.55.45-1 1-1M7 2q.42 0 .7.3l4 4c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L8 5.42V21c0 .55-.45 1-1 1s-1-.45-1-1V5.41l-2.3 2.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l4-4 .07-.06Q6.64 2 7 2" />
    </IconBase>
  ))
);

ArrowsUpDownBold.displayName = 'ArrowsUpDownBold';

// Triple export pattern
export { ArrowsUpDownBold, ArrowsUpDownBold as ArrowsUpDownBoldIcon, ArrowsUpDownBold as SiArrowsUpDownBold };
export default ArrowsUpDownBold;
export type { ArrowsUpDownBoldProps };
