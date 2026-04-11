import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.38 4.38a.88.88 0 0 1 1.5.62v14a.88.88 0 0 1-1.5.62l-7-7a.9.9 0 0 1 0-1.24z" />
    </IconBase>
  ))
);

ChevronLeftFill.displayName = 'ChevronLeftFill';

// Triple export pattern (lucide-react style)
export { ChevronLeftFill, ChevronLeftFill as ChevronLeftFillIcon, ChevronLeftFill as SiChevronLeftFill };
export default ChevronLeftFill;
export type { ChevronLeftFillProps };
