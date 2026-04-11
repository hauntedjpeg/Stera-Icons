import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveTriangleFillProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleFill = memo(
  forwardRef<SVGSVGElement, WaveTriangleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 3.75c.42 0 .82.21 1.05.57L16.5 16.7l3.45-5.37a1.25 1.25 0 0 1 2.1 1.35l-4.5 7a1.25 1.25 0 0 1-2.1 0L7.5 7.31l-3.45 5.36a1.25 1.25 0 0 1-2.1-1.35l4.5-7c.23-.36.62-.57 1.05-.57" />
    </IconBase>
  ))
);

WaveTriangleFill.displayName = 'WaveTriangleFill';

// Triple export pattern (lucide-react style)
export { WaveTriangleFill, WaveTriangleFill as WaveTriangleFillIcon, WaveTriangleFill as SiWaveTriangleFill };
export default WaveTriangleFill;
export type { WaveTriangleFillProps };
