import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleRightFill = memo(
  forwardRef<SVGSVGElement, ChevronCircleRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M2.13 12c0-5.45 4.42-9.87 9.87-9.87s9.88 4.42 9.88 9.87-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12m7.75-4.62c-.34.34-.34.9 0 1.24L13.26 12l-3.38 3.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0l4-4q.25-.26.26-.62-.01-.36-.26-.62l-4-4c-.34-.34-.9-.34-1.24 0" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleRightFill.displayName = 'ChevronCircleRightFill';

// Triple export pattern
export { ChevronCircleRightFill, ChevronCircleRightFill as ChevronCircleRightFillIcon, ChevronCircleRightFill as SiChevronCircleRightFill };
export default ChevronCircleRightFill;
export type { ChevronCircleRightFillProps };
