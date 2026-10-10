import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m2.12 5.25c-.34-.34-.9-.34-1.24 0l-4 4q-.24.26-.26.62.01.36.26.62l4 4c.34.34.9.34 1.24 0s.34-.9 0-1.24L10.74 12l3.38-3.38c.34-.34.34-.9 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M12.88 7.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24L10.74 12l3.38 3.38c.34.34.34.9 0 1.24s-.9.34-1.24 0l-4-4q-.25-.27-.26-.62.01-.36.26-.62z" />
    </IconBase>
  ))
);

ChevronCircleLeftFillDuotone.displayName = 'ChevronCircleLeftFillDuotone';

// Triple export pattern
export { ChevronCircleLeftFillDuotone, ChevronCircleLeftFillDuotone as ChevronCircleLeftFillDuotoneIcon, ChevronCircleLeftFillDuotone as SiChevronCircleLeftFillDuotone };
export default ChevronCircleLeftFillDuotone;
export type { ChevronCircleLeftFillDuotoneProps };
