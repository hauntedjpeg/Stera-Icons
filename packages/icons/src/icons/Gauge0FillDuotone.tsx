import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge0FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge0FillDuotone = memo(
  forwardRef<SVGSVGElement, Gauge0FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.72 4.38c1.86.18 3.55.91 4.92 2.04L16.16 7.9a.88.88 0 0 0 1.24 1.23l1.48-1.47a9 9 0 0 1 2.04 4.93h-2.08a.87.87 0 1 0 0 1.75h2.08a9 9 0 0 1-2.04 4.92L17.4 17.8a.88.88 0 0 0-1.24 1.23l.63.63H5.14a9 9 0 0 1-2.39-5.32h2.09a.88.88 0 0 0 0-1.75H2.75A9 9 0 0 1 4.8 7.66l1.47 1.47A.87.87 0 1 0 7.51 7.9L6.03 6.42a9 9 0 0 1 4.94-2.04v2.09a.87.87 0 1 0 1.75 0zm.35 7.85a1.75 1.75 0 0 0-2.51.04c-.32.37-1.4 1.82-2.38 3.13l-1.32 1.78-.42.57-.12.16-.03.06a.75.75 0 0 0 .92 1.12l.12-.07.06-.04.16-.12.57-.42 1.78-1.32a105 105 0 0 0 3.17-2.42c.69-.68.69-1.79 0-2.47" clipRule="evenodd" opacity={.4} />
        <path d="M10.6 12.23a1.75 1.75 0 1 1 2.43 2.51c-.37.32-1.82 1.4-3.13 2.38l-1.78 1.32-.57.42-.16.12-.06.03-.12.08a.75.75 0 0 1-.93-1.12l.04-.06.12-.16.42-.57 1.32-1.78a105 105 0 0 1 2.42-3.17" />
        <path fillRule="evenodd" d="M11.84 2.59a10.88 10.88 0 0 1 7.69 18.57 1 1 0 0 1-.64.25H4.77a1 1 0 0 1-.62-.26A10.88 10.88 0 0 1 11.84 2.6m.88 3.88a.88.88 0 0 1-1.75 0V4.38a9 9 0 0 0-4.94 2.04L7.51 7.9a.88.88 0 0 1-1.24 1.23L4.8 7.66a9 9 0 0 0-2.05 4.93h2.09a.87.87 0 1 1 0 1.75H2.75a9 9 0 0 0 2.39 5.32H16.8l-.63-.63a.87.87 0 1 1 1.24-1.23l1.47 1.46a9 9 0 0 0 2.04-4.92h-2.08a.88.88 0 0 1 0-1.75h2.08a9 9 0 0 0-2.04-4.93L17.4 9.13a.88.88 0 0 1-1.24-1.23l1.48-1.48a9 9 0 0 0-4.92-2.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

Gauge0FillDuotone.displayName = 'Gauge0FillDuotone';

// Triple export pattern (lucide-react style)
export { Gauge0FillDuotone, Gauge0FillDuotone as Gauge0FillDuotoneIcon, Gauge0FillDuotone as SiGauge0FillDuotone };
export default Gauge0FillDuotone;
export type { Gauge0FillDuotoneProps };
