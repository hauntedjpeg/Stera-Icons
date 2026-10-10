import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineUpBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowLineUpBold = memo(
  forwardRef<SVGSVGElement, ArrowLineUpBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 3c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1M4.3 13.3c-.4.38-.4 1.02 0 1.4.38.4 1.02.4 1.4 0L11 9.42V21c0 .55.45 1 1 1s1-.45 1-1V9.41l5.3 5.3c.38.39 1.02.39 1.4 0 .4-.4.4-1.03 0-1.42l-7-7c-.38-.39-1.02-.39-1.4 0z" />
    </IconBase>
  ))
);

ArrowLineUpBold.displayName = 'ArrowLineUpBold';

// Triple export pattern
export { ArrowLineUpBold, ArrowLineUpBold as ArrowLineUpBoldIcon, ArrowLineUpBold as SiArrowLineUpBold };
export default ArrowLineUpBold;
export type { ArrowLineUpBoldProps };
