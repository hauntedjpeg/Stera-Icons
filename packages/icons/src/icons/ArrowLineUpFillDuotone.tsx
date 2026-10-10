import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 2.13c.48 0 .88.39.88.87s-.4.88-.88.88H4c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" opacity={.4} />
        <path d="M11 6.76c.56-.55 1.44-.55 2 0l5.85 5.85c.83.84.24 2.26-.94 2.26h-5.03V21c0 .48-.4.87-.88.87s-.87-.39-.87-.87v-6.13H6.09c-1.18 0-1.77-1.42-.94-2.26z" />
    </IconBase>
  ))
);

ArrowLineUpFillDuotone.displayName = 'ArrowLineUpFillDuotone';

// Triple export pattern
export { ArrowLineUpFillDuotone, ArrowLineUpFillDuotone as ArrowLineUpFillDuotoneIcon, ArrowLineUpFillDuotone as SiArrowLineUpFillDuotone };
export default ArrowLineUpFillDuotone;
export type { ArrowLineUpFillDuotoneProps };
