import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightBold = memo(
  forwardRef<SVGSVGElement, ArrowUpRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 5c-.55 0-1 .45-1 1s.45 1 1 1h7.59L5.29 17.3c-.39.38-.39 1.02 0 1.4.4.4 1.03.4 1.42 0L17 8.42V16c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1z" />
    </IconBase>
  ))
);

ArrowUpRightBold.displayName = 'ArrowUpRightBold';

// Triple export pattern
export { ArrowUpRightBold, ArrowUpRightBold as ArrowUpRightBoldIcon, ArrowUpRightBold as SiArrowUpRightBold };
export default ArrowUpRightBold;
export type { ArrowUpRightBoldProps };
