import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparklesFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparklesFillDuotone = memo(
  forwardRef<SVGSVGElement, SparklesFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.5 4.13c.39 0 .72.25.84.62l.74 2.43a7.1 7.1 0 0 0 4.74 4.74l2.43.74a.87.87 0 0 1 0 1.68l-2.43.74a7.1 7.1 0 0 0-4.74 4.74l-.74 2.43a.87.87 0 0 1-1.68 0l-.74-2.43a7.1 7.1 0 0 0-4.74-4.74l-2.43-.74a.87.87 0 0 1 0-1.68l2.43-.74a7.1 7.1 0 0 0 4.74-4.74l.74-2.43.05-.14c.15-.3.45-.49.79-.49" />
        <path d="M18.88 1.4c.04-.13.2-.13.24 0l.2.63a4 4 0 0 0 2.65 2.66l.64.19c.12.04.12.2 0 .24l-.64.2a4 4 0 0 0-2.66 2.65l-.2.64a.13.13 0 0 1-.23 0l-.2-.64a4 4 0 0 0-2.65-2.66l-.64-.2a.13.13 0 0 1 0-.23l.64-.2a4 4 0 0 0 2.66-2.65z" opacity={.4} />
    </IconBase>
  ))
);

SparklesFillDuotone.displayName = 'SparklesFillDuotone';

// Triple export pattern (lucide-react style)
export { SparklesFillDuotone, SparklesFillDuotone as SparklesFillDuotoneIcon, SparklesFillDuotone as SiSparklesFillDuotone };
export default SparklesFillDuotone;
export type { SparklesFillDuotoneProps };
