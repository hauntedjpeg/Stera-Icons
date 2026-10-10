import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpiralBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpiralBoldDuotone = memo(
  forwardRef<SVGSVGElement, SpiralBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 13c0 3.87 3.13 7 7 7s7-3.13 7-7h2c0 4.97-4.03 9-9 9s-9-4.03-9-9z" opacity={0.4} />
        <path d="M7 13c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5s-5-2.24-5-5z" opacity={0.4} />
        <path d="M12 10c1.66 0 3 1.34 3 3h-2c0-.55-.45-1-1-1-.52 0-.94.4-1 .9v.2c-.06.5-.48.9-1 .9-.55 0-1-.45-1-1 0-1.66 1.34-3 3-3" />
        <path d="M12 2c6.08 0 11 4.92 11 11 0 .55-.45 1-1 1s-1-.45-1-1c0-4.97-4.03-9-9-9s-9 4.03-9 9H1C1 6.92 5.92 2 12 2" />
        <path d="M12 6c3.87 0 7 3.13 7 7h-2c0-2.76-2.24-5-5-5s-5 2.24-5 5H5c0-3.87 3.13-7 7-7" />
    </IconBase>
  ))
);

SpiralBoldDuotone.displayName = 'SpiralBoldDuotone';

// Triple export pattern
export { SpiralBoldDuotone, SpiralBoldDuotone as SpiralBoldDuotoneIcon, SpiralBoldDuotone as SiSpiralBoldDuotone };
export default SpiralBoldDuotone;
export type { SpiralBoldDuotoneProps };
