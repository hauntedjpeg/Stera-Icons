import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.38 5.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-6.88 6.88 3.88 3.88c.25.25.32.63.19.95-.14.33-.46.54-.81.54H6c-.48 0-.87-.39-.87-.87V9c0-.35.2-.67.54-.8.32-.14.7-.07.95.18l3.88 3.88z" />
    </IconBase>
  ))
);

ArrowDownLeftFill.displayName = 'ArrowDownLeftFill';

// Triple export pattern
export { ArrowDownLeftFill, ArrowDownLeftFill as ArrowDownLeftFillIcon, ArrowDownLeftFill as SiArrowDownLeftFill };
export default ArrowDownLeftFill;
export type { ArrowDownLeftFillProps };
