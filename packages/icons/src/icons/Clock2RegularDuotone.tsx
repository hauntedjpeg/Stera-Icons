import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock2RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock2RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock2RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.25c.41 0 .75.34.75.75v3.7l2.34-1.35c.36-.2.82-.08 1.02.28.21.35.09.81-.27 1.02l-3.46 2-.08.04h-.02l-.09.03-.09.02h-.01l-.09.01h-.06l-.11-.02-.07-.02-.07-.03-.06-.03-.06-.04-.06-.05-.05-.05-.08-.08v-.02l-.03-.04-.04-.07v-.02l-.03-.09-.02-.09v-.01l-.01-.09V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock2RegularDuotone.displayName = 'Clock2RegularDuotone';

// Triple export pattern
export { Clock2RegularDuotone, Clock2RegularDuotone as Clock2RegularDuotoneIcon, Clock2RegularDuotone as SiClock2RegularDuotone };
export default Clock2RegularDuotone;
export type { Clock2RegularDuotoneProps };
