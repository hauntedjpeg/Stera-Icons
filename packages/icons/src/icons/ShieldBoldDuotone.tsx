import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldBoldDuotone = memo(
  forwardRef<SVGSVGElement, ShieldBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 1.96c1.35 1.52 3.06 2.42 4.47 2.93q1.07.36 1.74.5l.5.1.12.01h.03c.5.06.89.49.89 1v4.17c0 4.64-2.62 8.88-6.77 10.96l-1.28.64q.28-.15.44-.45c.25-.5.05-1.1-.44-1.34l-.45-.22.83-.42c3.48-1.74 5.67-5.29 5.67-9.17V7.34c-.5-.11-1.19-.29-1.97-.57-1.36-.5-3.04-1.33-4.53-2.72q.38-.36.75-.76c.34-.38.33-.96 0-1.33" opacity={.4} />
        <path d="M11.25 1.96c.37-.41 1-.45 1.41-.08.42.37.45 1 .09 1.4-1.65 1.86-3.69 2.9-5.28 3.49-.78.28-1.47.46-1.97.57v3.33c0 3.88 2.2 7.43 5.67 9.17l1.28.64c.5.25.7.85.44 1.34-.24.5-.84.7-1.34.45l-1.28-.64C6.12 19.55 3.5 15.3 3.5 10.67V6.5c0-.5.38-.94.89-1h.03q.05 0 .12-.02.18-.01.5-.09c.43-.1 1.04-.25 1.74-.5 1.4-.51 3.12-1.4 4.47-2.93" />
    </IconBase>
  ))
);

ShieldBoldDuotone.displayName = 'ShieldBoldDuotone';

// Triple export pattern
export { ShieldBoldDuotone, ShieldBoldDuotone as ShieldBoldDuotoneIcon, ShieldBoldDuotone as SiShieldBoldDuotone };
export default ShieldBoldDuotone;
export type { ShieldBoldDuotoneProps };
