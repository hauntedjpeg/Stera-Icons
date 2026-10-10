import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock3RegularProps = Omit<IconBaseProps, 'children'>;

const Clock3Regular = memo(
  forwardRef<SVGSVGElement, Clock3RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.25c.41 0 .75.34.75.75v4.25H16c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock3Regular.displayName = 'Clock3Regular';

// Triple export pattern
export { Clock3Regular, Clock3Regular as Clock3RegularIcon, Clock3Regular as SiClock3Regular };
export default Clock3Regular;
export type { Clock3RegularProps };
