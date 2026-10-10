import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WaveTriangleRegularProps = Omit<IconBaseProps, 'children'>;

const WaveTriangleRegular = memo(
  forwardRef<SVGSVGElement, WaveTriangleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 4.25c.26 0 .5.13.63.34l8.37 13.02 3.87-6.02c.22-.35.69-.45 1.04-.22.34.22.44.68.22 1.03l-4.5 7q-.23.34-.63.35-.34 0-.57-.27l-.06-.08L7.5 6.38 3.63 12.4c-.22.35-.69.45-1.04.23-.34-.23-.44-.69-.22-1.04l4.5-7 .06-.07q.22-.26.57-.27" />
    </IconBase>
  ))
);

WaveTriangleRegular.displayName = 'WaveTriangleRegular';

// Triple export pattern
export { WaveTriangleRegular, WaveTriangleRegular as WaveTriangleRegularIcon, WaveTriangleRegular as SiWaveTriangleRegular };
export default WaveTriangleRegular;
export type { WaveTriangleRegularProps };
