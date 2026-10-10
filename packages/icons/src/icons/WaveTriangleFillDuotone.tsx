import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveTriangleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleFillDuotone = memo(
  forwardRef<SVGSVGElement, WaveTriangleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.95 11.32c.37-.58 1.15-.75 1.73-.37.58.37.74 1.14.37 1.72l-4.5 7c-.23.36-.62.58-1.05.58s-.82-.22-1.05-.58l-4.5-7 2.1-1.35 3.45 5.37z" opacity={.4} />
        <path d="M7.5 3.75c.43 0 .82.21 1.05.57l4.5 7-2.1 1.35L7.5 7.31l-3.45 5.36c-.37.58-1.15.75-1.73.38s-.74-1.15-.37-1.73l4.5-7c.23-.36.62-.57 1.05-.57" />
    </IconBase>
  ))
);

WaveTriangleFillDuotone.displayName = 'WaveTriangleFillDuotone';

// Triple export pattern
export { WaveTriangleFillDuotone, WaveTriangleFillDuotone as WaveTriangleFillDuotoneIcon, WaveTriangleFillDuotone as SiWaveTriangleFillDuotone };
export default WaveTriangleFillDuotone;
export type { WaveTriangleFillDuotoneProps };
