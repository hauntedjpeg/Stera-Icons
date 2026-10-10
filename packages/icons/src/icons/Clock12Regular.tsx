import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock12RegularProps = Omit<IconBaseProps, 'children'>;

const Clock12Regular = memo(
  forwardRef<SVGSVGElement, Clock12RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.25c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock12Regular.displayName = 'Clock12Regular';

// Triple export pattern
export { Clock12Regular, Clock12Regular as Clock12RegularIcon, Clock12Regular as SiClock12Regular };
export default Clock12Regular;
export type { Clock12RegularProps };
