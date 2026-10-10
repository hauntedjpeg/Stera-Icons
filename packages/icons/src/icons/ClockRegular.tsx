import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClockRegularProps = Omit<IconBaseProps, 'children'>;

const ClockRegular = memo(
  forwardRef<SVGSVGElement, ClockRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.25c.41 0 .75.34.75.75v4.69l2.6 2.6c.3.3.3.78 0 1.07-.28.3-.76.3-1.05 0l-2.83-2.83q-.09-.09-.13-.19-.02-.02-.03-.05l-.05-.16-.01-.13V7c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ClockRegular.displayName = 'ClockRegular';

// Triple export pattern
export { ClockRegular, ClockRegular as ClockRegularIcon, ClockRegular as SiClockRegular };
export default ClockRegular;
export type { ClockRegularProps };
