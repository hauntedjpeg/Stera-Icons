import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge50RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge50RegularDuotone = memo(
  forwardRef<SVGSVGElement, Gauge50RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.71a10.75 10.75 0 0 1 7.6 18.36.8.8 0 0 1-.67.2h-.02a1 1 0 0 1-.37-.2l-.02-.02-2.1-2.1a.75.75 0 1 1 1.06-1.07l1.57 1.57a9.2 9.2 0 0 0 2.17-5.24H19a.75.75 0 0 1 0-1.5h2.22a9.2 9.2 0 0 0-2.17-5.24l-1.57 1.58a.75.75 0 0 1-1.06-1.06l1.57-1.58A9.2 9.2 0 0 0 6 6.41L7.58 8a.75.75 0 0 1-1.06 1.06L4.95 7.47a9.2 9.2 0 0 0-2.17 5.24H5a.75.75 0 0 1 0 1.5H2.78a9.2 9.2 0 0 0 2.17 5.24l1.57-1.57a.75.75 0 1 1 1.06 1.07l-2.1 2.1q-.02 0-.02.02a1 1 0 0 1-.36.2h-.03a.8.8 0 0 1-.73-.27A10.75 10.75 0 0 1 12 2.71" opacity={.4} />
        <path d="M12 5.71c.37 0 .69.27.74.64l.01.07.03.2.44 2.89a105 105 0 0 1 .53 3.95 1.75 1.75 0 1 1-3.5-.05c.04-.5.3-2.28.53-3.9l.44-2.9.03-.2v-.05l.04-.14c.1-.3.39-.5.71-.5" />
    </IconBase>
  ))
);

Gauge50RegularDuotone.displayName = 'Gauge50RegularDuotone';

// Triple export pattern (lucide-react style)
export { Gauge50RegularDuotone, Gauge50RegularDuotone as Gauge50RegularDuotoneIcon, Gauge50RegularDuotone as SiGauge50RegularDuotone };
export default Gauge50RegularDuotone;
export type { Gauge50RegularDuotoneProps };
