import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleUpFill = memo(
  forwardRef<SVGSVGElement, ChevronCircleUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 21.88a9.88 9.88 0 1 1 0-19.76 9.88 9.88 0 0 1 0 19.76m-4.62-7.76c.34.34.9.34 1.24 0L12 10.74l3.38 3.38a.88.88 0 0 0 1.24-1.24l-4-4a.9.9 0 0 0-1.24 0l-4 4a.9.9 0 0 0 0 1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleUpFill.displayName = 'ChevronCircleUpFill';

// Triple export pattern (lucide-react style)
export { ChevronCircleUpFill, ChevronCircleUpFill as ChevronCircleUpFillIcon, ChevronCircleUpFill as SiChevronCircleUpFill };
export default ChevronCircleUpFill;
export type { ChevronCircleUpFillProps };
