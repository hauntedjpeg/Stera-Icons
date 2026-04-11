import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldCheckFillProps = Omit<IconBaseProps, 'children'>;

const ShieldCheckFill = memo(
  forwardRef<SVGSVGElement, ShieldCheckFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.84 1.76a1 1 0 0 1 .47.05l7.5 2.8c.34.14.57.46.57.83v5.23c0 4.6-2.6 8.8-6.7 10.85l-1.29.64a.9.9 0 0 1-.78 0l-1.28-.64a12.1 12.1 0 0 1-6.7-10.85V5.44c0-.37.22-.7.56-.82l7.5-2.81zm3.8 7.64a.87.87 0 0 0-1.24-.04l-3.57 3.35-1.15-1.44a.87.87 0 1 0-1.36 1.1l1.2 1.5q.13.17.27.32c.1.1.25.25.47.34a1.4 1.4 0 0 0 1.4-.2l.31-.29 3.63-3.4a.87.87 0 0 0 .04-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldCheckFill.displayName = 'ShieldCheckFill';

// Triple export pattern (lucide-react style)
export { ShieldCheckFill, ShieldCheckFill as ShieldCheckFillIcon, ShieldCheckFill as SiShieldCheckFill };
export default ShieldCheckFill;
export type { ShieldCheckFillProps };
