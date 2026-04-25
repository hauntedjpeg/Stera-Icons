import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSineFillProps = Omit<IconBaseProps, 'children'>;

const WaveSineFill = memo(
  forwardRef<SVGSVGElement, WaveSineFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 3.75c1.66 0 2.93 1.17 3.8 2.54a16 16 0 0 1 1.93 5.5c.34 1.94.92 3.53 1.58 4.58.7 1.1 1.31 1.38 1.69 1.38s1-.28 1.69-1.38a13 13 0 0 0 1.58-4.59 1.25 1.25 0 0 1 2.46.44 16 16 0 0 1-1.93 5.49c-.87 1.37-2.14 2.54-3.8 2.54s-2.93-1.17-3.8-2.54a16 16 0 0 1-1.93-5.5 13 13 0 0 0-1.58-4.58c-.7-1.1-1.31-1.38-1.7-1.38-.37 0-.98.28-1.68 1.38a13 13 0 0 0-1.58 4.59 1.25 1.25 0 0 1-2.46-.44A16 16 0 0 1 3.7 6.3c.87-1.37 2.14-2.54 3.8-2.54" />
    </IconBase>
  ))
);

WaveSineFill.displayName = 'WaveSineFill';

// Triple export pattern (lucide-react style)
export { WaveSineFill, WaveSineFill as WaveSineFillIcon, WaveSineFill as SiWaveSineFill };
export default WaveSineFill;
export type { WaveSineFillProps };
