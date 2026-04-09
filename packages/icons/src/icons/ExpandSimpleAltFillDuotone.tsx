import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleAltFillDuotone = memo(
  forwardRef<SVGSVGElement, ExpandSimpleAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="expand-simple-alt-fill-duotone" {...props}>
      <path d="M13.88 13.88a.9.9 0 0 1 1.24 0L18 16.76 16.76 18l-2.88-2.88a.9.9 0 0 1 0-1.24M10.12 8.88a.88.88 0 0 1-1.24 1.24L6 7.24 7.24 6z" opacity={0.4} />
        <path d="M20.38 14.38a.88.88 0 0 1 1.5.62v6c0 .48-.4.88-.88.88h-6a.88.88 0 0 1-.62-1.5zM9 2.13a.88.88 0 0 1 .62 1.49l-6 6A.88.88 0 0 1 2.12 9V3c0-.48.4-.87.88-.87z" />
    </IconBase>
  ))
);

ExpandSimpleAltFillDuotone.displayName = 'ExpandSimpleAltFillDuotone';

// Triple export pattern (lucide-react style)
export { ExpandSimpleAltFillDuotone, ExpandSimpleAltFillDuotone as ExpandSimpleAltFillDuotoneIcon, ExpandSimpleAltFillDuotone as SiExpandSimpleAltFillDuotone };
export default ExpandSimpleAltFillDuotone;
export type { ExpandSimpleAltFillDuotoneProps };
