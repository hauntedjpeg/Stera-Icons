import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldBanFillProps = Omit<IconBaseProps, 'children'>;

const ShieldBanFill = memo(
  forwardRef<SVGSVGElement, ShieldBanFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.63q.45 0 .75.33c1.35 1.52 3.06 2.42 4.47 2.93q1.07.36 1.74.5l.5.1.12.01h.03c.5.06.89.49.89 1v4.17c0 4.64-2.62 8.88-6.77 10.96l-1.28.64c-.28.14-.62.14-.9 0l-1.28-.64C6.12 19.55 3.5 15.3 3.5 10.67V6.5c0-.51.38-.94.89-1h.03q.05 0 .12-.02.18-.01.5-.09c.43-.1 1.04-.25 1.74-.5 1.4-.51 3.12-1.4 4.47-2.93l.08-.08q.28-.24.67-.25m0 2.42c-1.49 1.39-3.17 2.22-4.53 2.72q-1.14.4-1.91.55l11.35 8.83c1.02-1.6 1.59-3.5 1.59-5.48V7.34c-.5-.11-1.19-.29-1.97-.57-1.36-.5-3.04-1.33-4.53-2.72" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldBanFill.displayName = 'ShieldBanFill';

// Triple export pattern
export { ShieldBanFill, ShieldBanFill as ShieldBanFillIcon, ShieldBanFill as SiShieldBanFill };
export default ShieldBanFill;
export type { ShieldBanFillProps };
