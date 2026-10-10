import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowUpBold = memo(
  forwardRef<SVGSVGElement, ArrowUpBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.3 12.7c-.4-.38-.4-1.02 0-1.4l7-7c.38-.4 1.02-.4 1.4 0l7 7c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L13 7.42V19c0 .55-.45 1-1 1s-1-.45-1-1V7.41l-5.3 5.3c-.38.39-1.02.39-1.4 0" />
    </IconBase>
  ))
);

ArrowUpBold.displayName = 'ArrowUpBold';

// Triple export pattern
export { ArrowUpBold, ArrowUpBold as ArrowUpBoldIcon, ArrowUpBold as SiArrowUpBold };
export default ArrowUpBold;
export type { ArrowUpBoldProps };
