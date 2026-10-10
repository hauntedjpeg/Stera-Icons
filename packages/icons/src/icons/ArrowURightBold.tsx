import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowURightBold = memo(
  forwardRef<SVGSVGElement, ArrowURightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 4c.55 0 1 .45 1 1s-.45 1-1 1h-4.5C8.01 6 6 8.01 6 10.5S8.01 15 10.5 15h7.09l-2.3-2.3c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l4 4q.28.28.29.7 0 .36-.23.63l-.06.08-4 4c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42L17.6 17H10.5C6.91 17 4 14.09 4 10.5S6.91 4 10.5 4z" />
    </IconBase>
  ))
);

ArrowURightBold.displayName = 'ArrowURightBold';

// Triple export pattern
export { ArrowURightBold, ArrowURightBold as ArrowURightBoldIcon, ArrowURightBold as SiArrowURightBold };
export default ArrowURightBold;
export type { ArrowURightBoldProps };
