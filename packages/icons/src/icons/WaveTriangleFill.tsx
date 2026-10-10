import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveTriangleFillProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleFill = memo(
  forwardRef<SVGSVGElement, WaveTriangleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 3.75c.43 0 .82.21 1.05.57L16.5 16.7l3.45-5.37c.37-.58 1.15-.75 1.73-.37.58.37.75 1.14.37 1.72l-4.5 7c-.23.36-.62.58-1.05.58s-.82-.22-1.05-.58L7.5 7.31l-3.45 5.36c-.37.58-1.15.75-1.73.38s-.74-1.15-.37-1.73l4.5-7c.23-.36.62-.57 1.05-.57" />
    </IconBase>
  ))
);

WaveTriangleFill.displayName = 'WaveTriangleFill';

// Triple export pattern
export { WaveTriangleFill, WaveTriangleFill as WaveTriangleFillIcon, WaveTriangleFill as SiWaveTriangleFill };
export default WaveTriangleFill;
export type { WaveTriangleFillProps };
