import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveTriangleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleRegularDuotone = memo(
  forwardRef<SVGSVGElement, WaveTriangleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.37 11.6c.22-.36.69-.46 1.04-.23.34.22.44.68.22 1.03l-4.5 7q-.22.34-.63.35-.34 0-.57-.27l-.06-.08-4.5-7 1.26-.8 3.87 6.01z" opacity={.4} />
        <path d="M7.5 4.25c.26 0 .5.13.63.34l4.5 7-1.26.81L7.5 6.38 3.63 12.4c-.22.35-.69.45-1.04.23-.34-.23-.44-.69-.22-1.04l4.5-7 .06-.07q.22-.26.57-.27" />
    </IconBase>
  ))
);

WaveTriangleRegularDuotone.displayName = 'WaveTriangleRegularDuotone';

// Triple export pattern
export { WaveTriangleRegularDuotone, WaveTriangleRegularDuotone as WaveTriangleRegularDuotoneIcon, WaveTriangleRegularDuotone as SiWaveTriangleRegularDuotone };
export default WaveTriangleRegularDuotone;
export type { WaveTriangleRegularDuotoneProps };
