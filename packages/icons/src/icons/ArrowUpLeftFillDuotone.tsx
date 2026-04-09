import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-left-fill-duotone" {...props}>
      <path d="M18.62 17.38a.88.88 0 0 1-1.24 1.24l-6.88-6.88 1.24-1.24z" opacity={.4} />
        <path d="M15 5.13a.88.88 0 0 1 .62 1.49l-9 9a.88.88 0 0 1-1.5-.62V6c0-.48.4-.87.88-.87z" />
    </IconBase>
  ))
);

ArrowUpLeftFillDuotone.displayName = 'ArrowUpLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpLeftFillDuotone, ArrowUpLeftFillDuotone as ArrowUpLeftFillDuotoneIcon, ArrowUpLeftFillDuotone as SiArrowUpLeftFillDuotone };
export default ArrowUpLeftFillDuotone;
export type { ArrowUpLeftFillDuotoneProps };
