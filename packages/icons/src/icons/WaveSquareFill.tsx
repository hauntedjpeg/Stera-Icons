import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveSquareFillProps = Omit<IconBaseProps, 'children'>;

const WaveSquareFill = memo(
  forwardRef<SVGSVGElement, WaveSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.75 3.75c1.38 0 2.5 1.12 2.5 2.5v11.5h6.5V12c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v5.75c0 1.38-1.12 2.5-2.5 2.5h-6.5c-1.38 0-2.5-1.12-2.5-2.5V6.25h-6.5V12c0 .69-.56 1.25-1.25 1.25S1.75 12.69 1.75 12V6.25c0-1.38 1.12-2.5 2.5-2.5z" />
    </IconBase>
  ))
);

WaveSquareFill.displayName = 'WaveSquareFill';

// Triple export pattern
export { WaveSquareFill, WaveSquareFill as WaveSquareFillIcon, WaveSquareFill as SiWaveSquareFill };
export default WaveSquareFill;
export type { WaveSquareFillProps };
