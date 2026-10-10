import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopwatchRegularProps = Omit<IconBaseProps, 'children'>;

const StopwatchRegular = memo(
  forwardRef<SVGSVGElement, StopwatchRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.65 9.29c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-2.26 2.26q.05.2.05.39c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5q.2 0 .39.05z" />
        <path fillRule="evenodd" d="M12 4.75c4.56 0 8.25 3.7 8.25 8.25s-3.7 8.25-8.25 8.25-8.25-3.7-8.25-8.25S7.45 4.75 12 4.75m0 1.5c-3.73 0-6.75 3.02-6.75 6.75s3.02 6.75 6.75 6.75 6.75-3.02 6.75-6.75S15.73 6.25 12 6.25" clipRule="evenodd" />
        <path d="M14 1.75c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

StopwatchRegular.displayName = 'StopwatchRegular';

// Triple export pattern
export { StopwatchRegular, StopwatchRegular as StopwatchRegularIcon, StopwatchRegular as SiStopwatchRegular };
export default StopwatchRegular;
export type { StopwatchRegularProps };
