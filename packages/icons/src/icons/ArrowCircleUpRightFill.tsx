import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-right-fill" {...props}>
      <path fillRule="evenodd" d="M5.02 18.98A9.88 9.88 0 1 1 18.98 5.02 9.88 9.88 0 0 1 5.02 18.98m3.53-3.53c.34.34.9.34 1.24 0l4.16-4.17v3.55a.88.88 0 0 0 1.75 0V9.17a.9.9 0 0 0-.87-.87H9.17a.88.88 0 0 0 0 1.75h3.55L8.55 14.2a.87.87 0 0 0 0 1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpRightFill.displayName = 'ArrowCircleUpRightFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpRightFill, ArrowCircleUpRightFill as ArrowCircleUpRightFillIcon, ArrowCircleUpRightFill as SiArrowCircleUpRightFill };
export default ArrowCircleUpRightFill;
export type { ArrowCircleUpRightFillProps };
