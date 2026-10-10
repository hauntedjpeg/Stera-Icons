import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LampBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LampBoldDuotone = memo(
  forwardRef<SVGSVGElement, LampBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 18.13c1.34.35 2.5 1.38 2.5 2.87 0 .55-.45 1-1 1h-5c-.55 0-1-.45-1-1 0-1.5 1.16-2.52 2.5-2.87V14h2z" opacity={.4} />
        <path fillRule="evenodd" d="M13.15 2c1.51 0 2.9.86 3.57 2.21l3.09 6.17c.83 1.66-.38 3.62-2.24 3.62H6.43c-1.86 0-3.07-1.96-2.24-3.62l3.09-6.17C7.95 2.86 9.34 2 10.86 2zm-2.3 2c-.75 0-1.45.43-1.78 1.1l-3.09 6.18c-.17.33.08.72.45.72h11.14c.38 0 .62-.4.45-.72L14.94 5.1C14.6 4.43 13.9 4 13.14 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

LampBoldDuotone.displayName = 'LampBoldDuotone';

// Triple export pattern
export { LampBoldDuotone, LampBoldDuotone as LampBoldDuotoneIcon, LampBoldDuotone as SiLampBoldDuotone };
export default LampBoldDuotone;
export type { LampBoldDuotoneProps };
