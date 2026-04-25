import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldFillProps = Omit<IconBaseProps, 'children'>;

const ShieldFill = memo(
  forwardRef<SVGSVGElement, ShieldFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.75q.4 0 .65.3A11 11 0 0 0 17.17 5a13 13 0 0 0 2.4.62h.02c.45.05.79.42.79.87v4.17c0 4.6-2.6 8.8-6.7 10.85l-1.29.64a.9.9 0 0 1-.78 0l-1.28-.64a12.1 12.1 0 0 1-6.7-10.85V6.5c0-.45.33-.82.77-.87h.04l.63-.12c.43-.09 1.05-.25 1.76-.5a11 11 0 0 0 4.52-2.97q.26-.28.65-.29" />
    </IconBase>
  ))
);

ShieldFill.displayName = 'ShieldFill';

// Triple export pattern (lucide-react style)
export { ShieldFill, ShieldFill as ShieldFillIcon, ShieldFill as SiShieldFill };
export default ShieldFill;
export type { ShieldFillProps };
