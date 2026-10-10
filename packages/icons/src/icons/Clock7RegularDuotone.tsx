import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock7RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock7RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.25c.41 0 .75.34.75.75v5.1l-.03.1-.02.08-.01.02-.04.07-2 3.47c-.2.36-.67.48-1.02.27-.36-.2-.49-.66-.28-1.02l1.9-3.3V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock7RegularDuotone.displayName = 'Clock7RegularDuotone';

// Triple export pattern
export { Clock7RegularDuotone, Clock7RegularDuotone as Clock7RegularDuotoneIcon, Clock7RegularDuotone as SiClock7RegularDuotone };
export default Clock7RegularDuotone;
export type { Clock7RegularDuotoneProps };
