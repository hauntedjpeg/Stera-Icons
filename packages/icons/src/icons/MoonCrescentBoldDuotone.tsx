import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoonCrescentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.94 14.76c-.28.07-.53.27-.66.55q-.42.9-1.04 1.69H18C12.48 17 8 12.52 8 7q0-1.05.21-2.05.88-.46 1.84-.71c.4-.1.68-.42.74-.8q-.01.13-.07.25Q10.02 5.2 10 7c0 4.42 3.58 8 8 8q1 0 1.94-.24M10.78 3.02l-.1-.25zM9.98 2.29q.13.01.24.07.3.13.44.39-.24-.38-.68-.46" opacity={0.4} />
        <path d="M9.57 2.3c.53-.13 1.08.2 1.2.73.14.53-.18 1.08-.72 1.21C6.57 5.11 4 8.26 4 12c0 4.42 3.58 8 8 8 3.23 0 6.02-1.92 7.28-4.69.23-.5.82-.72 1.32-.49s.73.82.5 1.32C19.53 19.6 16.05 22 12 22 6.48 22 2 17.52 2 12c0-4.68 3.22-8.61 7.57-9.7" />
    </IconBase>
  ))
);

MoonCrescentBoldDuotone.displayName = 'MoonCrescentBoldDuotone';

// Triple export pattern
export { MoonCrescentBoldDuotone, MoonCrescentBoldDuotone as MoonCrescentBoldDuotoneIcon, MoonCrescentBoldDuotone as SiMoonCrescentBoldDuotone };
export default MoonCrescentBoldDuotone;
export type { MoonCrescentBoldDuotoneProps };
