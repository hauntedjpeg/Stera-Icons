import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentRegularDuotone = memo(
  forwardRef<SVGSVGElement, MoonCrescentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.54 3.41q0 .1-.05.17Q9.77 5.16 9.75 7c0 4.56 3.7 8.25 8.25 8.25q1.04 0 2-.25h.05c-.23.04-.44.19-.54.42q-.32.69-.75 1.3-.37.03-.76.03c-5.38 0-9.75-4.37-9.75-9.75q0-1.3.33-2.5.67-.32 1.41-.5c.3-.08.5-.31.55-.59M20.9 15.47l.02.08v.04zM10.12 2.59q.1.04.16.1-.09-.08-.21-.12z" opacity={0.4} />
        <path d="M9.63 2.54c.4-.1.8.15.9.55s-.14.8-.54.9C6.41 4.9 3.75 8.15 3.75 12c0 4.56 3.7 8.25 8.25 8.25 3.33 0 6.2-1.98 7.5-4.83.18-.38.62-.54 1-.37s.54.61.37 1c-1.53 3.36-4.93 5.7-8.87 5.7-5.38 0-9.75-4.37-9.75-9.75 0-4.57 3.14-8.4 7.38-9.46" />
    </IconBase>
  ))
);

MoonCrescentRegularDuotone.displayName = 'MoonCrescentRegularDuotone';

// Triple export pattern
export { MoonCrescentRegularDuotone, MoonCrescentRegularDuotone as MoonCrescentRegularDuotoneIcon, MoonCrescentRegularDuotone as SiMoonCrescentRegularDuotone };
export default MoonCrescentRegularDuotone;
export type { MoonCrescentRegularDuotoneProps };
