import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.62 17.38c.34.34.34.9 0 1.24s-.9.34-1.24 0l-6.88-6.88 1.24-1.24z" opacity={.4} />
        <path d="M15 5.13c.35 0 .67.2.8.54.14.32.07.7-.18.95l-9 9c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81V6c0-.48.39-.87.87-.87z" />
    </IconBase>
  ))
);

ArrowUpLeftFillDuotone.displayName = 'ArrowUpLeftFillDuotone';

// Triple export pattern
export { ArrowUpLeftFillDuotone, ArrowUpLeftFillDuotone as ArrowUpLeftFillDuotoneIcon, ArrowUpLeftFillDuotone as SiArrowUpLeftFillDuotone };
export default ArrowUpLeftFillDuotone;
export type { ArrowUpLeftFillDuotoneProps };
