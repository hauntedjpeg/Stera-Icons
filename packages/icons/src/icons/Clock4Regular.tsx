import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4RegularProps = Omit<IconBaseProps, 'children'>;

const Clock4Regular = memo(
  forwardRef<SVGSVGElement, Clock4RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.25c.41 0 .75.34.75.75v4.57l3.09 1.78c.36.2.48.67.27 1.03-.2.35-.66.48-1.02.27l-3.46-2-.04-.02-.02-.01-.08-.08-.05-.05-.05-.06-.04-.06-.03-.06-.03-.07-.02-.07-.02-.17V7c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock4Regular.displayName = 'Clock4Regular';

// Triple export pattern
export { Clock4Regular, Clock4Regular as Clock4RegularIcon, Clock4Regular as SiClock4Regular };
export default Clock4Regular;
export type { Clock4RegularProps };
