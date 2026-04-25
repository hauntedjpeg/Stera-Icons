import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldRegularProps = Omit<IconBaseProps, 'children'>;

const ShieldRegular = memo(
  forwardRef<SVGSVGElement, ShieldRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.88q.33 0 .56.25a11 11 0 0 0 4.57 3 13 13 0 0 0 2.29.6l.13.02h.03l.14.03c.31.1.53.39.53.72v4.17a12 12 0 0 1-6.63 10.74l-1.28.64q-.34.15-.68 0l-1.28-.64a12 12 0 0 1-6.63-10.74V6.5c0-.38.29-.7.67-.75h.03q.04 0 .13-.02l.51-.1c.44-.09 1.07-.25 1.78-.5a11 11 0 0 0 4.57-3l.06-.06q.2-.19.5-.2m0 1.83a13 13 0 0 1-4.62 2.82c-.79.3-1.48.47-1.97.57l-.16.03v3.54a10.5 10.5 0 0 0 5.8 9.4l.95.47.95-.48a10.5 10.5 0 0 0 5.8-9.39V7.13l-.16-.03q-.77-.14-1.97-.57c-1.4-.5-3.12-1.37-4.62-2.82" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldRegular.displayName = 'ShieldRegular';

// Triple export pattern (lucide-react style)
export { ShieldRegular, ShieldRegular as ShieldRegularIcon, ShieldRegular as SiShieldRegular };
export default ShieldRegular;
export type { ShieldRegularProps };
