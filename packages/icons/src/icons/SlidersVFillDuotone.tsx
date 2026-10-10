import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlidersVFillDuotone = memo(
  forwardRef<SVGSVGElement, SlidersVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.88 22c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-3.23q.42.1.87.1t.88-.1zM17.88 22c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-9.23q.42.1.87.1.46 0 .88-.1zM7 1.13c.48 0 .88.39.88.87v9.23q-.43-.1-.88-.1-.46 0-.87.1V2c0-.48.39-.87.87-.87M17 1.13c.48 0 .88.39.88.87v3.23q-.43-.1-.88-.1-.46 0-.87.1V2c0-.48.39-.87.87-.87" opacity={0.4} />
        <path d="M7 11.13c2.14 0 3.88 1.73 3.88 3.87S9.14 18.88 7 18.88 3.13 17.14 3.13 15 4.86 11.13 7 11.13M17 5.13c2.14 0 3.88 1.73 3.88 3.87s-1.74 3.88-3.88 3.88-3.87-1.74-3.87-3.88S14.86 5.13 17 5.13" />
    </IconBase>
  ))
);

SlidersVFillDuotone.displayName = 'SlidersVFillDuotone';

// Triple export pattern
export { SlidersVFillDuotone, SlidersVFillDuotone as SlidersVFillDuotoneIcon, SlidersVFillDuotone as SiSlidersVFillDuotone };
export default SlidersVFillDuotone;
export type { SlidersVFillDuotoneProps };
