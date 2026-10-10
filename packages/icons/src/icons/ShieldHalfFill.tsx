import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldHalfFillProps = Omit<IconBaseProps, 'children'>;

const ShieldHalfFill = memo(
  forwardRef<SVGSVGElement, ShieldHalfFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75q.4 0 .65.3c1.38 1.54 3.1 2.44 4.52 2.96.71.25 1.33.41 1.76.5l.5.1.13.02h.03c.45.05.79.42.79.87v4.17c0 4.6-2.6 8.8-6.7 10.85l-1.29.64c-.24.12-.54.12-.78 0l-1.28-.64c-4.11-2.06-6.7-6.26-6.7-10.85V6.5c0-.45.33-.82.77-.87h.04l.12-.02.5-.1c.44-.09 1.06-.25 1.77-.5 1.41-.52 3.14-1.42 4.52-2.97q.26-.28.65-.29m0 18.65.89-.45c3.51-1.76 5.74-5.35 5.74-9.28V7.24l-.06-.02c-.5-.1-1.2-.28-2-.57C15.2 6.15 13.5 5.3 12 3.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldHalfFill.displayName = 'ShieldHalfFill';

// Triple export pattern
export { ShieldHalfFill, ShieldHalfFill as ShieldHalfFillIcon, ShieldHalfFill as SiShieldHalfFill };
export default ShieldHalfFill;
export type { ShieldHalfFillProps };
