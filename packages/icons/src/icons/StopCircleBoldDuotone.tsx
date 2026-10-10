import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const StopCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, StopCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M8.25 9.75c0-.83.67-1.5 1.5-1.5h4.5c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-4.5c-.83 0-1.5-.67-1.5-1.5z" />
    </IconBase>
  ))
);

StopCircleBoldDuotone.displayName = 'StopCircleBoldDuotone';

// Triple export pattern
export { StopCircleBoldDuotone, StopCircleBoldDuotone as StopCircleBoldDuotoneIcon, StopCircleBoldDuotone as SiStopCircleBoldDuotone };
export default StopCircleBoldDuotone;
export type { StopCircleBoldDuotoneProps };
