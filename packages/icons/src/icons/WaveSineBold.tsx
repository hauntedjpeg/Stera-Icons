import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSineBoldProps = Omit<IconBaseProps, 'children'>;

const WaveSineBold = memo(
  forwardRef<SVGSVGElement, WaveSineBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 4c1.53 0 2.74 1.08 3.59 2.43.87 1.38 1.52 3.26 1.9 5.4l.14.72c.35 1.64.87 3 1.47 3.96.71 1.12 1.4 1.49 1.9 1.49s1.19-.37 1.9-1.5c.69-1.09 1.27-2.7 1.62-4.67.1-.55.6-.91 1.15-.82s.91.62.82 1.16c-.38 2.14-1.03 4.02-1.9 5.4-.85 1.35-2.06 2.43-3.59 2.43s-2.74-1.08-3.59-2.43c-.76-1.2-1.36-2.8-1.74-4.6l-.15-.8c-.35-1.97-.93-3.58-1.62-4.68C8.69 6.37 8 6 7.5 6s-1.19.37-1.9 1.5C4.91 8.58 4.33 10.2 4 12.16c-.1.55-.62.91-1.16.82-.55-.1-.91-.62-.81-1.16.37-2.14 1.02-4.02 1.9-5.4C4.75 5.08 5.96 4 7.5 4" />
    </IconBase>
  ))
);

WaveSineBold.displayName = 'WaveSineBold';

// Triple export pattern
export { WaveSineBold, WaveSineBold as WaveSineBoldIcon, WaveSineBold as SiWaveSineBold };
export default WaveSineBold;
export type { WaveSineBoldProps };
