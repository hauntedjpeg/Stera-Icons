import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandFillDuotone = memo(
  forwardRef<SVGSVGElement, ExpandFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="expand-fill-duotone" {...props}>
      <path d="M8.38 14.38a.88.88 0 0 1 1.24 1.24L7.24 18 6 16.76zM14.38 14.38a.9.9 0 0 1 1.24 0L18 16.76 16.76 18l-2.38-2.38a.9.9 0 0 1 0-1.24M9.62 8.38a.88.88 0 0 1-1.24 1.24L6 7.24 7.24 6zM18 7.24l-2.38 2.38a.88.88 0 0 1-1.24-1.24L16.76 6z" opacity={0.4} />
        <path d="M3.67 15.2c.32-.14.7-.07.95.18l4 4a.88.88 0 0 1-.62 1.5H4a.9.9 0 0 1-.87-.88v-4c0-.35.2-.67.54-.8M19.38 15.38a.88.88 0 0 1 1.5.62v4c0 .48-.4.88-.88.88h-4a.88.88 0 0 1-.62-1.5zM8 3.13a.88.88 0 0 1 .62 1.49l-4 4A.88.88 0 0 1 3.12 8V4c0-.48.4-.87.88-.87zM20 3.13c.48 0 .88.39.88.87v4a.88.88 0 0 1-1.5.62l-4-4a.88.88 0 0 1 .62-1.5z" />
    </IconBase>
  ))
);

ExpandFillDuotone.displayName = 'ExpandFillDuotone';

// Triple export pattern (lucide-react style)
export { ExpandFillDuotone, ExpandFillDuotone as ExpandFillDuotoneIcon, ExpandFillDuotone as SiExpandFillDuotone };
export default ExpandFillDuotone;
export type { ExpandFillDuotoneProps };
