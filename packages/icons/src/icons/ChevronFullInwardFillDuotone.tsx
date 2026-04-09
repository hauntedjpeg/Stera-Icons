import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullInwardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullInwardFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullInwardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-inward-fill-duotone" {...props}>
      <path d="M18 2.13a.88.88 0 0 1 .62 1.49l-6 6a.9.9 0 0 1-1.24 0l-6-6A.88.88 0 0 1 6 2.12z" />
        <path d="M11.38 14.38a.9.9 0 0 1 1.24 0l6 6a.88.88 0 0 1-.62 1.5H6a.88.88 0 0 1-.62-1.5z" opacity={.4} />
    </IconBase>
  ))
);

ChevronFullInwardFillDuotone.displayName = 'ChevronFullInwardFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullInwardFillDuotone, ChevronFullInwardFillDuotone as ChevronFullInwardFillDuotoneIcon, ChevronFullInwardFillDuotone as SiChevronFullInwardFillDuotone };
export default ChevronFullInwardFillDuotone;
export type { ChevronFullInwardFillDuotoneProps };
