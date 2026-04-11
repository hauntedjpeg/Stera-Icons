import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSquareFillProps = Omit<IconBaseProps, 'children'>;

const WaveSquareFill = memo(
  forwardRef<SVGSVGElement, WaveSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.75 3.75a2.5 2.5 0 0 1 2.5 2.5v11.5h6.5V12a1.25 1.25 0 1 1 2.5 0v5.75a2.5 2.5 0 0 1-2.5 2.5h-6.5a2.5 2.5 0 0 1-2.5-2.5V6.25h-6.5V12a1.25 1.25 0 1 1-2.5 0V6.25a2.5 2.5 0 0 1 2.5-2.5z" />
    </IconBase>
  ))
);

WaveSquareFill.displayName = 'WaveSquareFill';

// Triple export pattern (lucide-react style)
export { WaveSquareFill, WaveSquareFill as WaveSquareFillIcon, WaveSquareFill as SiWaveSquareFill };
export default WaveSquareFill;
export type { WaveSquareFillProps };
