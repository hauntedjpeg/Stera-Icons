import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronRightFill = memo(
  forwardRef<SVGSVGElement, ChevronRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.67 4.2c.32-.14.7-.07.95.18l7 7a.9.9 0 0 1 0 1.24l-7 7a.88.88 0 0 1-1.5-.62V5c0-.35.22-.67.55-.8" />
    </IconBase>
  ))
);

ChevronRightFill.displayName = 'ChevronRightFill';

// Triple export pattern (lucide-react style)
export { ChevronRightFill, ChevronRightFill as ChevronRightFillIcon, ChevronRightFill as SiChevronRightFill };
export default ChevronRightFill;
export type { ChevronRightFillProps };
