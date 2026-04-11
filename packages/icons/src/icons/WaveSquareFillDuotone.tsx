import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, WaveSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 10.75c.69 0 1.25.56 1.25 1.25v5.75a2.5 2.5 0 0 1-2.5 2.5h-6.5a2.5 2.5 0 0 1-2.5-2.5V12h2.5v5.75h6.5V12c0-.69.56-1.25 1.25-1.25" opacity={.4} />
        <path d="M10.75 3.75a2.5 2.5 0 0 1 2.5 2.5V12h-2.5V6.25h-6.5V12a1.25 1.25 0 1 1-2.5 0V6.25a2.5 2.5 0 0 1 2.5-2.5z" />
    </IconBase>
  ))
);

WaveSquareFillDuotone.displayName = 'WaveSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { WaveSquareFillDuotone, WaveSquareFillDuotone as WaveSquareFillDuotoneIcon, WaveSquareFillDuotone as SiWaveSquareFillDuotone };
export default WaveSquareFillDuotone;
export type { WaveSquareFillDuotoneProps };
