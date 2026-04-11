import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleDownFill = memo(
  forwardRef<SVGSVGElement, ChevronCircleDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m4.62 7.75a.9.9 0 0 0-1.24 0L12 13.26 8.62 9.88a.88.88 0 0 0-1.24 1.24l4 4a.9.9 0 0 0 1.24 0l4-4a.9.9 0 0 0 0-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleDownFill.displayName = 'ChevronCircleDownFill';

// Triple export pattern (lucide-react style)
export { ChevronCircleDownFill, ChevronCircleDownFill as ChevronCircleDownFillIcon, ChevronCircleDownFill as SiChevronCircleDownFill };
export default ChevronCircleDownFill;
export type { ChevronCircleDownFillProps };
