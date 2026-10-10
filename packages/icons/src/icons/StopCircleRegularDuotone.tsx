import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const StopCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, StopCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M8.25 9.75c0-.83.67-1.5 1.5-1.5h4.5c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-4.5c-.83 0-1.5-.67-1.5-1.5z" />
    </IconBase>
  ))
);

StopCircleRegularDuotone.displayName = 'StopCircleRegularDuotone';

// Triple export pattern
export { StopCircleRegularDuotone, StopCircleRegularDuotone as StopCircleRegularDuotoneIcon, StopCircleRegularDuotone as SiStopCircleRegularDuotone };
export default StopCircleRegularDuotone;
export type { StopCircleRegularDuotoneProps };
