import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlidersVFillDuotone = memo(
  forwardRef<SVGSVGElement, SlidersVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sliders-v-fill-duotone" {...props}>
      <path d="M7.88 22a.88.88 0 0 1-1.75 0v-3.23a4 4 0 0 0 1.75 0zM17.88 22a.88.88 0 0 1-1.75 0v-9.23a4 4 0 0 0 1.75 0zM7 1.13c.48 0 .88.39.88.87v9.23a4 4 0 0 0-1.75 0V2c0-.48.39-.87.87-.87M17 1.13c.48 0 .88.39.88.87v3.23a4 4 0 0 0-1.75 0V2c0-.48.39-.87.87-.87" opacity={0.4} />
        <path d="M7 11.13a3.88 3.88 0 1 1 0 7.75 3.88 3.88 0 0 1 0-7.75M17 5.13a3.88 3.88 0 1 1 0 7.75 3.88 3.88 0 0 1 0-7.76" />
    </IconBase>
  ))
);

SlidersVFillDuotone.displayName = 'SlidersVFillDuotone';

// Triple export pattern (lucide-react style)
export { SlidersVFillDuotone, SlidersVFillDuotone as SlidersVFillDuotoneIcon, SlidersVFillDuotone as SiSlidersVFillDuotone };
export default SlidersVFillDuotone;
export type { SlidersVFillDuotoneProps };
