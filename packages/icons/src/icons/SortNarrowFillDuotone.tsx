import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortNarrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SortNarrowFillDuotone = memo(
  forwardRef<SVGSVGElement, SortNarrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sort-narrow-fill-duotone" {...props}>
      <path d="M22 11.13a.88.88 0 0 1 0 1.74H10a.88.88 0 0 1 0-1.74zM19 7.13a.88.88 0 0 1 0 1.75h-9a.87.87 0 1 1 0-1.76zM16 3.13a.88.88 0 0 1 0 1.75h-6a.87.87 0 1 1 0-1.75z" opacity={0.4} />
        <path d="M6 3.13c.48 0 .87.39.87.87v11.13H10a.88.88 0 0 1 .62 1.49l-4 4-.07.06-.11.08h-.01a1 1 0 0 1-.27.1h-.03a1 1 0 0 1-.3 0 1 1 0 0 1-.45-.24l-4-4a.88.88 0 0 1 .62-1.5h3.12V4c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

SortNarrowFillDuotone.displayName = 'SortNarrowFillDuotone';

// Triple export pattern (lucide-react style)
export { SortNarrowFillDuotone, SortNarrowFillDuotone as SortNarrowFillDuotoneIcon, SortNarrowFillDuotone as SiSortNarrowFillDuotone };
export default SortNarrowFillDuotone;
export type { SortNarrowFillDuotoneProps };
