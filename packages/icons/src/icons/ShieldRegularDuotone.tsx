import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldRegularDuotone = memo(
  forwardRef<SVGSVGElement, ShieldRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.56 2.13c1.4 1.56 3.14 2.47 4.57 3 .71.25 1.34.41 1.78.5l.5.1.14.02h.03l.14.03c.31.1.53.39.53.72v4.17c0 4.55-2.57 8.7-6.63 10.74l-1.28.64q.21-.12.33-.34c.19-.37.04-.82-.33-1l-.34-.17.95-.48c3.55-1.78 5.8-5.41 5.8-9.39V7.13l-.16-.03q-.77-.14-1.97-.57c-1.4-.5-3.12-1.37-4.62-2.82q.3-.28.56-.59c.26-.28.25-.71 0-1" opacity={.4} />
        <path d="M11.44 2.13c.27-.31.75-.34 1.06-.07.3.28.34.75.06 1.06-1.6 1.81-3.6 2.84-5.18 3.41-.79.3-1.48.47-1.97.57l-.16.03v3.54c0 3.98 2.25 7.62 5.8 9.4l1.29.63c.37.19.52.64.33 1.01-.18.37-.63.52-1 .34l-1.29-.64c-4.06-2.04-6.63-6.2-6.63-10.74V6.5c0-.38.29-.7.67-.74l.03-.01q.04 0 .13-.02l.51-.1c.44-.09 1.07-.25 1.78-.5 1.43-.53 3.18-1.44 4.57-3" />
    </IconBase>
  ))
);

ShieldRegularDuotone.displayName = 'ShieldRegularDuotone';

// Triple export pattern
export { ShieldRegularDuotone, ShieldRegularDuotone as ShieldRegularDuotoneIcon, ShieldRegularDuotone as SiShieldRegularDuotone };
export default ShieldRegularDuotone;
export type { ShieldRegularDuotoneProps };
