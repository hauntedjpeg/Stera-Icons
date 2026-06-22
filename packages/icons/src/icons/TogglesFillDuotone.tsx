import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TogglesFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TogglesFillDuotone = memo(
  forwardRef<SVGSVGElement, TogglesFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 12.63a4.87 4.87 0 1 1 0 9.74H8a4.87 4.87 0 1 1 0-9.75zm-2 3a1.88 1.88 0 0 0 0 3.74h2a1.88 1.88 0 0 0 0-3.75zM16 1.63a4.87 4.87 0 1 1 0 9.75H8a4.87 4.87 0 1 1 0-9.76zm-8 3a1.88 1.88 0 0 0 0 3.75h2a1.88 1.88 0 0 0 0-3.76z" opacity={0.4} />
        <path d="M16 15.63a1.88 1.88 0 0 1 0 3.74h-2a1.88 1.88 0 0 1 0-3.75zM10 4.63a1.88 1.88 0 0 1 0 3.75H8a1.88 1.88 0 0 1 0-3.76z" />
    </IconBase>
  ))
);

TogglesFillDuotone.displayName = 'TogglesFillDuotone';

// Triple export pattern (lucide-react style)
export { TogglesFillDuotone, TogglesFillDuotone as TogglesFillDuotoneIcon, TogglesFillDuotone as SiTogglesFillDuotone };
export default TogglesFillDuotone;
export type { TogglesFillDuotoneProps };
