import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreRegularDuotone = memo(
  forwardRef<SVGSVGElement, MoreRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5" opacity={.4} />
        <path d="M6.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M20.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5" />
    </IconBase>
  ))
);

MoreRegularDuotone.displayName = 'MoreRegularDuotone';

// Triple export pattern
export { MoreRegularDuotone, MoreRegularDuotone as MoreRegularDuotoneIcon, MoreRegularDuotone as SiMoreRegularDuotone };
export default MoreRegularDuotone;
export type { MoreRegularDuotoneProps };
