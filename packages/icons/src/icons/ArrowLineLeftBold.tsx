import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowLineLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowLineLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 3c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1s-1-.45-1-1V4c0-.55.45-1 1-1M13.3 4.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L9.42 11H21c.55 0 1 .45 1 1s-.45 1-1 1H9.41l5.3 5.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-7-7c-.39-.38-.39-1.02 0-1.4z" />
    </IconBase>
  ))
);

ArrowLineLeftBold.displayName = 'ArrowLineLeftBold';

// Triple export pattern
export { ArrowLineLeftBold, ArrowLineLeftBold as ArrowLineLeftBoldIcon, ArrowLineLeftBold as SiArrowLineLeftBold };
export default ArrowLineLeftBold;
export type { ArrowLineLeftBoldProps };
