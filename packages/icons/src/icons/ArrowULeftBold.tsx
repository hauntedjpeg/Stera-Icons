import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftBold = memo(
  forwardRef<SVGSVGElement, ArrowULeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 4c3.59 0 6.5 2.91 6.5 6.5S17.09 17 13.5 17H6.41l2.3 2.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-4-4-.06-.07Q3 16.36 3 16q0-.42.3-.7l4-4c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L6.42 15h7.09c2.49 0 4.5-2.01 4.5-4.5S15.99 6 13.5 6H9c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ArrowULeftBold.displayName = 'ArrowULeftBold';

// Triple export pattern
export { ArrowULeftBold, ArrowULeftBold as ArrowULeftBoldIcon, ArrowULeftBold as SiArrowULeftBold };
export default ArrowULeftBold;
export type { ArrowULeftBoldProps };
