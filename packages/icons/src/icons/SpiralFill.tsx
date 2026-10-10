import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpiralFillProps = Omit<IconBaseProps, 'children'>;

const SpiralFill = memo(
  forwardRef<SVGSVGElement, SpiralFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.75c6.21 0 11.25 5.04 11.25 11.25 0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25c0-4.83-3.92-8.75-8.75-8.75S3.25 8.17 3.25 13c0 3.73 3.02 6.75 6.75 6.75s6.75-3.02 6.75-6.75c0-2.62-2.13-4.75-4.75-4.75S7.25 10.38 7.25 13c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75c0 .69-.56 1.25-1.25 1.25S8.75 13.69 8.75 13c0-1.8 1.46-3.25 3.25-3.25 1.8 0 3.25 1.46 3.25 3.25 0 2.9-2.35 5.25-5.25 5.25S4.75 15.9 4.75 13C4.75 9 8 5.75 12 5.75S19.25 9 19.25 13c0 5.1-4.14 9.25-9.25 9.25C4.9 22.25.75 18.11.75 13 .75 6.79 5.79 1.75 12 1.75" />
    </IconBase>
  ))
);

SpiralFill.displayName = 'SpiralFill';

// Triple export pattern
export { SpiralFill, SpiralFill as SpiralFillIcon, SpiralFill as SiSpiralFill };
export default SpiralFill;
export type { SpiralFillProps };
