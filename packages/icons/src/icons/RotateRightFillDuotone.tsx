import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateRightFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-right-fill-duotone" {...props}>
      <path d="M12.63 5.13v1.75H12a6.62 6.62 0 1 0 6.63 6.62.88.88 0 0 1 1.75 0A8.37 8.37 0 1 1 12 5.13z" opacity={.4} />
        <path d="M13.17 1.7c.32-.14.7-.07.95.18l3.5 3.5a.9.9 0 0 1 0 1.24l-3.5 3.5a.88.88 0 0 1-1.5-.62v-7c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

RotateRightFillDuotone.displayName = 'RotateRightFillDuotone';

// Triple export pattern (lucide-react style)
export { RotateRightFillDuotone, RotateRightFillDuotone as RotateRightFillDuotoneIcon, RotateRightFillDuotone as SiRotateRightFillDuotone };
export default RotateRightFillDuotone;
export type { RotateRightFillDuotoneProps };
