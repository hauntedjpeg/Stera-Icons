import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.75q.38 0 .75.04v7.46h7.46q.04.38.04.75 0 .38-.04.75h-7.46v7.46q-.37.04-.75.04-.37 0-.75-.04v-7.46H3.79q-.04-.37-.04-.75 0-.37.04-.75h7.46V3.79q.38-.04.75-.04" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideCrossRegularDuotone.displayName = 'CircleDivideCrossRegularDuotone';

// Triple export pattern
export { CircleDivideCrossRegularDuotone, CircleDivideCrossRegularDuotone as CircleDivideCrossRegularDuotoneIcon, CircleDivideCrossRegularDuotone as SiCircleDivideCrossRegularDuotone };
export default CircleDivideCrossRegularDuotone;
export type { CircleDivideCrossRegularDuotoneProps };
