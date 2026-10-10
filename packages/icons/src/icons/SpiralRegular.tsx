import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpiralRegularProps = Omit<IconBaseProps, 'children'>;

const SpiralRegular = memo(
  forwardRef<SVGSVGElement, SpiralRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25c5.94 0 10.75 4.81 10.75 10.75 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-5.1-4.14-9.25-9.25-9.25-5.1 0-9.25 4.14-9.25 9.25 0 4 3.25 7.25 7.25 7.25S17.25 17 17.25 13c0-2.9-2.35-5.25-5.25-5.25S6.75 10.1 6.75 13c0 1.8 1.46 3.25 3.25 3.25 1.8 0 3.25-1.46 3.25-3.25 0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75c0 2.62-2.13 4.75-4.75 4.75S5.25 15.62 5.25 13c0-3.73 3.02-6.75 6.75-6.75s6.75 3.02 6.75 6.75c0 4.83-3.92 8.75-8.75 8.75S1.25 17.83 1.25 13C1.25 7.06 6.06 2.25 12 2.25" />
    </IconBase>
  ))
);

SpiralRegular.displayName = 'SpiralRegular';

// Triple export pattern
export { SpiralRegular, SpiralRegular as SpiralRegularIcon, SpiralRegular as SiSpiralRegular };
export default SpiralRegular;
export type { SpiralRegularProps };
