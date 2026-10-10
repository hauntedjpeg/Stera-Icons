import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock12BoldProps = Omit<IconBaseProps, 'children'>;

const Clock12Bold = memo(
  forwardRef<SVGSVGElement, Clock12BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock12Bold.displayName = 'Clock12Bold';

// Triple export pattern
export { Clock12Bold, Clock12Bold as Clock12BoldIcon, Clock12Bold as SiClock12Bold };
export default Clock12Bold;
export type { Clock12BoldProps };
