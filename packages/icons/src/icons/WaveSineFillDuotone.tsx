import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSineFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveSineFillDuotone = memo(
  forwardRef<SVGSVGElement, WaveSineFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wave-sine-fill-duotone" {...props}>
      <path d="M19.77 11.78a1.25 1.25 0 0 1 2.46.44 16 16 0 0 1-1.93 5.49c-.87 1.37-2.14 2.54-3.8 2.54s-2.93-1.17-3.8-2.54a16 16 0 0 1-1.93-5.5l2.46-.43c.34 1.95.92 3.53 1.58 4.6.7 1.09 1.31 1.37 1.69 1.37s1-.28 1.69-1.38a13 13 0 0 0 1.58-4.59" opacity={.4} />
        <path d="M7.5 3.75c1.66 0 2.93 1.17 3.8 2.54a16 16 0 0 1 1.93 5.5l-2.46.43a13 13 0 0 0-1.58-4.6c-.7-1.09-1.31-1.37-1.69-1.37s-1 .28-1.69 1.38a13 13 0 0 0-1.58 4.59 1.25 1.25 0 0 1-2.46-.44A16 16 0 0 1 3.7 6.3c.87-1.37 2.14-2.54 3.8-2.54" />
    </IconBase>
  ))
);

WaveSineFillDuotone.displayName = 'WaveSineFillDuotone';

// Triple export pattern (lucide-react style)
export { WaveSineFillDuotone, WaveSineFillDuotone as WaveSineFillDuotoneIcon, WaveSineFillDuotone as SiWaveSineFillDuotone };
export default WaveSineFillDuotone;
export type { WaveSineFillDuotoneProps };
