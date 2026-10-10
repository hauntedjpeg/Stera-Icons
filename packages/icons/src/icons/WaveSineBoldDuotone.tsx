import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSineBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveSineBoldDuotone = memo(
  forwardRef<SVGSVGElement, WaveSineBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 4c1.53 0 2.74 1.08 3.59 2.43.87 1.38 1.52 3.26 1.9 5.4l-1.98.34C10.67 10.2 10.1 8.6 9.4 7.5 8.69 6.37 8 6 7.5 6s-1.19.37-1.9 1.5C4.91 8.58 4.33 10.2 4 12.16c-.1.55-.62.91-1.16.82-.55-.1-.91-.62-.82-1.16.38-2.14 1.03-4.02 1.9-5.4C4.76 5.08 5.97 4 7.5 4" />
        <path d="M20.01 11.83c.1-.55.62-.91 1.16-.81.55.1.91.6.82 1.15-.38 2.14-1.03 4.02-1.9 5.4-.85 1.35-2.06 2.43-3.59 2.43s-2.74-1.08-3.59-2.43c-.87-1.38-1.52-3.26-1.9-5.4l1.98-.34c.34 1.97.92 3.58 1.61 4.68.71 1.12 1.4 1.49 1.9 1.49s1.19-.37 1.9-1.5c.69-1.09 1.27-2.7 1.61-4.67" opacity={.4} />
    </IconBase>
  ))
);

WaveSineBoldDuotone.displayName = 'WaveSineBoldDuotone';

// Triple export pattern
export { WaveSineBoldDuotone, WaveSineBoldDuotone as WaveSineBoldDuotoneIcon, WaveSineBoldDuotone as SiWaveSineBoldDuotone };
export default WaveSineBoldDuotone;
export type { WaveSineBoldDuotoneProps };
