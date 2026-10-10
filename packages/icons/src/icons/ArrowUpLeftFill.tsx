import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 5.13c.35 0 .67.2.8.54.14.32.07.7-.18.95l-3.88 3.88 6.88 6.88c.34.34.34.9 0 1.24s-.9.34-1.24 0l-6.88-6.88-3.88 3.88c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81V6q0-.36.25-.62.26-.25.62-.25z" />
    </IconBase>
  ))
);

ArrowUpLeftFill.displayName = 'ArrowUpLeftFill';

// Triple export pattern
export { ArrowUpLeftFill, ArrowUpLeftFill as ArrowUpLeftFillIcon, ArrowUpLeftFill as SiArrowUpLeftFill };
export default ArrowUpLeftFill;
export type { ArrowUpLeftFillProps };
