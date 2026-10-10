import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronCircleLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21.88 12c0 5.45-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13s9.88 4.42 9.88 9.87m-7.76 4.62c.34-.34.34-.9 0-1.24L10.74 12l3.38-3.38c.34-.34.34-.9 0-1.24s-.9-.34-1.24 0l-4 4q-.25.26-.26.62.01.36.26.62l4 4c.34.34.9.34 1.24 0" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleLeftFill.displayName = 'ChevronCircleLeftFill';

// Triple export pattern
export { ChevronCircleLeftFill, ChevronCircleLeftFill as ChevronCircleLeftFillIcon, ChevronCircleLeftFill as SiChevronCircleLeftFill };
export default ChevronCircleLeftFill;
export type { ChevronCircleLeftFillProps };
