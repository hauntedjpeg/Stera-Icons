import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpiralFillProps = Omit<IconBaseProps, 'children'>;

const SpiralFill = memo(
  forwardRef<SVGSVGElement, SpiralFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.75c6.21 0 11.25 5.04 11.25 11.25a1.25 1.25 0 1 1-2.5 0 8.75 8.75 0 1 0-17.5 0 6.75 6.75 0 0 0 13.5 0 4.75 4.75 0 1 0-9.5 0 2.75 2.75 0 1 0 5.5 0 .75.75 0 0 0-1.5 0 1.25 1.25 0 1 1-2.5 0 3.25 3.25 0 0 1 6.5 0 5.25 5.25 0 1 1-10.5 0 7.25 7.25 0 0 1 14.5 0 9.25 9.25 0 0 1-18.5 0C.75 6.79 5.79 1.75 12 1.75" />
    </IconBase>
  ))
);

SpiralFill.displayName = 'SpiralFill';

// Triple export pattern (lucide-react style)
export { SpiralFill, SpiralFill as SpiralFillIcon, SpiralFill as SiSpiralFill };
export default SpiralFill;
export type { SpiralFillProps };
