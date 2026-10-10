import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopCircleFillProps = Omit<IconBaseProps, 'children'>;

const StopCircleFill = memo(
  forwardRef<SVGSVGElement, StopCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13M9.75 8.25c-.83 0-1.5.67-1.5 1.5v4.5c0 .83.67 1.5 1.5 1.5h4.5c.83 0 1.5-.67 1.5-1.5v-4.5c0-.83-.67-1.5-1.5-1.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

StopCircleFill.displayName = 'StopCircleFill';

// Triple export pattern
export { StopCircleFill, StopCircleFill as StopCircleFillIcon, StopCircleFill as SiStopCircleFill };
export default StopCircleFill;
export type { StopCircleFillProps };
