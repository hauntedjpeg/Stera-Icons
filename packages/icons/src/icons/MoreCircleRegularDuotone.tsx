import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, MoreCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M9 12c0 .83-.67 1.5-1.5 1.5S6 12.83 6 12s.67-1.5 1.5-1.5S9 11.17 9 12M13.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M18 12c0 .83-.67 1.5-1.5 1.5S15 12.83 15 12s.67-1.5 1.5-1.5 1.5.67 1.5 1.5" />
    </IconBase>
  ))
);

MoreCircleRegularDuotone.displayName = 'MoreCircleRegularDuotone';

// Triple export pattern
export { MoreCircleRegularDuotone, MoreCircleRegularDuotone as MoreCircleRegularDuotoneIcon, MoreCircleRegularDuotone as SiMoreCircleRegularDuotone };
export default MoreCircleRegularDuotone;
export type { MoreCircleRegularDuotoneProps };
