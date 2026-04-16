import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveTriangleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleFillDuotone = memo(
  forwardRef<SVGSVGElement, WaveTriangleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.95 11.32a1.25 1.25 0 0 1 2.1 1.35l-4.5 7a1.25 1.25 0 0 1-2.1 0l-4.5-7 2.1-1.35 3.45 5.37z" opacity={.4} />
        <path d="M7.5 3.75c.43 0 .82.21 1.05.57l4.5 7-2.1 1.35L7.5 7.31l-3.45 5.36a1.25 1.25 0 0 1-2.1-1.35l4.5-7c.23-.36.62-.57 1.05-.57" />
    </IconBase>
  ))
);

WaveTriangleFillDuotone.displayName = 'WaveTriangleFillDuotone';

// Triple export pattern (lucide-react style)
export { WaveTriangleFillDuotone, WaveTriangleFillDuotone as WaveTriangleFillDuotoneIcon, WaveTriangleFillDuotone as SiWaveTriangleFillDuotone };
export default WaveTriangleFillDuotone;
export type { WaveTriangleFillDuotoneProps };
