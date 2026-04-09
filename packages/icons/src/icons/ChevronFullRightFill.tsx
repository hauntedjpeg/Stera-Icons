import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullRightFill = memo(
  forwardRef<SVGSVGElement, ChevronFullRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-right-fill" {...props}>
      <path d="M8.67 4.2c.32-.14.7-.07.95.18l7 7a.9.9 0 0 1 0 1.24l-7 7a.88.88 0 0 1-1.5-.62V5c0-.35.22-.67.55-.8" />
    </IconBase>
  ))
);

ChevronFullRightFill.displayName = 'ChevronFullRightFill';

// Triple export pattern (lucide-react style)
export { ChevronFullRightFill, ChevronFullRightFill as ChevronFullRightFillIcon, ChevronFullRightFill as SiChevronFullRightFill };
export default ChevronFullRightFill;
export type { ChevronFullRightFillProps };
