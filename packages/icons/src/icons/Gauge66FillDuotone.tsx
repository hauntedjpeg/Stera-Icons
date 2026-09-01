import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge66FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge66FillDuotone = memo(
  forwardRef<SVGSVGElement, Gauge66FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.88 4.38a9.1 9.1 0 0 1 8.2 8.2H19a.87.87 0 1 0 0 1.76h2.08a9 9 0 0 1-2.04 4.92l-1.47-1.46a.88.88 0 0 0-1.24 1.23l.63.63H7.04l.63-.63a.87.87 0 1 0-1.24-1.23l-1.47 1.46a9 9 0 0 1-2.04-4.92H5a.88.88 0 0 0 0-1.75H2.92a9 9 0 0 1 2.04-4.93l1.47 1.47A.88.88 0 0 0 7.67 7.9L6.2 6.42a9 9 0 0 1 4.93-2.04v2.09a.87.87 0 1 0 1.75 0zm4.6 3.6a.75.75 0 0 0-.86-.14l-.12.07-.05.04-.16.12-.57.42-1.78 1.32c-1.31.97-2.76 2.05-3.14 2.38l-.04.04a1.75 1.75 0 1 0 2.52 2.43c.32-.38 1.4-1.82 2.38-3.13l1.74-2.36.11-.16.04-.05a.75.75 0 0 0-.07-.98" clipRule="evenodd" opacity={.4} />
        <path d="M16.62 7.84a.75.75 0 0 1 .93 1.12l-.04.05-.11.16-1.74 2.36a105 105 0 0 1-2.42 3.17 1.75 1.75 0 0 1-2.48-2.47l.04-.04c.38-.33 1.83-1.4 3.14-2.38l1.78-1.32.57-.42.16-.12.05-.04z" />
        <path fillRule="evenodd" d="M12 2.59a10.88 10.88 0 0 1 7.7 18.57.9.9 0 0 1-.65.25H4.95a.9.9 0 0 1-.71-.33A10.88 10.88 0 0 1 12 2.59m.88 3.88a.88.88 0 0 1-1.75 0V4.38A9 9 0 0 0 6.2 6.42L7.67 7.9a.88.88 0 0 1-1.24 1.23L4.96 7.66a9 9 0 0 0-2.04 4.93H5a.87.87 0 1 1 0 1.75H2.92a9 9 0 0 0 2.04 4.92l1.47-1.46a.88.88 0 0 1 1.24 1.23l-.63.63h9.92l-.63-.63a.88.88 0 0 1 1.24-1.23l1.47 1.46a9 9 0 0 0 2.04-4.92H19a.88.88 0 0 1 0-1.75h2.08a9.1 9.1 0 0 0-8.2-8.2z" clipRule="evenodd" />
    </IconBase>
  ))
);

Gauge66FillDuotone.displayName = 'Gauge66FillDuotone';

// Triple export pattern (lucide-react style)
export { Gauge66FillDuotone, Gauge66FillDuotone as Gauge66FillDuotoneIcon, Gauge66FillDuotone as SiGauge66FillDuotone };
export default Gauge66FillDuotone;
export type { Gauge66FillDuotoneProps };
