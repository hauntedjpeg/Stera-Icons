import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldBanBoldProps = Omit<IconBaseProps, 'children'>;

const ShieldBanBold = memo(
  forwardRef<SVGSVGElement, ShieldBanBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.63a1 1 0 0 1 .75.33 11 11 0 0 0 4.47 2.93 13 13 0 0 0 2.24.6l.12.01h.03a1 1 0 0 1 .89 1v4.17c0 4.64-2.62 8.88-6.77 10.96l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V6.5a1 1 0 0 1 .89-1h.03q.05 0 .12-.02.18-.01.5-.09c.43-.1 1.04-.25 1.74-.5a11 11 0 0 0 4.47-2.93l.08-.08a1 1 0 0 1 .67-.25m-6.5 9.04c0 3.88 2.2 7.43 5.67 9.17l.83.42.83-.42c1.4-.7 2.58-1.69 3.5-2.87L5.5 8.54zM12 4.05A13.4 13.4 0 0 1 6.77 7l10.64 8.27c.7-1.4 1.09-2.97 1.09-4.6V7.34c-.5-.11-1.19-.29-1.97-.57A13 13 0 0 1 12 4.05" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldBanBold.displayName = 'ShieldBanBold';

// Triple export pattern (lucide-react style)
export { ShieldBanBold, ShieldBanBold as ShieldBanBoldIcon, ShieldBanBold as SiShieldBanBold };
export default ShieldBanBold;
export type { ShieldBanBoldProps };
