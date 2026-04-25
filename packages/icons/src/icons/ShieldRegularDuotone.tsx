import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldRegularDuotone = memo(
  forwardRef<SVGSVGElement, ShieldRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.56 2.13a11 11 0 0 0 4.57 3 13 13 0 0 0 2.29.6l.13.02h.03l.14.03c.31.1.53.39.53.72v4.17a12 12 0 0 1-6.63 10.74l-1.28.64a.74.74 0 0 0 0-1.35l-.34-.16.95-.48a10.5 10.5 0 0 0 5.8-9.39V7.13l-.16-.03q-.77-.14-1.97-.57c-1.4-.5-3.12-1.37-4.62-2.82q.3-.28.56-.59a.75.75 0 0 0 0-1" opacity={.4} />
        <path d="M11.44 2.13a.75.75 0 1 1 1.12 1 13 13 0 0 1-5.18 3.4c-.79.3-1.48.47-1.97.57l-.16.03v3.54a10.5 10.5 0 0 0 5.8 9.4l1.29.63a.75.75 0 0 1-.68 1.35l-1.28-.64a12 12 0 0 1-6.63-10.74V6.5c0-.38.29-.7.67-.74l.03-.01q.04 0 .13-.02l.51-.1c.44-.09 1.07-.25 1.78-.5a11 11 0 0 0 4.57-3" />
    </IconBase>
  ))
);

ShieldRegularDuotone.displayName = 'ShieldRegularDuotone';

// Triple export pattern (lucide-react style)
export { ShieldRegularDuotone, ShieldRegularDuotone as ShieldRegularDuotoneIcon, ShieldRegularDuotone as SiShieldRegularDuotone };
export default ShieldRegularDuotone;
export type { ShieldRegularDuotoneProps };
