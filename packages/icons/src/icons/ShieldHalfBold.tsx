import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldHalfBoldProps = Omit<IconBaseProps, 'children'>;

const ShieldHalfBold = memo(
  forwardRef<SVGSVGElement, ShieldHalfBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.07 1.63h.07l.09.02.05.02.08.02.07.04.07.03.06.04.07.05.04.04.07.06v.01a11 11 0 0 0 4.48 2.93 13 13 0 0 0 2.24.6l.12.01h.03a1 1 0 0 1 .89 1v4.17c0 4.64-2.62 8.88-6.77 10.96l-1.28.64h-.02l-.06.03-.06.02-.06.02-.19.03h-.12l-.19-.03-.06-.02-.06-.02-.06-.02-.02-.01-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V6.5a1 1 0 0 1 .89-1h.03q.05 0 .12-.02.18-.01.5-.09c.43-.1 1.04-.25 1.74-.5a11 11 0 0 0 4.47-2.93h.01l.07-.07.04-.04.07-.05.06-.04.07-.03.06-.03.01-.01.08-.02.05-.02.08-.01.08-.01h.14M11 4.88a14 14 0 0 1-5.5 2.46v3.33c0 3.82 2.12 7.32 5.5 9.08zm2 14.87a10.3 10.3 0 0 0 5.5-9.08V7.34A13.91 13.91 0 0 1 13 4.89z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldHalfBold.displayName = 'ShieldHalfBold';

// Triple export pattern (lucide-react style)
export { ShieldHalfBold, ShieldHalfBold as ShieldHalfBoldIcon, ShieldHalfBold as SiShieldHalfBold };
export default ShieldHalfBold;
export type { ShieldHalfBoldProps };
