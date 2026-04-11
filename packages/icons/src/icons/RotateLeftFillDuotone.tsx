import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 5.13a8.37 8.37 0 1 1-8.37 8.37.88.88 0 0 1 1.75 0A6.62 6.62 0 1 0 12 6.88h-.62V5.13z" opacity={.4} />
        <path d="M9.88 1.88a.88.88 0 0 1 1.5.62v7a.88.88 0 0 1-1.5.62l-3.5-3.5a.9.9 0 0 1 0-1.24z" />
    </IconBase>
  ))
);

RotateLeftFillDuotone.displayName = 'RotateLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { RotateLeftFillDuotone, RotateLeftFillDuotone as RotateLeftFillDuotoneIcon, RotateLeftFillDuotone as SiRotateLeftFillDuotone };
export default RotateLeftFillDuotone;
export type { RotateLeftFillDuotoneProps };
