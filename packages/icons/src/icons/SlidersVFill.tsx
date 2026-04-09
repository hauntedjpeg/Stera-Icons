import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersVFillProps = Omit<IconBaseProps, 'children'>;

const SlidersVFill = memo(
  forwardRef<SVGSVGElement, SlidersVFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sliders-v-fill" {...props}>
      <path d="M7 1.13c.48 0 .88.39.88.87v9.23a3.88 3.88 0 0 1 0 7.54V22a.88.88 0 0 1-1.75 0v-3.23a3.88 3.88 0 0 1 0-7.54V2c0-.48.39-.87.87-.87M17 1.13c.48 0 .88.39.88.87v3.23a3.88 3.88 0 0 1 0 7.54V22a.88.88 0 0 1-1.75 0v-9.23a3.88 3.88 0 0 1 0-7.54V2c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

SlidersVFill.displayName = 'SlidersVFill';

// Triple export pattern (lucide-react style)
export { SlidersVFill, SlidersVFill as SlidersVFillIcon, SlidersVFill as SiSlidersVFill };
export default SlidersVFill;
export type { SlidersVFillProps };
