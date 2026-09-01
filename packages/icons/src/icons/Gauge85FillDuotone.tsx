import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge85FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge85FillDuotone = memo(
  forwardRef<SVGSVGElement, Gauge85FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.88 4.38c1.86.18 3.56.91 4.92 2.04L16.33 7.9a.88.88 0 0 0 1.23 1.23l1.48-1.47a9.1 9.1 0 0 1 0 11.6l-1.47-1.46a.88.88 0 0 0-1.24 1.23l.63.63H7.04l.63-.63a.87.87 0 1 0-1.24-1.23l-1.47 1.46a9 9 0 0 1-2.04-4.92H5a.88.88 0 0 0 0-1.75H2.92a9 9 0 0 1 2.04-4.93l1.47 1.47A.88.88 0 0 0 7.67 7.9L6.2 6.42a9 9 0 0 1 4.93-2.04v2.09a.87.87 0 1 0 1.75 0zM12 11.71a1.75 1.75 0 1 0 .06 3.5c.5-.04 2.28-.3 3.9-.53l2.89-.43.2-.03.06-.01a.75.75 0 0 0 .14-1.46l-.14-.03h-.07l-.19-.04a519 519 0 0 0-6.8-.96z" clipRule="evenodd" opacity={.4} />
        <path d="M12.06 11.72c.5.03 2.28.29 3.9.53l2.89.43.2.03.06.01.14.03a.75.75 0 0 1-.14 1.46h-.07l-.19.04-2.9.43a105 105 0 0 1-3.95.53 1.75 1.75 0 1 1 .06-3.5" />
        <path fillRule="evenodd" d="M12 2.59a10.88 10.88 0 0 1 7.7 18.57l-.06.04-.2.21H4.56l-.2-.2-.06-.05-.07-.08A10.88 10.88 0 0 1 12 2.59m.88 3.88a.88.88 0 0 1-1.75 0V4.38A9 9 0 0 0 6.2 6.42L7.67 7.9a.88.88 0 0 1-1.24 1.23L4.96 7.66a9 9 0 0 0-2.04 4.93H5a.87.87 0 1 1 0 1.75H2.92a9 9 0 0 0 2.04 4.92l1.47-1.46a.88.88 0 0 1 1.24 1.23l-.63.63h9.92l-.63-.63a.88.88 0 0 1 1.24-1.23l1.47 1.46a9.1 9.1 0 0 0 0-11.6l-1.48 1.47a.88.88 0 0 1-1.23-1.23l1.47-1.48a9 9 0 0 0-4.92-2.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

Gauge85FillDuotone.displayName = 'Gauge85FillDuotone';

// Triple export pattern (lucide-react style)
export { Gauge85FillDuotone, Gauge85FillDuotone as Gauge85FillDuotoneIcon, Gauge85FillDuotone as SiGauge85FillDuotone };
export default Gauge85FillDuotone;
export type { Gauge85FillDuotoneProps };
