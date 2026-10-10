import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightTopBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightTopBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m18.59 8-1 1H10.5C8.01 9 6 11.01 6 13.5S8.01 18 10.5 18H15c.55 0 1 .45 1 1s-.45 1-1 1h-4.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7h7.09z" opacity={.4} />
        <path d="M15.3 3.3c.38-.4 1.02-.4 1.4 0l4 4 .07.07q.23.27.23.63 0 .42-.3.7l-4 4c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4L18.58 8l-3.3-3.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ArrowURightTopBoldDuotone.displayName = 'ArrowURightTopBoldDuotone';

// Triple export pattern
export { ArrowURightTopBoldDuotone, ArrowURightTopBoldDuotone as ArrowURightTopBoldDuotoneIcon, ArrowURightTopBoldDuotone as SiArrowURightTopBoldDuotone };
export default ArrowURightTopBoldDuotone;
export type { ArrowURightTopBoldDuotoneProps };
