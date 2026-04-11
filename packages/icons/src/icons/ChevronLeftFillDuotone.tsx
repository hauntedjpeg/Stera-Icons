import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.13 16.89 9.23 12l4.9-4.89z" opacity={.4} />
        <path fillRule="evenodd" d="M14.38 4.38a.88.88 0 0 1 1.5.62v14a.88.88 0 0 1-1.5.62l-7-7a.9.9 0 0 1 0-1.24zM9.24 12l4.89 4.89V7.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronLeftFillDuotone.displayName = 'ChevronLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronLeftFillDuotone, ChevronLeftFillDuotone as ChevronLeftFillDuotoneIcon, ChevronLeftFillDuotone as SiChevronLeftFillDuotone };
export default ChevronLeftFillDuotone;
export type { ChevronLeftFillDuotoneProps };
