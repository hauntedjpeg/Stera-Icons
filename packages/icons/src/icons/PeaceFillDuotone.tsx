import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PeaceFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PeaceFillDuotone = memo(
  forwardRef<SVGSVGElement, PeaceFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="peace-fill-duotone" {...props}>
      <path d="M11.13 20.08a8 8 0 0 1-4.22-1.75l4.22-4.22zM17.1 18.33a8 8 0 0 1-4.23 1.75V14.1zM11.13 11.64l-5.46 5.45a8.13 8.13 0 0 1 5.46-13.17zM12.88 3.92a8.13 8.13 0 0 1 5.45 13.17l-5.45-5.45z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-5.1 16.2a8 8 0 0 0 4.22 1.75V14.1zm5.98 1.75a8 8 0 0 0 4.21-1.75l-4.21-4.22zM11.12 3.92A8.13 8.13 0 0 0 5.68 17.1l5.46-5.45zm1.76 7.72 5.45 5.45a8.13 8.13 0 0 0-5.45-13.17z" clipRule="evenodd" />
    </IconBase>
  ))
);

PeaceFillDuotone.displayName = 'PeaceFillDuotone';

// Triple export pattern (lucide-react style)
export { PeaceFillDuotone, PeaceFillDuotone as PeaceFillDuotoneIcon, PeaceFillDuotone as SiPeaceFillDuotone };
export default PeaceFillDuotone;
export type { PeaceFillDuotoneProps };
