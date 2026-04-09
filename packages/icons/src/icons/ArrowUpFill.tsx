import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpFill = memo(
  forwardRef<SVGSVGElement, ArrowUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-fill" {...props}>
      <path d="M12 4.13q.36 0 .62.25l6 6a.88.88 0 0 1-.62 1.5h-5.13V19a.87.87 0 1 1-1.75 0v-7.12H6a.88.88 0 0 1-.62-1.5l6-6a1 1 0 0 1 .62-.25" />
    </IconBase>
  ))
);

ArrowUpFill.displayName = 'ArrowUpFill';

// Triple export pattern (lucide-react style)
export { ArrowUpFill, ArrowUpFill as ArrowUpFillIcon, ArrowUpFill as SiArrowUpFill };
export default ArrowUpFill;
export type { ArrowUpFillProps };
