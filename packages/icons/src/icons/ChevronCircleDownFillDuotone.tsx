import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m4.62 7.75a.9.9 0 0 0-1.24 0L12 13.26 8.62 9.88a.88.88 0 0 0-1.24 1.24l4 4a.9.9 0 0 0 1.24 0l4-4a.9.9 0 0 0 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M15.38 9.88a.88.88 0 0 1 1.24 1.24l-4 4a.9.9 0 0 1-1.24 0l-4-4a.88.88 0 0 1 1.24-1.24L12 13.26z" />
    </IconBase>
  ))
);

ChevronCircleDownFillDuotone.displayName = 'ChevronCircleDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleDownFillDuotone, ChevronCircleDownFillDuotone as ChevronCircleDownFillDuotoneIcon, ChevronCircleDownFillDuotone as SiChevronCircleDownFillDuotone };
export default ChevronCircleDownFillDuotone;
export type { ChevronCircleDownFillDuotoneProps };
