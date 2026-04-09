import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullDownFill = memo(
  forwardRef<SVGSVGElement, ChevronFullDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-down-fill" {...props}>
      <path d="M19 8.13a.88.88 0 0 1 .62 1.49l-7 7a.9.9 0 0 1-1.24 0l-7-7A.88.88 0 0 1 5 8.12z" />
    </IconBase>
  ))
);

ChevronFullDownFill.displayName = 'ChevronFullDownFill';

// Triple export pattern (lucide-react style)
export { ChevronFullDownFill, ChevronFullDownFill as ChevronFullDownFillIcon, ChevronFullDownFill as SiChevronFullDownFill };
export default ChevronFullDownFill;
export type { ChevronFullDownFillProps };
