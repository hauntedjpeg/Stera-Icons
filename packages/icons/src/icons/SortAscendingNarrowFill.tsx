import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortAscendingNarrowFillProps = Omit<IconBaseProps, 'children'>;

const SortAscendingNarrowFill = memo(
  forwardRef<SVGSVGElement, SortAscendingNarrowFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sort-ascending-narrow-fill" {...props}>
      <path d="M6 3.13h.13l.03.01q.14.03.27.1.07.03.12.08l.07.06 4 4a.88.88 0 0 1-.62 1.5H6.87V20a.88.88 0 0 1-1.75 0V8.88H2a.88.88 0 0 1-.62-1.5l4-4A1 1 0 0 1 6 3.13M22 19.13a.87.87 0 1 1 0 1.75H10a.88.88 0 0 1 0-1.75zM19 15.13a.87.87 0 1 1 0 1.74h-9a.88.88 0 0 1 0-1.75z" />
        <path d="M16 11.13a.87.87 0 1 1 0 1.74h-6a.88.88 0 0 1 0-1.74z" />
    </IconBase>
  ))
);

SortAscendingNarrowFill.displayName = 'SortAscendingNarrowFill';

// Triple export pattern (lucide-react style)
export { SortAscendingNarrowFill, SortAscendingNarrowFill as SortAscendingNarrowFillIcon, SortAscendingNarrowFill as SiSortAscendingNarrowFill };
export default SortAscendingNarrowFill;
export type { SortAscendingNarrowFillProps };
