import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronCircleLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21.88 12a9.88 9.88 0 1 1-19.76 0 9.88 9.88 0 0 1 19.76 0m-7.76 4.62a.9.9 0 0 0 0-1.24L10.74 12l3.38-3.38a.88.88 0 0 0-1.24-1.24l-4 4a.9.9 0 0 0 0 1.24l4 4c.34.34.9.34 1.24 0" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleLeftFill.displayName = 'ChevronCircleLeftFill';

// Triple export pattern (lucide-react style)
export { ChevronCircleLeftFill, ChevronCircleLeftFill as ChevronCircleLeftFillIcon, ChevronCircleLeftFill as SiChevronCircleLeftFill };
export default ChevronCircleLeftFill;
export type { ChevronCircleLeftFillProps };
