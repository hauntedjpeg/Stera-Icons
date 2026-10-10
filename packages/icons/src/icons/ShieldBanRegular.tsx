import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldBanRegularProps = Omit<IconBaseProps, 'children'>;

const ShieldBanRegular = memo(
  forwardRef<SVGSVGElement, ShieldBanRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.88q.33 0 .56.25c1.4 1.56 3.14 2.47 4.57 3 .71.25 1.34.41 1.78.5l.5.1.14.02h.03l.14.03c.31.1.53.39.53.72v4.17c0 4.55-2.57 8.7-6.63 10.74l-1.28.64q-.34.15-.68 0l-1.28-.64c-4.06-2.04-6.63-6.2-6.63-10.74V6.5c0-.38.29-.7.67-.75h.03q.04 0 .13-.02l.51-.1c.44-.09 1.07-.25 1.78-.5 1.43-.53 3.18-1.44 4.57-3l.06-.06q.2-.19.5-.2m-6.75 8.8c0 3.97 2.25 7.6 5.8 9.38l.95.48.95-.48c1.5-.75 2.77-1.83 3.73-3.14L5.25 8.03zM12 3.7c-1.5 1.45-3.22 2.32-4.62 2.82q-.62.22-1.15.37l11.26 8.75c.81-1.5 1.26-3.2 1.26-4.98V7.13l-.16-.03q-.77-.14-1.97-.57c-1.4-.5-3.12-1.37-4.62-2.82" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldBanRegular.displayName = 'ShieldBanRegular';

// Triple export pattern
export { ShieldBanRegular, ShieldBanRegular as ShieldBanRegularIcon, ShieldBanRegular as SiShieldBanRegular };
export default ShieldBanRegular;
export type { ShieldBanRegularProps };
