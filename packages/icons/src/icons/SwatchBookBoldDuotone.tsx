import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SwatchBookBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SwatchBookBoldDuotone = memo(
  forwardRef<SVGSVGElement, SwatchBookBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.93c1.17-1.12 3.04-1.1 4.2.05l2.82 2.83c1.16 1.15 1.17 3.02.05 4.2 1.62.03 2.93 1.36 2.93 3v4c0 1.65-1.34 3-3 3H7c2.76 0 5-2.25 5-5.01v-.76l5.6-5.6c.4-.4.4-1.03 0-1.42L14.79 6.4c-.4-.39-1.03-.39-1.42 0L12 7.76V4.93M11.07 20H19c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-1.93z" clipRule="evenodd" opacity={.4} />
        <path d="M7 15.63c.76 0 1.38.61 1.38 1.37S7.76 18.38 7 18.38 5.63 17.76 5.63 17s.61-1.37 1.37-1.37" />
        <path fillRule="evenodd" d="M9 2c1.66 0 3 1.34 3 3v12c0 2.76-2.24 5-5 5s-5-2.24-5-5V5c0-1.66 1.34-3 3-3zM5 4c-.55 0-1 .45-1 1v12c0 1.66 1.34 3 3 3s3-1.34 3-3V5c0-.55-.45-1-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

SwatchBookBoldDuotone.displayName = 'SwatchBookBoldDuotone';

// Triple export pattern
export { SwatchBookBoldDuotone, SwatchBookBoldDuotone as SwatchBookBoldDuotoneIcon, SwatchBookBoldDuotone as SiSwatchBookBoldDuotone };
export default SwatchBookBoldDuotone;
export type { SwatchBookBoldDuotoneProps };
