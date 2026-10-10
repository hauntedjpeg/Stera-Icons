import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock6BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock6BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock6BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M12 6c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

Clock6BoldDuotone.displayName = 'Clock6BoldDuotone';

// Triple export pattern
export { Clock6BoldDuotone, Clock6BoldDuotone as Clock6BoldDuotoneIcon, Clock6BoldDuotone as SiClock6BoldDuotone };
export default Clock6BoldDuotone;
export type { Clock6BoldDuotoneProps };
