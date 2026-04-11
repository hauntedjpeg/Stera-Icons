import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronOutwardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronOutwardFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronOutwardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.38 1.38a.9.9 0 0 1 1.24 0l6 6a.88.88 0 0 1-.62 1.5H6a.88.88 0 0 1-.62-1.5z" />
        <path d="M18 15.13a.88.88 0 0 1 .62 1.49l-6 6a.9.9 0 0 1-1.24 0l-6-6a.88.88 0 0 1 .62-1.5z" opacity={.4} />
    </IconBase>
  ))
);

ChevronOutwardFillDuotone.displayName = 'ChevronOutwardFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronOutwardFillDuotone, ChevronOutwardFillDuotone as ChevronOutwardFillDuotoneIcon, ChevronOutwardFillDuotone as SiChevronOutwardFillDuotone };
export default ChevronOutwardFillDuotone;
export type { ChevronOutwardFillDuotoneProps };
