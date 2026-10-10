import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m4.62 7.75c-.34-.34-.9-.34-1.24 0L12 13.26 8.62 9.88c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l4 4q.26.24.62.25.36 0 .62-.25l4-4c.34-.34.34-.9 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M15.38 9.88c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-4 4q-.27.24-.62.25-.36 0-.62-.25l-4-4c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0L12 13.26z" />
    </IconBase>
  ))
);

ChevronCircleDownFillDuotone.displayName = 'ChevronCircleDownFillDuotone';

// Triple export pattern
export { ChevronCircleDownFillDuotone, ChevronCircleDownFillDuotone as ChevronCircleDownFillDuotoneIcon, ChevronCircleDownFillDuotone as SiChevronCircleDownFillDuotone };
export default ChevronCircleDownFillDuotone;
export type { ChevronCircleDownFillDuotoneProps };
