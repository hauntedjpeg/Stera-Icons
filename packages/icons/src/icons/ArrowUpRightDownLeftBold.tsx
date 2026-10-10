import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightDownLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightDownLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowUpRightDownLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 3c.55 0 1 .45 1 1v6.5c0 .55-.45 1-1 1s-1-.45-1-1V6.41L6.41 19h4.09c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1v-6.5c0-.55.45-1 1-1s1 .45 1 1v4.09L17.59 5H13.5c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ArrowUpRightDownLeftBold.displayName = 'ArrowUpRightDownLeftBold';

// Triple export pattern
export { ArrowUpRightDownLeftBold, ArrowUpRightDownLeftBold as ArrowUpRightDownLeftBoldIcon, ArrowUpRightDownLeftBold as SiArrowUpRightDownLeftBold };
export default ArrowUpRightDownLeftBold;
export type { ArrowUpRightDownLeftBoldProps };
