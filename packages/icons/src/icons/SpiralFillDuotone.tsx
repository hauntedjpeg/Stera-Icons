import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpiralFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpiralFillDuotone = memo(
  forwardRef<SVGSVGElement, SpiralFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="spiral-fill-duotone" {...props}>
      <path d="M3.25 13a6.75 6.75 0 0 0 13.5 0h2.5a9.25 9.25 0 0 1-18.5 0z" opacity={0.4} />
        <path d="M7.25 13a2.75 2.75 0 1 0 5.5 0h2.5a5.25 5.25 0 1 1-10.5 0z" opacity={0.4} />
        <path d="M12 9.75c1.8 0 3.25 1.46 3.25 3.25h-2.5a.75.75 0 0 0-1.5 0 1.25 1.25 0 1 1-2.5 0c0-1.8 1.46-3.25 3.25-3.25" />
        <path d="M12 1.75c6.21 0 11.25 5.04 11.25 11.25a1.25 1.25 0 1 1-2.5 0 8.75 8.75 0 1 0-17.5 0H.75C.75 6.79 5.79 1.75 12 1.75" />
        <path d="M12 5.75c4 0 7.25 3.25 7.25 7.25h-2.5a4.75 4.75 0 1 0-9.5 0h-2.5C4.75 9 8 5.75 12 5.75" />
    </IconBase>
  ))
);

SpiralFillDuotone.displayName = 'SpiralFillDuotone';

// Triple export pattern (lucide-react style)
export { SpiralFillDuotone, SpiralFillDuotone as SpiralFillDuotoneIcon, SpiralFillDuotone as SiSpiralFillDuotone };
export default SpiralFillDuotone;
export type { SpiralFillDuotoneProps };
