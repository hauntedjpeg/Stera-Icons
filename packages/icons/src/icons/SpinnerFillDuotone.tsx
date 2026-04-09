import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpinnerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpinnerFillDuotone = memo(
  forwardRef<SVGSVGElement, SpinnerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="spinner-fill-duotone" {...props}>
      <path d="M6.66 15.57a1.25 1.25 0 1 1 1.77 1.77l-1.91 1.91a1.25 1.25 0 0 1-1.77-1.77zM15.57 15.57a1.25 1.25 0 0 1 1.77 0l1.9 1.91a1.25 1.25 0 0 1-1.76 1.77l-1.91-1.9a1.25 1.25 0 0 1 0-1.78M4.75 4.75a1.25 1.25 0 0 1 1.77 0l1.9 1.91a1.25 1.25 0 0 1-1.76 1.77L4.75 6.52a1.25 1.25 0 0 1 0-1.77M17.48 4.75a1.25 1.25 0 0 1 1.76 1.77l-1.9 1.91a1.25 1.25 0 0 1-1.77-1.77z" opacity={0.4} />
        <path d="M12 17.05c.69 0 1.25.56 1.25 1.25V21a1.25 1.25 0 1 1-2.5 0v-2.7c0-.7.56-1.25 1.25-1.25M5.7 10.75a1.25 1.25 0 0 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5zM21 10.75a1.25 1.25 0 1 1 0 2.5h-2.7a1.25 1.25 0 0 1 0-2.5zM12 1.75c.69 0 1.25.56 1.25 1.25v2.7a1.25 1.25 0 0 1-2.5 0V3c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

SpinnerFillDuotone.displayName = 'SpinnerFillDuotone';

// Triple export pattern (lucide-react style)
export { SpinnerFillDuotone, SpinnerFillDuotone as SpinnerFillDuotoneIcon, SpinnerFillDuotone as SiSpinnerFillDuotone };
export default SpinnerFillDuotone;
export type { SpinnerFillDuotoneProps };
