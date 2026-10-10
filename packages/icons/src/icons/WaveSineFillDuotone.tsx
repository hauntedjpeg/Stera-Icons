import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSineFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveSineFillDuotone = memo(
  forwardRef<SVGSVGElement, WaveSineFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.77 11.78c.12-.68.77-1.13 1.45-1.01s1.13.77 1.01 1.45c-.38 2.15-1.04 4.07-1.93 5.49-.87 1.37-2.14 2.54-3.8 2.54s-2.93-1.17-3.8-2.54c-.9-1.42-1.55-3.34-1.93-5.5l2.46-.43c.34 1.95.92 3.53 1.58 4.6.7 1.09 1.31 1.37 1.69 1.37s1-.28 1.69-1.38c.66-1.06 1.24-2.64 1.58-4.59" opacity={.4} />
        <path d="M7.5 3.75c1.66 0 2.93 1.17 3.8 2.54.9 1.42 1.55 3.34 1.93 5.5l-2.46.43c-.34-1.95-.92-3.54-1.58-4.6-.7-1.09-1.31-1.37-1.7-1.37-.37 0-.98.28-1.68 1.38-.66 1.05-1.24 2.64-1.58 4.59-.12.68-.77 1.13-1.45 1.01s-1.13-.77-1.01-1.45C2.15 9.63 2.8 7.71 3.7 6.3c.87-1.37 2.14-2.54 3.8-2.54" />
    </IconBase>
  ))
);

WaveSineFillDuotone.displayName = 'WaveSineFillDuotone';

// Triple export pattern
export { WaveSineFillDuotone, WaveSineFillDuotone as WaveSineFillDuotoneIcon, WaveSineFillDuotone as SiWaveSineFillDuotone };
export default WaveSineFillDuotone;
export type { WaveSineFillDuotoneProps };
