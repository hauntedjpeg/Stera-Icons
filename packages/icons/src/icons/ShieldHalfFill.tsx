import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldHalfFillProps = Omit<IconBaseProps, 'children'>;

const ShieldHalfFill = memo(
  forwardRef<SVGSVGElement, ShieldHalfFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.84 1.76a1 1 0 0 1 .47.05l7.5 2.8c.34.14.56.46.57.83v5.23c0 4.6-2.6 8.8-6.7 10.85l-1.29.64a.9.9 0 0 1-.78 0l-1.28-.64a12.1 12.1 0 0 1-6.7-10.85V5.44c0-.37.22-.7.56-.82l7.5-2.81zM12 20.4l.89-.45a10.4 10.4 0 0 0 5.74-9.28V6.04L12 3.56z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldHalfFill.displayName = 'ShieldHalfFill';

// Triple export pattern (lucide-react style)
export { ShieldHalfFill, ShieldHalfFill as ShieldHalfFillIcon, ShieldHalfFill as SiShieldHalfFill };
export default ShieldHalfFill;
export type { ShieldHalfFillProps };
