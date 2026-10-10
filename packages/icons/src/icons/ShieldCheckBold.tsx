import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldCheckBoldProps = Omit<IconBaseProps, 'children'>;

const ShieldCheckBold = memo(
  forwardRef<SVGSVGElement, ShieldCheckBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.32 9.52c.4-.38 1.03-.36 1.4.05.39.4.37 1.03-.04 1.4l-3.62 3.41-.33.3c-.12.09-.3.22-.55.28q-.5.13-.97-.06c-.24-.1-.4-.26-.51-.37q-.15-.16-.28-.33l-1.2-1.5c-.35-.44-.28-1.07.16-1.41.43-.35 1.06-.28 1.4.15l1.07 1.34z" />
        <path fillRule="evenodd" d="M12 1.63q.45 0 .75.33c1.35 1.52 3.06 2.42 4.47 2.93q1.07.36 1.74.5l.5.1.12.01h.03c.5.06.89.49.89 1v4.17c0 4.64-2.62 8.88-6.77 10.96l-1.28.64c-.28.14-.62.14-.9 0l-1.28-.64C6.12 19.55 3.5 15.3 3.5 10.67V6.5c0-.51.38-.94.89-1h.03q.05 0 .12-.02.18-.01.5-.09c.43-.1 1.04-.25 1.74-.5 1.4-.51 3.12-1.4 4.47-2.93l.08-.08q.28-.24.67-.25m0 2.42c-1.49 1.39-3.17 2.22-4.53 2.72-.78.28-1.47.46-1.97.57v3.33c0 3.88 2.2 7.43 5.67 9.17l.83.42.83-.42c3.48-1.74 5.67-5.29 5.67-9.17V7.34c-.5-.11-1.19-.29-1.97-.57-1.36-.5-3.04-1.33-4.53-2.72" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldCheckBold.displayName = 'ShieldCheckBold';

// Triple export pattern
export { ShieldCheckBold, ShieldCheckBold as ShieldCheckBoldIcon, ShieldCheckBold as SiShieldCheckBold };
export default ShieldCheckBold;
export type { ShieldCheckBoldProps };
