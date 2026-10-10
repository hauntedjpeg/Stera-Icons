import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldHalfRegularProps = Omit<IconBaseProps, 'children'>;

const ShieldHalfRegular = memo(
  forwardRef<SVGSVGElement, ShieldHalfRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.06 1.88h.06l.04.01.06.02.05.01.01.01h.02l.08.05.02.01.07.05.03.03.06.05c1.4 1.57 3.14 2.48 4.57 3 .71.26 1.34.42 1.78.52l.5.1.14.01h.03l.14.03c.31.1.53.39.53.72v4.17c0 4.55-2.57 8.7-6.63 10.74l-1.28.64h-.02l-.04.02-.05.02-.06.01h-.02l-.07.02h-.16l-.07-.01h-.02l-.06-.02-.05-.02-.04-.02h-.02l-1.28-.64c-4.06-2.04-6.63-6.2-6.63-10.74V6.5c0-.38.29-.7.67-.75h.03q.04 0 .13-.02l.51-.1c.44-.09 1.07-.25 1.78-.5 1.43-.53 3.18-1.44 4.57-3l.06-.06.03-.03.07-.05.02-.01.08-.04.02-.01h.01l.05-.02.05-.02h.05l.06-.01h.12m-.81 2.5c-1.3 1.05-2.7 1.73-3.87 2.15-.79.3-1.48.47-1.97.57l-.16.03v3.54c0 3.98 2.25 7.61 5.8 9.4l.2.1zm1.5 15.78.2-.1c3.55-1.78 5.8-5.41 5.8-9.39V7.13l-.16-.03q-.77-.14-1.97-.57c-1.17-.42-2.57-1.1-3.87-2.16z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldHalfRegular.displayName = 'ShieldHalfRegular';

// Triple export pattern
export { ShieldHalfRegular, ShieldHalfRegular as ShieldHalfRegularIcon, ShieldHalfRegular as SiShieldHalfRegular };
export default ShieldHalfRegular;
export type { ShieldHalfRegularProps };
