import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock9RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock9RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock9RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.25c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock9RegularDuotone.displayName = 'Clock9RegularDuotone';

// Triple export pattern
export { Clock9RegularDuotone, Clock9RegularDuotone as Clock9RegularDuotoneIcon, Clock9RegularDuotone as SiClock9RegularDuotone };
export default Clock9RegularDuotone;
export type { Clock9RegularDuotoneProps };
