import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StethoscopeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const StethoscopeBoldDuotone = memo(
  forwardRef<SVGSVGElement, StethoscopeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 15.25c0 3.45-2.8 6.25-6.25 6.25h-.25c-3 0-5.48-2.2-5.93-5.07q.45.07.93.07.56 0 1.1-.1c.41 1.78 2 3.1 3.9 3.1h.25c2.35 0 4.25-1.9 4.25-4.25v-.92q.47.16 1 .17.53 0 1-.17z" opacity={.4} />
        <path d="M11 2.5c.55 0 1 .45 1 1 1.66 0 3 1.34 3 3V10c0 3.59-2.91 6.5-6.5 6.5S2 13.59 2 10V6.5c0-1.66 1.34-3 3-3 0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1-.52 0-.94-.4-1-.9v-.1c-.55 0-1 .45-1 1V10c0 2.49 2.01 4.5 4.5 4.5S13 12.49 13 10V6.5c0-.55-.45-1-1-1v.1c-.06.5-.48.9-1 .9-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M19 8.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

StethoscopeBoldDuotone.displayName = 'StethoscopeBoldDuotone';

// Triple export pattern
export { StethoscopeBoldDuotone, StethoscopeBoldDuotone as StethoscopeBoldDuotoneIcon, StethoscopeBoldDuotone as SiStethoscopeBoldDuotone };
export default StethoscopeBoldDuotone;
export type { StethoscopeBoldDuotoneProps };
