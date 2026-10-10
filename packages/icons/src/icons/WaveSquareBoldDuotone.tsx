import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveSquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, WaveSquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 11c.55 0 1 .45 1 1v5.75c0 1.24-1 2.25-2.25 2.25h-6.5C12.01 20 11 19 11 17.75V12h2v5.75q.02.23.25.25h6.5q.23-.02.25-.25V12c0-.55.45-1 1-1" opacity={.4} />
        <path d="M10.75 4C11.99 4 13 5 13 6.25V12h-2V6.25c0-.14-.11-.25-.25-.25h-6.5c-.14 0-.25.11-.25.25V12c0 .55-.45 1-1 1s-1-.45-1-1V6.25C2 5.01 3 4 4.25 4z" />
    </IconBase>
  ))
);

WaveSquareBoldDuotone.displayName = 'WaveSquareBoldDuotone';

// Triple export pattern
export { WaveSquareBoldDuotone, WaveSquareBoldDuotone as WaveSquareBoldDuotoneIcon, WaveSquareBoldDuotone as SiWaveSquareBoldDuotone };
export default WaveSquareBoldDuotone;
export type { WaveSquareBoldDuotoneProps };
