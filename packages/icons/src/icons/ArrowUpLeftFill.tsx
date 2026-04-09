import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-left-fill" {...props}>
      <path d="M15 5.13a.88.88 0 0 1 .62 1.49l-3.88 3.88 6.88 6.88a.88.88 0 0 1-1.24 1.24l-6.88-6.88-3.88 3.88a.88.88 0 0 1-1.5-.62V6A.9.9 0 0 1 6 5.13z" />
    </IconBase>
  ))
);

ArrowUpLeftFill.displayName = 'ArrowUpLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowUpLeftFill, ArrowUpLeftFill as ArrowUpLeftFillIcon, ArrowUpLeftFill as SiArrowUpLeftFill };
export default ArrowUpLeftFill;
export type { ArrowUpLeftFillProps };
