import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldCheckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldCheckFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldCheckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75q.4 0 .65.3A11 11 0 0 0 17.17 5a13 13 0 0 0 2.4.62h.02c.45.05.79.42.79.87v4.17c0 4.6-2.6 8.8-6.7 10.85l-1.29.64a.9.9 0 0 1-.78 0l-1.28-.64a12.1 12.1 0 0 1-6.7-10.85V6.5c0-.45.33-.82.77-.87h.04l.63-.12c.43-.09 1.05-.25 1.76-.5a11 11 0 0 0 4.52-2.97q.26-.28.65-.29m3.64 7.9a.87.87 0 0 0-1.24-.04l-3.57 3.35-1.15-1.44a.87.87 0 0 0-1.36 1.1l1.2 1.5q.13.17.27.32c.1.1.25.25.47.34q.44.18.89.06.34-.1.5-.26l.32-.29 3.63-3.4a.87.87 0 0 0 .04-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M14.4 9.61a.87.87 0 1 1 1.2 1.28l-3.63 3.4-.31.29q-.18.15-.51.26-.46.12-.9-.06-.3-.16-.46-.34-.15-.16-.27-.32l-1.2-1.5a.87.87 0 0 1 1.36-1.1l1.15 1.44z" />
    </IconBase>
  ))
);

ShieldCheckFillDuotone.displayName = 'ShieldCheckFillDuotone';

// Triple export pattern (lucide-react style)
export { ShieldCheckFillDuotone, ShieldCheckFillDuotone as ShieldCheckFillDuotoneIcon, ShieldCheckFillDuotone as SiShieldCheckFillDuotone };
export default ShieldCheckFillDuotone;
export type { ShieldCheckFillDuotoneProps };
