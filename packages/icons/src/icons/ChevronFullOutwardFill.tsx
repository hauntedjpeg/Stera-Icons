import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullOutwardFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullOutwardFill = memo(
  forwardRef<SVGSVGElement, ChevronFullOutwardFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 15.12a.88.88 0 0 1 .62 1.5l-6 6a.9.9 0 0 1-1.24 0l-6-6a.88.88 0 0 1 .62-1.5zM11.38 1.38a.9.9 0 0 1 1.24 0l6 6a.88.88 0 0 1-.62 1.5H6a.88.88 0 0 1-.62-1.5z" />
    </IconBase>
  ))
);

ChevronFullOutwardFill.displayName = 'ChevronFullOutwardFill';

// Triple export pattern (lucide-react style)
export { ChevronFullOutwardFill, ChevronFullOutwardFill as ChevronFullOutwardFillIcon, ChevronFullOutwardFill as SiChevronFullOutwardFill };
export default ChevronFullOutwardFill;
export type { ChevronFullOutwardFillProps };
