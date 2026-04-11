import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TogglesFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TogglesFillDuotone = memo(
  forwardRef<SVGSVGElement, TogglesFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 12.88a4.87 4.87 0 1 1 0 9.74H8a4.87 4.87 0 1 1 0-9.75zm0 2.87a2 2 0 1 0 0 4 2 2 0 0 0 0-4M16 1.38a4.87 4.87 0 1 1 0 9.75H8a4.87 4.87 0 1 1 0-9.76zM8 3.13a3.12 3.12 0 1 0 0 6.25h8a3.12 3.12 0 1 0 0-6.26z" opacity={0.4} />
        <path d="M16 15.75a2 2 0 1 1 0 4 2 2 0 0 1 0-4M8 4.25a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

TogglesFillDuotone.displayName = 'TogglesFillDuotone';

// Triple export pattern (lucide-react style)
export { TogglesFillDuotone, TogglesFillDuotone as TogglesFillDuotoneIcon, TogglesFillDuotone as SiTogglesFillDuotone };
export default TogglesFillDuotone;
export type { TogglesFillDuotoneProps };
