import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StopCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, StopCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13M9.75 8.25c-.83 0-1.5.67-1.5 1.5v4.5c0 .83.67 1.5 1.5 1.5h4.5c.83 0 1.5-.67 1.5-1.5v-4.5c0-.83-.67-1.5-1.5-1.5z" clipRule="evenodd" opacity={.4} />
        <path d="M8.25 9.75c0-.83.67-1.5 1.5-1.5h4.5c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-4.5c-.83 0-1.5-.67-1.5-1.5z" />
    </IconBase>
  ))
);

StopCircleFillDuotone.displayName = 'StopCircleFillDuotone';

// Triple export pattern
export { StopCircleFillDuotone, StopCircleFillDuotone as StopCircleFillDuotoneIcon, StopCircleFillDuotone as SiStopCircleFillDuotone };
export default StopCircleFillDuotone;
export type { StopCircleFillDuotoneProps };
