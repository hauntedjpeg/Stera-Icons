import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleRightFill = memo(
  forwardRef<SVGSVGElement, ChevronCircleRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-right-fill" {...props}>
      <path fillRule="evenodd" d="M2.13 12a9.88 9.88 0 1 1 19.75 0 9.88 9.88 0 0 1-19.75 0m7.75-4.62a.9.9 0 0 0 0 1.24L13.26 12l-3.38 3.38a.88.88 0 0 0 1.24 1.24l4-4a.9.9 0 0 0 0-1.24l-4-4a.9.9 0 0 0-1.24 0" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleRightFill.displayName = 'ChevronCircleRightFill';

// Triple export pattern (lucide-react style)
export { ChevronCircleRightFill, ChevronCircleRightFill as ChevronCircleRightFillIcon, ChevronCircleRightFill as SiChevronCircleRightFill };
export default ChevronCircleRightFill;
export type { ChevronCircleRightFillProps };
