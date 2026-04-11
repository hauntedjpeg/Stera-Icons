import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortAscendingFillProps = Omit<IconBaseProps, 'children'>;

const SortAscendingFill = memo(
  forwardRef<SVGSVGElement, SortAscendingFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 3.13h.13l.03.01q.14.03.27.1.07.03.12.08l.07.06 4 4a.88.88 0 0 1-.62 1.5H6.87V20a.88.88 0 0 1-1.75 0V8.88H2a.88.88 0 0 1-.62-1.5l4-4A1 1 0 0 1 6 3.13M16 19.13a.87.87 0 1 1 0 1.75h-6a.88.88 0 0 1 0-1.75zM19 15.13a.87.87 0 1 1 0 1.74h-9a.88.88 0 0 1 0-1.75z" />
        <path d="M22 11.13a.87.87 0 1 1 0 1.74H10a.88.88 0 0 1 0-1.74z" />
    </IconBase>
  ))
);

SortAscendingFill.displayName = 'SortAscendingFill';

// Triple export pattern (lucide-react style)
export { SortAscendingFill, SortAscendingFill as SortAscendingFillIcon, SortAscendingFill as SiSortAscendingFill };
export default SortAscendingFill;
export type { SortAscendingFillProps };
