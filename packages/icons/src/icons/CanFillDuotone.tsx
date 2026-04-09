import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CanFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CanFillDuotone = memo(
  forwardRef<SVGSVGElement, CanFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="can-fill-duotone" {...props}>
      <path d="M18.36 5.37q.52.9.52 1.93v9.4q0 1.03-.52 1.93l-1.31 2.3c-.34.58-.96.94-1.63.95H8.58c-.67 0-1.3-.37-1.63-.95l-1.31-2.3a4 4 0 0 1-.51-1.93V7.3q0-1.03.5-1.93l.86-1.5H17.5z" opacity={.4} />
        <path d="M17.5 2.13a.88.88 0 0 1 0 1.75h-11a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

CanFillDuotone.displayName = 'CanFillDuotone';

// Triple export pattern (lucide-react style)
export { CanFillDuotone, CanFillDuotone as CanFillDuotoneIcon, CanFillDuotone as SiCanFillDuotone };
export default CanFillDuotone;
export type { CanFillDuotoneProps };
