import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldCheckRegularProps = Omit<IconBaseProps, 'children'>;

const ShieldCheckRegular = memo(
  forwardRef<SVGSVGElement, ShieldCheckRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.49 9.7c.3-.28.77-.27 1.06.04.28.3.27.77-.04 1.06l-3.62 3.4-.31.28q-.16.15-.47.24-.4.1-.8-.06-.29-.14-.43-.3l-.26-.32-1.2-1.5c-.26-.33-.21-.8.11-1.06.33-.26.8-.2 1.06.12l1.2 1.5q0 .02.03.05l.04-.04z" />
        <path fillRule="evenodd" d="M12 1.88q.33 0 .56.25c1.4 1.56 3.14 2.47 4.57 3 .71.25 1.34.41 1.78.5l.5.1.14.02h.03l.14.03c.31.1.53.39.53.72v4.17c0 4.55-2.57 8.7-6.63 10.74l-1.28.64q-.34.15-.68 0l-1.28-.64c-4.06-2.04-6.63-6.2-6.63-10.74V6.5c0-.38.29-.7.67-.75h.03q.04 0 .13-.02l.51-.1c.44-.09 1.07-.25 1.78-.5 1.43-.53 3.18-1.44 4.57-3l.06-.06q.2-.19.5-.2m0 1.83c-1.5 1.45-3.22 2.32-4.62 2.82-.79.3-1.48.47-1.97.57l-.16.03v3.54c0 3.98 2.25 7.61 5.8 9.4l.95.47.95-.48c3.55-1.78 5.8-5.41 5.8-9.39V7.13l-.16-.03q-.77-.14-1.97-.57c-1.4-.5-3.12-1.37-4.62-2.82" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldCheckRegular.displayName = 'ShieldCheckRegular';

// Triple export pattern
export { ShieldCheckRegular, ShieldCheckRegular as ShieldCheckRegularIcon, ShieldCheckRegular as SiShieldCheckRegular };
export default ShieldCheckRegular;
export type { ShieldCheckRegularProps };
