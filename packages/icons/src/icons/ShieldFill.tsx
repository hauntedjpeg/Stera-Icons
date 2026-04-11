import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldFillProps = Omit<IconBaseProps, 'children'>;

const ShieldFill = memo(
  forwardRef<SVGSVGElement, ShieldFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.84 1.76a1 1 0 0 1 .47.05l7.5 2.8c.34.14.56.46.57.83v5.23c0 4.6-2.6 8.8-6.7 10.85l-1.29.64a.9.9 0 0 1-.78 0l-1.28-.64a12.1 12.1 0 0 1-6.7-10.85V5.44c0-.37.22-.7.56-.82l7.5-2.81z" />
    </IconBase>
  ))
);

ShieldFill.displayName = 'ShieldFill';

// Triple export pattern (lucide-react style)
export { ShieldFill, ShieldFill as ShieldFillIcon, ShieldFill as SiShieldFill };
export default ShieldFill;
export type { ShieldFillProps };
