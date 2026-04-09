import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronDownFill = memo(
  forwardRef<SVGSVGElement, ChevronDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-down-fill" {...props}>
      <path d="M19 8.13a.88.88 0 0 1 .62 1.49l-7 7a.9.9 0 0 1-1.24 0l-7-7A.88.88 0 0 1 5 8.12z" />
    </IconBase>
  ))
);

ChevronDownFill.displayName = 'ChevronDownFill';

// Triple export pattern (lucide-react style)
export { ChevronDownFill, ChevronDownFill as ChevronDownFillIcon, ChevronDownFill as SiChevronDownFill };
export default ChevronDownFill;
export type { ChevronDownFillProps };
