import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldHalfRegularProps = Omit<IconBaseProps, 'children'>;

const ShieldHalfRegular = memo(
  forwardRef<SVGSVGElement, ShieldHalfRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.06 1.88h.06l.04.01.06.02.05.01.01.01h.02l.08.05.02.01.07.05.03.03.06.05a11 11 0 0 0 4.57 3 13 13 0 0 0 2.29.61l.13.02h.03l.14.03c.31.1.53.39.53.72v4.17a12 12 0 0 1-6.63 10.74l-1.28.64h-.02l-.04.02-.05.02-.06.01h-.02l-.07.02h-.16l-.07-.01h-.02l-.06-.02-.05-.02-.04-.02h-.02l-1.28-.64a12 12 0 0 1-6.63-10.74V6.5c0-.38.29-.7.67-.75h.03q.04 0 .13-.02l.51-.1c.44-.09 1.07-.25 1.78-.5a11 11 0 0 0 4.57-3l.06-.06.03-.03.07-.05.02-.01.08-.04.02-.01h.01l.05-.02.05-.02h.05l.06-.01h.12m-.81 2.5a14 14 0 0 1-3.87 2.15c-.79.3-1.48.47-1.97.57l-.16.03v3.54a10.5 10.5 0 0 0 5.8 9.4l.2.1zm1.5 15.78.2-.1a10.5 10.5 0 0 0 5.8-9.39V7.13l-.16-.03q-.77-.14-1.97-.57a14 14 0 0 1-3.87-2.16z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldHalfRegular.displayName = 'ShieldHalfRegular';

// Triple export pattern (lucide-react style)
export { ShieldHalfRegular, ShieldHalfRegular as ShieldHalfRegularIcon, ShieldHalfRegular as SiShieldHalfRegular };
export default ShieldHalfRegular;
export type { ShieldHalfRegularProps };
