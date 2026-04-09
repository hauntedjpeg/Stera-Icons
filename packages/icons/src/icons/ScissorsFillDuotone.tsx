import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScissorsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScissorsFillDuotone = memo(
  forwardRef<SVGSVGElement, ScissorsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scissors-fill-duotone" {...props}>
      <path d="M14.12 13.45a.9.9 0 0 1 1.23-.13l6.2 5a.88.88 0 0 1-1.1 1.36l-6.2-5a.87.87 0 0 1-.13-1.23M5.5 3.13a3.38 3.38 0 0 1 3.09 4.73l1.8 1.46a.88.88 0 0 1-1.1 1.36L7.5 9.23a3.38 3.38 0 1 1-1.99-6.1" opacity={0.4} />
        <path d="M20.45 4.32a.88.88 0 0 1 1.1 1.36L8.59 16.13a3.36 3.36 0 0 1-3.09 4.74 3.37 3.37 0 1 1 1.99-6.1z" />
    </IconBase>
  ))
);

ScissorsFillDuotone.displayName = 'ScissorsFillDuotone';

// Triple export pattern (lucide-react style)
export { ScissorsFillDuotone, ScissorsFillDuotone as ScissorsFillDuotoneIcon, ScissorsFillDuotone as SiScissorsFillDuotone };
export default ScissorsFillDuotone;
export type { ScissorsFillDuotoneProps };
