import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-up-fill-duotone" {...props}>
      <path d="M20 2.13a.88.88 0 0 1 0 1.75H4a.87.87 0 1 1 0-1.75z" opacity={.4} />
        <path d="M11 6.76a1.4 1.4 0 0 1 2 0l5.85 5.85c.83.84.24 2.26-.94 2.26h-5.03V21a.88.88 0 0 1-1.76 0v-6.13H6.1a1.32 1.32 0 0 1-.94-2.26z" />
    </IconBase>
  ))
);

ArrowLineUpFillDuotone.displayName = 'ArrowLineUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLineUpFillDuotone, ArrowLineUpFillDuotone as ArrowLineUpFillDuotoneIcon, ArrowLineUpFillDuotone as SiArrowLineUpFillDuotone };
export default ArrowLineUpFillDuotone;
export type { ArrowLineUpFillDuotoneProps };
