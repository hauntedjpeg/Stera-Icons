import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-left-fill" {...props}>
      <path d="M10.38 5.38a.88.88 0 0 1 1.5.62v5.12H19a.88.88 0 0 1 0 1.75h-7.12V18a.88.88 0 0 1-1.5.62l-6-6-.1-.13-.03-.04a.9.9 0 0 1 .13-1.07z" />
    </IconBase>
  ))
);

ArrowLeftFill.displayName = 'ArrowLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowLeftFill, ArrowLeftFill as ArrowLeftFillIcon, ArrowLeftFill as SiArrowLeftFill };
export default ArrowLeftFill;
export type { ArrowLeftFillProps };
