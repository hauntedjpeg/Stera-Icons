import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersVBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlidersVBoldDuotone = memo(
  forwardRef<SVGSVGElement, SlidersVBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 22c0 .55-.45 1-1 1s-1-.45-1-1v-3.13q.48.13 1 .13t1-.13zM18 22c0 .55-.45 1-1 1s-1-.45-1-1v-9.13q.48.13 1 .13t1-.13zM7 1c.55 0 1 .45 1 1v9.13Q7.52 11 7 11t-1 .13V2c0-.55.45-1 1-1M17 1c.55 0 1 .45 1 1v3.13Q17.52 5 17 5t-1 .13V2c0-.55.45-1 1-1" opacity={0.4} />
        <path fillRule="evenodd" d="M11 15c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4m-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2M21 9c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4m-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

SlidersVBoldDuotone.displayName = 'SlidersVBoldDuotone';

// Triple export pattern
export { SlidersVBoldDuotone, SlidersVBoldDuotone as SlidersVBoldDuotoneIcon, SlidersVBoldDuotone as SiSlidersVBoldDuotone };
export default SlidersVBoldDuotone;
export type { SlidersVBoldDuotoneProps };
