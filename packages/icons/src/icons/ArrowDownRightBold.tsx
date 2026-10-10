import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightBold = memo(
  forwardRef<SVGSVGElement, ArrowDownRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.3 5.3c.38-.4 1.02-.4 1.4 0L17 15.58V8c0-.55.45-1 1-1s1 .45 1 1v10c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1h7.59L5.29 6.7c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ArrowDownRightBold.displayName = 'ArrowDownRightBold';

// Triple export pattern
export { ArrowDownRightBold, ArrowDownRightBold as ArrowDownRightBoldIcon, ArrowDownRightBold as SiArrowDownRightBold };
export default ArrowDownRightBold;
export type { ArrowDownRightBoldProps };
