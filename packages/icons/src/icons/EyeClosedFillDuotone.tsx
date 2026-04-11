import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeClosedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeClosedFillDuotone = memo(
  forwardRef<SVGSVGElement, EyeClosedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.88 14.71q1.16.44 2.43.62l-.59 2.02a1.25 1.25 0 0 1-2.4-.7zM16.68 16.65a1.25 1.25 0 0 1-2.4.7l-.59-2.02q1.27-.18 2.43-.62zM3.19 11.44A11 11 0 0 0 5 13.16L3.35 14.7a1.25 1.25 0 0 1-1.7-1.84zM22.35 12.86a1.25 1.25 0 0 1-1.7 1.84l-1.66-1.54a11 11 0 0 0 1.82-1.72z" opacity={0.4} />
        <path d="M19.85 8.42a1.25 1.25 0 0 1 2.21 1.16A11.3 11.3 0 0 1 12 15.45 11.3 11.3 0 0 1 1.94 9.58a1.25 1.25 0 0 1 2.21-1.16A8.8 8.8 0 0 0 12 12.95a8.8 8.8 0 0 0 7.85-4.53" />
    </IconBase>
  ))
);

EyeClosedFillDuotone.displayName = 'EyeClosedFillDuotone';

// Triple export pattern (lucide-react style)
export { EyeClosedFillDuotone, EyeClosedFillDuotone as EyeClosedFillDuotoneIcon, EyeClosedFillDuotone as SiEyeClosedFillDuotone };
export default EyeClosedFillDuotone;
export type { EyeClosedFillDuotoneProps };
