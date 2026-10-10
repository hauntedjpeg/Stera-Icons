import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock9BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock9BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock9BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M12 6c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1h3V7c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

Clock9BoldDuotone.displayName = 'Clock9BoldDuotone';

// Triple export pattern
export { Clock9BoldDuotone, Clock9BoldDuotone as Clock9BoldDuotoneIcon, Clock9BoldDuotone as SiClock9BoldDuotone };
export default Clock9BoldDuotone;
export type { Clock9BoldDuotoneProps };
