import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortAscendingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SortAscendingFillDuotone = memo(
  forwardRef<SVGSVGElement, SortAscendingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sort-ascending-fill-duotone" {...props}>
      <path d="M16 19.13a.88.88 0 0 1 0 1.75h-6a.88.88 0 0 1 0-1.75zM19 15.13a.88.88 0 0 1 0 1.74h-9a.88.88 0 0 1 0-1.75zM22 11.13a.88.88 0 0 1 0 1.74H10a.88.88 0 0 1 0-1.74z" opacity={0.4} />
        <path d="M6 3.13h.13l.03.01q.14.03.27.1.07.03.12.08l.07.06 4 4a.88.88 0 0 1-.62 1.5H6.87V20a.88.88 0 0 1-1.75 0V8.88H2a.88.88 0 0 1-.62-1.5l4-4A1 1 0 0 1 6 3.13" />
    </IconBase>
  ))
);

SortAscendingFillDuotone.displayName = 'SortAscendingFillDuotone';

// Triple export pattern (lucide-react style)
export { SortAscendingFillDuotone, SortAscendingFillDuotone as SortAscendingFillDuotoneIcon, SortAscendingFillDuotone as SiSortAscendingFillDuotone };
export default SortAscendingFillDuotone;
export type { SortAscendingFillDuotoneProps };
