import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldHalfBoldProps = Omit<IconBaseProps, 'children'>;

const ShieldHalfBold = memo(
  forwardRef<SVGSVGElement, ShieldHalfBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.07 1.63h.07l.09.02.05.02.08.02.07.04.07.03.06.04.07.05.04.04.07.06v.01c1.36 1.52 3.07 2.42 4.48 2.93q1.07.36 1.74.5l.5.1.12.01h.03c.5.06.89.49.89 1v4.17c0 4.64-2.62 8.88-6.77 10.96l-1.28.64h-.02l-.06.03-.06.02-.06.02-.06.02h-.06l-.07.01h-.19l-.06-.01-.06-.02-.06-.02-.06-.02-.06-.02-.02-.01-1.28-.64C6.12 19.55 3.5 15.3 3.5 10.67V6.5c0-.51.38-.94.89-1h.03q.05 0 .12-.02.18-.01.5-.09c.43-.1 1.04-.25 1.74-.5 1.4-.51 3.12-1.4 4.47-2.93h.01l.07-.07.04-.04.07-.05.06-.04.07-.03.06-.03.01-.01.08-.02.05-.02.08-.01.08-.01h.14M11 4.88c-1.21.9-2.47 1.5-3.53 1.89-.78.28-1.47.46-1.97.57v3.33c0 3.82 2.12 7.32 5.5 9.08zm2 14.87c3.38-1.76 5.5-5.26 5.5-9.08V7.34c-.5-.11-1.19-.29-1.97-.57-1.06-.39-2.32-.99-3.53-1.89z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldHalfBold.displayName = 'ShieldHalfBold';

// Triple export pattern
export { ShieldHalfBold, ShieldHalfBold as ShieldHalfBoldIcon, ShieldHalfBold as SiShieldHalfBold };
export default ShieldHalfBold;
export type { ShieldHalfBoldProps };
