import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortFillProps = Omit<IconBaseProps, 'children'>;

const SortFill = memo(
  forwardRef<SVGSVGElement, SortFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sort-fill" {...props}>
      <path d="M6 3.13c.48 0 .87.39.87.87v11.13H10a.88.88 0 0 1 .62 1.49l-4 4-.07.06-.11.08h-.01a1 1 0 0 1-.27.1h-.03a1 1 0 0 1-.3 0 1 1 0 0 1-.45-.24l-4-4a.88.88 0 0 1 .62-1.5h3.12V4c0-.48.4-.87.88-.87" />
        <path d="M16 11.13a.87.87 0 1 1 0 1.74h-6a.88.88 0 0 1 0-1.74zM19 7.13a.87.87 0 1 1 0 1.75h-9a.88.88 0 0 1 0-1.76zM22 3.13a.87.87 0 1 1 0 1.75H10a.88.88 0 0 1 0-1.75z" />
    </IconBase>
  ))
);

SortFill.displayName = 'SortFill';

// Triple export pattern (lucide-react style)
export { SortFill, SortFill as SortFillIcon, SortFill as SiSortFill };
export default SortFill;
export type { SortFillProps };
