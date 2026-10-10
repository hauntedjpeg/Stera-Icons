import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.3 12.7c.38.4 1.02.4 1.4 0l-7 7c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l6.29-6.3z" opacity={.4} />
        <path d="M8.3 4.3c.38-.4 1.02-.4 1.4 0l7 7c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-7-7c-.4-.38-.4-1.02 0-1.4" />
    </IconBase>
  ))
);

ChevronRightBoldDuotone.displayName = 'ChevronRightBoldDuotone';

// Triple export pattern
export { ChevronRightBoldDuotone, ChevronRightBoldDuotone as ChevronRightBoldDuotoneIcon, ChevronRightBoldDuotone as SiChevronRightBoldDuotone };
export default ChevronRightBoldDuotone;
export type { ChevronRightBoldDuotoneProps };
