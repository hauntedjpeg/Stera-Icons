import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersVRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlidersVRegularDuotone = memo(
  forwardRef<SVGSVGElement, SlidersVRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.75 22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.33q.37.08.75.08t.75-.08zM17.75 22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-9.33q.37.08.75.08t.75-.08zM7 1.25c.41 0 .75.34.75.75v9.32q-.37-.06-.75-.07-.38 0-.75.07V2c0-.41.34-.75.75-.75M17 1.25c.41 0 .75.34.75.75v3.32q-.37-.07-.75-.07t-.75.07V2c0-.41.34-.75.75-.75" opacity={0.4} />
        <path fillRule="evenodd" d="M7 11.25c2.07 0 3.75 1.68 3.75 3.75S9.07 18.75 7 18.75 3.25 17.07 3.25 15 4.93 11.25 7 11.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25M17 5.25c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75-3.75-1.68-3.75-3.75S14.93 5.25 17 5.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

SlidersVRegularDuotone.displayName = 'SlidersVRegularDuotone';

// Triple export pattern
export { SlidersVRegularDuotone, SlidersVRegularDuotone as SlidersVRegularDuotoneIcon, SlidersVRegularDuotone as SiSlidersVRegularDuotone };
export default SlidersVRegularDuotone;
export type { SlidersVRegularDuotoneProps };
