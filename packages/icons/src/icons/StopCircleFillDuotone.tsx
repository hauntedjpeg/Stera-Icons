import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StopCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, StopCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75M9.75 8.25c-.83 0-1.5.67-1.5 1.5v4.5c0 .83.67 1.5 1.5 1.5h4.5c.83 0 1.5-.67 1.5-1.5v-4.5c0-.83-.67-1.5-1.5-1.5z" clipRule="evenodd" opacity={.4} />
        <path d="M8.25 9.75c0-.83.67-1.5 1.5-1.5h4.5c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-4.5a1.5 1.5 0 0 1-1.5-1.5z" />
    </IconBase>
  ))
);

StopCircleFillDuotone.displayName = 'StopCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { StopCircleFillDuotone, StopCircleFillDuotone as StopCircleFillDuotoneIcon, StopCircleFillDuotone as SiStopCircleFillDuotone };
export default StopCircleFillDuotone;
export type { StopCircleFillDuotoneProps };
