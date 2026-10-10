import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock10RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock10RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock10RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.25c.41 0 .75.34.75.75v5q0 .1-.03.2l-.02.07-.02.03q0 .04-.03.07l-.02.03-.02.03-.06.08-.07.06-.04.04-.08.04-.05.03-.07.03-.07.02-.11.02h-.17l-.08-.03-.1-.03-.09-.04-3.46-2c-.36-.2-.48-.67-.27-1.03.2-.35.66-.48 1.02-.27l2.34 1.35V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock10RegularDuotone.displayName = 'Clock10RegularDuotone';

// Triple export pattern
export { Clock10RegularDuotone, Clock10RegularDuotone as Clock10RegularDuotoneIcon, Clock10RegularDuotone as SiClock10RegularDuotone };
export default Clock10RegularDuotone;
export type { Clock10RegularDuotoneProps };
