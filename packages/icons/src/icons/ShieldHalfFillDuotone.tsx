import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldHalfFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldHalfFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldHalfFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-half-fill-duotone" {...props}>
      <path d="M18.63 6.04v4.63c0 3.93-2.23 7.52-5.74 9.28l-.89.45V3.56z" opacity={.4} />
        <path fillRule="evenodd" d="M11.84 1.76a1 1 0 0 1 .47.05l7.5 2.8c.34.14.56.46.57.83v5.23c0 4.6-2.6 8.8-6.7 10.85l-1.29.64a.9.9 0 0 1-.78 0l-1.28-.64a12.1 12.1 0 0 1-6.7-10.85V5.44c0-.37.22-.7.56-.82l7.5-2.81zM12 20.4l.89-.45a10.4 10.4 0 0 0 5.74-9.28V6.04L12 3.56z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldHalfFillDuotone.displayName = 'ShieldHalfFillDuotone';

// Triple export pattern (lucide-react style)
export { ShieldHalfFillDuotone, ShieldHalfFillDuotone as ShieldHalfFillDuotoneIcon, ShieldHalfFillDuotone as SiShieldHalfFillDuotone };
export default ShieldHalfFillDuotone;
export type { ShieldHalfFillDuotoneProps };
