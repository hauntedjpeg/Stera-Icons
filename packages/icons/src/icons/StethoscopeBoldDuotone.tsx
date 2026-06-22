import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StethoscopeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const StethoscopeBoldDuotone = memo(
  forwardRef<SVGSVGElement, StethoscopeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 15.25c0 3.45-2.8 6.25-6.25 6.25h-.25a6 6 0 0 1-5.93-5.07 7 7 0 0 0 2.03-.03 4 4 0 0 0 3.9 3.1h.25c2.35 0 4.25-1.9 4.25-4.25v-.92a3 3 0 0 0 2 0z" opacity={.4} />
        <path d="M11 2.5a1 1 0 0 1 1 1 3 3 0 0 1 3 3V10a6.5 6.5 0 0 1-13 0V6.5a3 3 0 0 1 3-3 1 1 0 0 1 2 0v2a1 1 0 0 1-2 .1v-.1a1 1 0 0 0-1 1V10a4.5 4.5 0 1 0 9 0V6.5a1 1 0 0 0-1-1v.1a1 1 0 0 1-2-.1v-2a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M19 8.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
    </IconBase>
  ))
);

StethoscopeBoldDuotone.displayName = 'StethoscopeBoldDuotone';

// Triple export pattern (lucide-react style)
export { StethoscopeBoldDuotone, StethoscopeBoldDuotone as StethoscopeBoldDuotoneIcon, StethoscopeBoldDuotone as SiStethoscopeBoldDuotone };
export default StethoscopeBoldDuotone;
export type { StethoscopeBoldDuotoneProps };
