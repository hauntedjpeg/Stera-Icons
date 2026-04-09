import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-fill-duotone" {...props}>
      <path d="M18.63 6.04v4.63c0 3.93-2.23 7.52-5.74 9.28l-.89.45-.89-.45a10.4 10.4 0 0 1-5.73-9.28V6.04L12 3.56z" opacity={.4} />
        <path fillRule="evenodd" d="M11.84 1.76a1 1 0 0 1 .47.05l7.5 2.8c.34.14.56.46.57.83v5.23c0 4.6-2.6 8.8-6.7 10.85l-1.29.64a.9.9 0 0 1-.78 0l-1.28-.64a12.1 12.1 0 0 1-6.7-10.85V5.44c0-.37.22-.7.56-.82l7.5-2.81zM5.38 6.04v4.63c0 3.93 2.22 7.52 5.73 9.28l.89.45.89-.45a10.4 10.4 0 0 0 5.74-9.28V6.04L12 3.56z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldFillDuotone.displayName = 'ShieldFillDuotone';

// Triple export pattern (lucide-react style)
export { ShieldFillDuotone, ShieldFillDuotone as ShieldFillDuotoneIcon, ShieldFillDuotone as SiShieldFillDuotone };
export default ShieldFillDuotone;
export type { ShieldFillDuotoneProps };
