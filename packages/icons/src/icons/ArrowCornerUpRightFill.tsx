import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-right-fill" {...props}>
      <path d="M15.67 3.2c.32-.14.7-.07.95.18l4 4 .06.07a.9.9 0 0 1-.06 1.17l-4 4a.88.88 0 0 1-1.5-.62V8.87H8c-1.17 0-2.12.96-2.12 2.13v8a.87.87 0 1 1-1.75 0v-8A3.9 3.9 0 0 1 8 7.12h7.13V4c0-.35.2-.67.53-.8" />
    </IconBase>
  ))
);

ArrowCornerUpRightFill.displayName = 'ArrowCornerUpRightFill';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpRightFill, ArrowCornerUpRightFill as ArrowCornerUpRightFillIcon, ArrowCornerUpRightFill as SiArrowCornerUpRightFill };
export default ArrowCornerUpRightFill;
export type { ArrowCornerUpRightFillProps };
