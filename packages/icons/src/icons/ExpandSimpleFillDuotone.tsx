import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, ExpandSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.88 13.88a.88.88 0 0 1 1.24 1.24L7.24 18 6 16.76zM18 7.24l-2.88 2.88a.88.88 0 0 1-1.24-1.24L16.76 6z" opacity={0.4} />
        <path d="M2.67 14.2c.32-.14.7-.07.95.18l6 6a.88.88 0 0 1-.62 1.5H3a.9.9 0 0 1-.87-.88v-6c0-.35.2-.67.54-.8M21 2.13c.48 0 .88.39.88.87v6a.88.88 0 0 1-1.5.62l-6-6a.88.88 0 0 1 .62-1.5z" />
    </IconBase>
  ))
);

ExpandSimpleFillDuotone.displayName = 'ExpandSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { ExpandSimpleFillDuotone, ExpandSimpleFillDuotone as ExpandSimpleFillDuotoneIcon, ExpandSimpleFillDuotone as SiExpandSimpleFillDuotone };
export default ExpandSimpleFillDuotone;
export type { ExpandSimpleFillDuotoneProps };
