import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopCircleBoldProps = Omit<IconBaseProps, 'children'>;

const StopCircleBold = memo(
  forwardRef<SVGSVGElement, StopCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.25 8.25c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-4.5c-.83 0-1.5-.67-1.5-1.5v-4.5c0-.83.67-1.5 1.5-1.5z" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

StopCircleBold.displayName = 'StopCircleBold';

// Triple export pattern
export { StopCircleBold, StopCircleBold as StopCircleBoldIcon, StopCircleBold as SiStopCircleBold };
export default StopCircleBold;
export type { StopCircleBoldProps };
