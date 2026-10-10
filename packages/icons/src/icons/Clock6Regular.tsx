import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock6RegularProps = Omit<IconBaseProps, 'children'>;

const Clock6Regular = memo(
  forwardRef<SVGSVGElement, Clock6RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.25c.41 0 .75.34.75.75v9c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock6Regular.displayName = 'Clock6Regular';

// Triple export pattern
export { Clock6Regular, Clock6Regular as Clock6RegularIcon, Clock6Regular as SiClock6Regular };
export default Clock6Regular;
export type { Clock6RegularProps };
