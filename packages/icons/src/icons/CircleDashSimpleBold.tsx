import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDashSimpleBold = memo(
  forwardRef<SVGSVGElement, CircleDashSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 18.93c.48-.28 1.09-.11 1.37.36.27.48.11 1.1-.37 1.37-1.47.85-3.18 1.34-5 1.34s-3.53-.49-5-1.34c-.48-.28-.64-.89-.37-1.37.28-.47.9-.64 1.37-.36 1.18.68 2.54 1.07 4 1.07s2.82-.39 4-1.07M3.34 7c.28-.48.89-.64 1.37-.37.47.28.64.9.36 1.37C4.39 9.18 4 10.54 4 12s.39 2.82 1.07 4c.28.48.11 1.09-.36 1.37-.48.27-1.1.11-1.37-.37C2.49 15.53 2 13.82 2 12s.49-3.53 1.34-5M19.3 6.63c.47-.27 1.08-.11 1.36.37.85 1.47 1.34 3.18 1.34 5s-.49 3.53-1.34 5c-.28.48-.89.64-1.37.37-.47-.28-.64-.9-.36-1.37.68-1.18 1.07-2.54 1.07-4s-.39-2.82-1.07-4c-.28-.48-.11-1.09.36-1.37M12 2c1.82 0 3.53.49 5 1.34.48.28.64.89.37 1.37-.28.47-.9.64-1.37.36C14.82 4.39 13.46 4 12 4s-2.82.39-4 1.07c-.48.28-1.09.11-1.37-.36-.27-.48-.11-1.1.37-1.37C8.47 2.49 10.18 2 12 2" />
    </IconBase>
  ))
);

CircleDashSimpleBold.displayName = 'CircleDashSimpleBold';

// Triple export pattern
export { CircleDashSimpleBold, CircleDashSimpleBold as CircleDashSimpleBoldIcon, CircleDashSimpleBold as SiCircleDashSimpleBold };
export default CircleDashSimpleBold;
export type { CircleDashSimpleBoldProps };
