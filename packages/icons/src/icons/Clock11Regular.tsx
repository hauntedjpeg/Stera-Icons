import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock11RegularProps = Omit<IconBaseProps, 'children'>;

const Clock11Regular = memo(
  forwardRef<SVGSVGElement, Clock11RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.25c.41 0 .75.34.75.75v5.06l-.02.11-.02.07-.03.07-.03.05-.04.07-.05.06-.05.05-.08.08h-.02l-.04.03-.07.04h-.02l-.09.03-.09.02h-.01l-.09.01h-.06l-.11-.02-.07-.02-.07-.03-.06-.03-.07-.04-.04-.04-.07-.06-.07-.09v-.01l-.03-.04-2-3.46c-.2-.36-.08-.82.28-1.02.35-.21.81-.09 1.02.27l.6 1.04V7c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock11Regular.displayName = 'Clock11Regular';

// Triple export pattern
export { Clock11Regular, Clock11Regular as Clock11RegularIcon, Clock11Regular as SiClock11Regular };
export default Clock11Regular;
export type { Clock11RegularProps };
