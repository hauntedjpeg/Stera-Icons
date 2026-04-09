import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleAltFillProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleAltFill = memo(
  forwardRef<SVGSVGElement, ExpandSimpleAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="expand-simple-alt-fill" {...props}>
      <path d="M13.88 13.88a.9.9 0 0 1 1.24 0L18 16.76l2.38-2.38a.88.88 0 0 1 1.5.62v6c0 .48-.4.88-.88.88h-6a.88.88 0 0 1-.62-1.5L16.76 18l-2.88-2.88a.9.9 0 0 1 0-1.24M9 2.13a.88.88 0 0 1 .62 1.49L7.24 6l2.88 2.88a.88.88 0 0 1-1.24 1.24L6 7.24 3.62 9.62A.88.88 0 0 1 2.12 9V3c0-.48.4-.87.88-.87z" />
    </IconBase>
  ))
);

ExpandSimpleAltFill.displayName = 'ExpandSimpleAltFill';

// Triple export pattern (lucide-react style)
export { ExpandSimpleAltFill, ExpandSimpleAltFill as ExpandSimpleAltFillIcon, ExpandSimpleAltFill as SiExpandSimpleAltFill };
export default ExpandSimpleAltFill;
export type { ExpandSimpleAltFillProps };
