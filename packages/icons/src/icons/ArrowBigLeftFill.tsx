import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowBigLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowBigLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-left-fill" {...props}>
      <path d="M12.03 2.23a1.38 1.38 0 0 1 2.34.98v3.91H19c1.04 0 1.87.84 1.87 1.88v6c0 1.04-.83 1.87-1.87 1.87h-4.63v3.92a1.38 1.38 0 0 1-2.34.98L3.77 13.5a2.13 2.13 0 0 1 0-3z" />
    </IconBase>
  ))
);

ArrowBigLeftFill.displayName = 'ArrowBigLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowBigLeftFill, ArrowBigLeftFill as ArrowBigLeftFillIcon, ArrowBigLeftFill as SiArrowBigLeftFill };
export default ArrowBigLeftFill;
export type { ArrowBigLeftFillProps };
