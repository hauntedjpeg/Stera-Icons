import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge100FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge100FillDuotone = memo(
  forwardRef<SVGSVGElement, Gauge100FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.88 4.38c1.86.18 3.56.92 4.92 2.04L16.33 7.9a.88.88 0 0 0 1.23 1.23l1.48-1.47a9 9 0 0 1 2.04 4.93H19a.87.87 0 1 0 0 1.75h2.08a9 9 0 0 1-2.38 5.32H7.04l.63-.63a.87.87 0 1 0-1.24-1.23l-1.47 1.46a9 9 0 0 1-2.04-4.92H5a.88.88 0 0 0 0-1.75H2.92a9 9 0 0 1 2.04-4.93l1.47 1.47A.88.88 0 0 0 7.67 7.9L6.2 6.42a9 9 0 0 1 4.93-2.04v2.09a.87.87 0 1 0 1.75 0zm.36 7.85a1.75 1.75 0 1 0-2.44 2.51c.38.32 1.83 1.4 3.14 2.38l1.78 1.32.57.42.16.12.05.03a.75.75 0 0 0 1.13-.92l-.08-.12-.04-.06-.11-.16-.43-.57-1.31-1.78a105 105 0 0 0-2.42-3.17" clipRule="evenodd" opacity={.4} />
        <path d="M10.76 12.23a1.75 1.75 0 0 1 2.52.04c.32.38 1.4 1.82 2.38 3.13l1.31 1.78.43.57.11.16.04.05.07.13a.75.75 0 0 1-1.11.93l-.06-.04-.16-.12-.57-.42-1.78-1.32a105 105 0 0 1-3.18-2.42 1.75 1.75 0 0 1 0-2.47" />
        <path fillRule="evenodd" d="M12 2.59a10.88 10.88 0 0 1 7.69 18.56l-.26.26H4.57l-.2-.2-.06-.05-.07-.08A10.88 10.88 0 0 1 12 2.59m.88 3.88a.88.88 0 0 1-1.75 0V4.38A9 9 0 0 0 6.2 6.42L7.67 7.9a.88.88 0 0 1-1.24 1.23L4.96 7.66a9 9 0 0 0-2.04 4.93H5a.87.87 0 1 1 0 1.75H2.92a9 9 0 0 0 2.04 4.92l1.47-1.46a.88.88 0 0 1 1.24 1.23l-.63.63H18.7a9 9 0 0 0 2.38-5.32H19a.88.88 0 0 1 0-1.75h2.08a9 9 0 0 0-2.04-4.93l-1.48 1.47a.88.88 0 0 1-1.23-1.23l1.47-1.48a9 9 0 0 0-4.92-2.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

Gauge100FillDuotone.displayName = 'Gauge100FillDuotone';

// Triple export pattern (lucide-react style)
export { Gauge100FillDuotone, Gauge100FillDuotone as Gauge100FillDuotoneIcon, Gauge100FillDuotone as SiGauge100FillDuotone };
export default Gauge100FillDuotone;
export type { Gauge100FillDuotoneProps };
