import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullInwardFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullInwardFill = memo(
  forwardRef<SVGSVGElement, ChevronFullInwardFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.38 14.38a.9.9 0 0 1 1.24 0l6 6a.88.88 0 0 1-.62 1.5H6a.88.88 0 0 1-.62-1.5zM18 2.13a.88.88 0 0 1 .62 1.49l-6 6a.9.9 0 0 1-1.24 0l-6-6A.88.88 0 0 1 6 2.12z" />
    </IconBase>
  ))
);

ChevronFullInwardFill.displayName = 'ChevronFullInwardFill';

// Triple export pattern (lucide-react style)
export { ChevronFullInwardFill, ChevronFullInwardFill as ChevronFullInwardFillIcon, ChevronFullInwardFill as SiChevronFullInwardFill };
export default ChevronFullInwardFill;
export type { ChevronFullInwardFillProps };
