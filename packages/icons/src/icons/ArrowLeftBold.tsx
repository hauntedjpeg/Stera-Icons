import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.3 4.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L7.42 11H19c.55 0 1 .45 1 1s-.45 1-1 1H7.41l5.3 5.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-7-7c-.39-.38-.39-1.02 0-1.4z" />
    </IconBase>
  ))
);

ArrowLeftBold.displayName = 'ArrowLeftBold';

// Triple export pattern
export { ArrowLeftBold, ArrowLeftBold as ArrowLeftBoldIcon, ArrowLeftBold as SiArrowLeftBold };
export default ArrowLeftBold;
export type { ArrowLeftBoldProps };
