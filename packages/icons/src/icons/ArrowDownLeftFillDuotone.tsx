import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.38 5.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-6.88 6.88-1.24-1.24z" opacity={.4} />
        <path d="M5.67 8.2c.32-.14.7-.07.95.18l9 9c.25.25.32.63.19.95-.14.33-.46.54-.81.54H6c-.48 0-.87-.39-.87-.87V9c0-.35.2-.67.54-.8" />
    </IconBase>
  ))
);

ArrowDownLeftFillDuotone.displayName = 'ArrowDownLeftFillDuotone';

// Triple export pattern
export { ArrowDownLeftFillDuotone, ArrowDownLeftFillDuotone as ArrowDownLeftFillDuotoneIcon, ArrowDownLeftFillDuotone as SiArrowDownLeftFillDuotone };
export default ArrowDownLeftFillDuotone;
export type { ArrowDownLeftFillDuotoneProps };
