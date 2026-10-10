import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock1RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock1RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock1RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.25c.41 0 .75.34.75.75v2.2l.6-1.04c.2-.36.67-.48 1.03-.27.35.2.48.66.27 1.02l-2 3.47-.02.03-.01.02-.08.08-.06.06-.04.04-.07.04-.06.03-.07.03-.07.02-.11.02h-.16l-.1-.03-.08-.02-.02-.01-.07-.04-.04-.02-.02-.01-.08-.08-.05-.05-.05-.06-.04-.07-.03-.05-.03-.07-.02-.07-.02-.17V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock1RegularDuotone.displayName = 'Clock1RegularDuotone';

// Triple export pattern
export { Clock1RegularDuotone, Clock1RegularDuotone as Clock1RegularDuotoneIcon, Clock1RegularDuotone as SiClock1RegularDuotone };
export default Clock1RegularDuotone;
export type { Clock1RegularDuotoneProps };
