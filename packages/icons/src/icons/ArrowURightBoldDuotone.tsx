import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 4c.55 0 1 .45 1 1s-.45 1-1 1h-4.5C8.01 6 6 8.01 6 10.5S8.01 15 10.5 15h7.09l1 1-1 1H10.5C6.91 17 4 14.09 4 10.5S6.91 4 10.5 4z" opacity={.4} />
        <path d="M15.3 11.3c.38-.4 1.02-.4 1.4 0l4 4q.3.28.3.7 0 .36-.23.63l-.06.08-4 4c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42L18.6 16l-3.3-3.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ArrowURightBoldDuotone.displayName = 'ArrowURightBoldDuotone';

// Triple export pattern
export { ArrowURightBoldDuotone, ArrowURightBoldDuotone as ArrowURightBoldDuotoneIcon, ArrowURightBoldDuotone as SiArrowURightBoldDuotone };
export default ArrowURightBoldDuotone;
export type { ArrowURightBoldDuotoneProps };
