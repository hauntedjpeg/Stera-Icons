import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge33FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge33FillDuotone = memo(
  forwardRef<SVGSVGElement, Gauge33FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.88 4.38c1.86.18 3.56.92 4.92 2.04L16.33 7.9a.87.87 0 1 0 1.24 1.23l1.47-1.47a9 9 0 0 1 2.04 4.93H19a.87.87 0 1 0 0 1.75h2.08a9 9 0 0 1-2.04 4.92l-1.47-1.46a.88.88 0 0 0-1.24 1.23l.63.63H7.04l.63-.63a.88.88 0 0 0-1.24-1.23l-1.47 1.46a9 9 0 0 1-2.04-4.92H5a.88.88 0 0 0 0-1.75H2.92a9.1 9.1 0 0 1 8.21-8.2v2.08a.87.87 0 1 0 1.75 0zM7.49 7.91a.75.75 0 0 0-1.12.93l.08.12.04.05.11.16.43.57 1.31 1.79a105 105 0 0 0 2.42 3.17 1.75 1.75 0 1 0 2.44-2.51c-.38-.32-1.83-1.4-3.14-2.38L7.71 8.07l-.16-.12z" clipRule="evenodd" opacity={.4} />
        <path d="M6.52 7.98c.26-.26.68-.29.97-.07l.06.04.16.12 2.35 1.74a106 106 0 0 1 3.18 2.42 1.75 1.75 0 1 1-2.52 2.43c-.32-.38-1.4-1.82-2.38-3.13L7.03 9.74l-.43-.57-.11-.16-.04-.05-.08-.12a.75.75 0 0 1 .15-.86" />
        <path fillRule="evenodd" d="M12 2.59a10.88 10.88 0 0 1 7.7 18.57.9.9 0 0 1-.65.25H4.95a.9.9 0 0 1-.71-.33A10.88 10.88 0 0 1 12 2.59m.88 3.88a.88.88 0 0 1-1.75 0V4.38a9.1 9.1 0 0 0-8.21 8.2H5a.87.87 0 1 1 0 1.76H2.92a9 9 0 0 0 2.04 4.92l1.47-1.46a.88.88 0 0 1 1.24 1.23l-.63.63h9.92l-.63-.63a.88.88 0 0 1 1.24-1.23l1.47 1.46a9 9 0 0 0 2.04-4.92H19a.88.88 0 0 1 0-1.75h2.08a9 9 0 0 0-2.04-4.93l-1.47 1.47a.87.87 0 1 1-1.24-1.23l1.47-1.48a9 9 0 0 0-4.92-2.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

Gauge33FillDuotone.displayName = 'Gauge33FillDuotone';

// Triple export pattern (lucide-react style)
export { Gauge33FillDuotone, Gauge33FillDuotone as Gauge33FillDuotoneIcon, Gauge33FillDuotone as SiGauge33FillDuotone };
export default Gauge33FillDuotone;
export type { Gauge33FillDuotoneProps };
