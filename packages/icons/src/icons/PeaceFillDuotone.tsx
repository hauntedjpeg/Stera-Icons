import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PeaceFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PeaceFillDuotone = memo(
  forwardRef<SVGSVGElement, PeaceFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.13 20.08c-1.6-.17-3.04-.8-4.22-1.75l4.22-4.22zM17.1 18.33c-1.19.95-2.64 1.58-4.23 1.75V14.1zM11.13 11.64l-5.46 5.45c-1.12-1.4-1.8-3.16-1.8-5.09 0-4.2 3.18-7.64 7.26-8.08zM12.88 3.92c4.07.44 7.24 3.89 7.24 8.08 0 1.93-.67 3.7-1.8 5.1l-5.44-5.46z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m-5.1 16.2c1.19.95 2.64 1.58 4.22 1.75V14.1zm5.98 1.75c1.58-.17 3.03-.8 4.21-1.75l-4.21-4.22zM11.12 3.92C7.06 4.36 3.89 7.81 3.89 12c0 1.93.67 3.7 1.79 5.1l5.46-5.46zm1.76 7.72 5.45 5.45c1.12-1.4 1.8-3.16 1.8-5.09 0-4.2-3.18-7.64-7.25-8.08z" clipRule="evenodd" />
    </IconBase>
  ))
);

PeaceFillDuotone.displayName = 'PeaceFillDuotone';

// Triple export pattern
export { PeaceFillDuotone, PeaceFillDuotone as PeaceFillDuotoneIcon, PeaceFillDuotone as SiPeaceFillDuotone };
export default PeaceFillDuotone;
export type { PeaceFillDuotoneProps };
