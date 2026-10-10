import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRightBold = memo(
  forwardRef<SVGSVGElement, ArrowLeftRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.8 6.8c.38-.4 1.02-.4 1.4 0l4.5 4.5q.3.28.3.7 0 .36-.23.63l-.06.08-4.5 4.5c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42L19.6 13H4.4l2.8 2.8c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-4.5-4.5-.07-.07c-.32-.4-.3-.97.07-1.34l4.5-4.5c.4-.39 1.03-.39 1.42 0 .39.4.39 1.03 0 1.42L4.4 11H19.6l-2.8-2.8c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ArrowLeftRightBold.displayName = 'ArrowLeftRightBold';

// Triple export pattern
export { ArrowLeftRightBold, ArrowLeftRightBold as ArrowLeftRightBoldIcon, ArrowLeftRightBold as SiArrowLeftRightBold };
export default ArrowLeftRightBold;
export type { ArrowLeftRightBoldProps };
