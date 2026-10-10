import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersVFillProps = Omit<IconBaseProps, 'children'>;

const SlidersVFill = memo(
  forwardRef<SVGSVGElement, SlidersVFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 1.13c.48 0 .88.39.88.87v9.23c1.71.4 3 1.93 3 3.77s-1.29 3.38-3 3.77V22c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-3.23c-1.72-.4-3-1.93-3-3.77s1.28-3.38 3-3.77V2c0-.48.39-.87.87-.87M17 1.13c.48 0 .88.39.88.87v3.23c1.71.4 3 1.93 3 3.77s-1.29 3.38-3 3.77V22c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-9.23c-1.72-.4-3-1.93-3-3.77s1.28-3.38 3-3.77V2c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

SlidersVFill.displayName = 'SlidersVFill';

// Triple export pattern
export { SlidersVFill, SlidersVFill as SlidersVFillIcon, SlidersVFill as SiSlidersVFill };
export default SlidersVFill;
export type { SlidersVFillProps };
