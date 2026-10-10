import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock11RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock11RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock11RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.25c.41 0 .75.34.75.75v5.06l-.02.11-.02.07-.03.07-.03.05-.04.07-.05.06-.05.05-.08.08h-.02l-.04.03-.07.04h-.02l-.09.03-.09.02h-.01l-.09.01h-.06l-.11-.02-.07-.02-.07-.03-.06-.03-.07-.04-.04-.04-.07-.06-.07-.08v-.02l-.03-.04-2-3.46c-.2-.36-.08-.82.28-1.02.35-.21.81-.09 1.02.27l.6 1.04V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock11RegularDuotone.displayName = 'Clock11RegularDuotone';

// Triple export pattern
export { Clock11RegularDuotone, Clock11RegularDuotone as Clock11RegularDuotoneIcon, Clock11RegularDuotone as SiClock11RegularDuotone };
export default Clock11RegularDuotone;
export type { Clock11RegularDuotoneProps };
