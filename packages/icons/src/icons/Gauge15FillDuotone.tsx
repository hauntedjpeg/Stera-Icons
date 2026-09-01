import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge15FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge15FillDuotone = memo(
  forwardRef<SVGSVGElement, Gauge15FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.88 4.38c1.86.18 3.56.92 4.92 2.04L16.33 7.9a.87.87 0 1 0 1.24 1.23l1.47-1.47a9 9 0 0 1 2.04 4.93H19a.87.87 0 1 0 0 1.75h2.08a9 9 0 0 1-2.04 4.92l-1.47-1.46a.88.88 0 0 0-1.23 1.23l.62.63H7.04l.63-.63a.88.88 0 0 0-1.24-1.23l-1.47 1.46a9.1 9.1 0 0 1 0-11.6l1.48 1.47A.87.87 0 1 0 7.67 7.9L6.2 6.42a9 9 0 0 1 4.93-2.04v2.09a.87.87 0 1 0 1.75 0zm-.94 7.34c-.5.03-2.28.29-3.9.53l-2.89.43-.2.03-.06.01a.75.75 0 0 0-.14 1.45l.14.04h.07l.19.04 2.9.43a105 105 0 0 0 3.95.53 1.75 1.75 0 1 0-.06-3.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 11.71a1.75 1.75 0 1 1-.06 3.5c-.5-.04-2.28-.3-3.9-.53l-2.89-.43-.2-.03-.06-.01-.14-.04a.75.75 0 0 1 .14-1.45h.07l.19-.04a524 524 0 0 1 6.8-.96z" />
        <path fillRule="evenodd" d="M12 2.59a10.88 10.88 0 0 1 7.7 18.57l-.06.04-.2.21H4.56l-.2-.2-.06-.05-.07-.08A10.88 10.88 0 0 1 12 2.59m.88 3.88a.88.88 0 0 1-1.75 0V4.38A9 9 0 0 0 6.2 6.42L7.67 7.9a.88.88 0 0 1-1.23 1.23L4.96 7.66a9.1 9.1 0 0 0 0 11.6l1.47-1.46a.88.88 0 0 1 1.24 1.23l-.63.63h9.92l-.62-.63a.87.87 0 1 1 1.23-1.23l1.47 1.46a9 9 0 0 0 2.04-4.92H19a.88.88 0 0 1 0-1.75h2.08a9 9 0 0 0-2.04-4.93l-1.47 1.47a.87.87 0 1 1-1.24-1.23l1.47-1.48a9 9 0 0 0-4.92-2.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

Gauge15FillDuotone.displayName = 'Gauge15FillDuotone';

// Triple export pattern (lucide-react style)
export { Gauge15FillDuotone, Gauge15FillDuotone as Gauge15FillDuotoneIcon, Gauge15FillDuotone as SiGauge15FillDuotone };
export default Gauge15FillDuotone;
export type { Gauge15FillDuotoneProps };
