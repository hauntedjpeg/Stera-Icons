import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 5q0 .4.3.7L10 7.42v9.18l-1.7 1.7Q8 18.6 8 19z" opacity={.4} />
        <path d="M8.3 4.3c.38-.4 1.02-.4 1.4 0l7 7c.4.38.4 1.02 0 1.4l-7 7c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l6.29-6.3-6.3-6.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ChevronFullRightBoldDuotone.displayName = 'ChevronFullRightBoldDuotone';

// Triple export pattern
export { ChevronFullRightBoldDuotone, ChevronFullRightBoldDuotone as ChevronFullRightBoldDuotoneIcon, ChevronFullRightBoldDuotone as SiChevronFullRightBoldDuotone };
export default ChevronFullRightBoldDuotone;
export type { ChevronFullRightBoldDuotoneProps };
