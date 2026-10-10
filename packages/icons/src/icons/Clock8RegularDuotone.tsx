import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock8RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock8RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock8RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.25c.41 0 .75.34.75.75v5l-.02.18-.02.05-.03.09-.02.04-.05.08-.04.04-.06.07-.08.06-.03.02-.03.02-3.46 2c-.36.2-.82.08-1.02-.28-.21-.35-.09-.81.27-1.02l3.09-1.78V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock8RegularDuotone.displayName = 'Clock8RegularDuotone';

// Triple export pattern
export { Clock8RegularDuotone, Clock8RegularDuotone as Clock8RegularDuotoneIcon, Clock8RegularDuotone as SiClock8RegularDuotone };
export default Clock8RegularDuotone;
export type { Clock8RegularDuotoneProps };
