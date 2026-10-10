import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m-.88 5.25c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24L13.26 12l-3.38 3.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0l4-4q.24-.27.25-.62 0-.36-.25-.62z" clipRule="evenodd" opacity={.4} />
        <path d="M9.88 7.38c.34-.34.9-.34 1.24 0l4 4q.24.26.25.62 0 .36-.25.62l-4 4c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24L13.26 12 9.88 8.62c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

ChevronCircleRightFillDuotone.displayName = 'ChevronCircleRightFillDuotone';

// Triple export pattern
export { ChevronCircleRightFillDuotone, ChevronCircleRightFillDuotone as ChevronCircleRightFillDuotoneIcon, ChevronCircleRightFillDuotone as SiChevronCircleRightFillDuotone };
export default ChevronCircleRightFillDuotone;
export type { ChevronCircleRightFillDuotoneProps };
