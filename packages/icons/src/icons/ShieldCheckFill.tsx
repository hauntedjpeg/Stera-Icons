import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldCheckFillProps = Omit<IconBaseProps, 'children'>;

const ShieldCheckFill = memo(
  forwardRef<SVGSVGElement, ShieldCheckFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75q.4 0 .65.3c1.38 1.54 3.1 2.44 4.52 2.96.71.25 1.33.41 1.76.5l.5.1.13.02h.03c.45.05.79.42.79.87v4.17c0 4.6-2.6 8.8-6.7 10.85l-1.29.64c-.24.12-.54.12-.78 0l-1.28-.64c-4.11-2.06-6.7-6.26-6.7-10.85V6.5c0-.45.33-.82.77-.87h.04l.12-.02.5-.1c.44-.09 1.06-.25 1.77-.5 1.41-.52 3.14-1.42 4.52-2.97q.26-.28.65-.29m3.64 7.9c-.33-.35-.89-.37-1.24-.04l-3.57 3.35-1.15-1.44c-.3-.38-.85-.44-1.23-.14-.37.3-.44.86-.13 1.23l1.2 1.5q.13.18.27.33c.1.1.25.25.47.34q.44.18.89.06.34-.1.5-.26l.32-.29 3.63-3.4c.35-.33.37-.89.04-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldCheckFill.displayName = 'ShieldCheckFill';

// Triple export pattern
export { ShieldCheckFill, ShieldCheckFill as ShieldCheckFillIcon, ShieldCheckFill as SiShieldCheckFill };
export default ShieldCheckFill;
export type { ShieldCheckFillProps };
