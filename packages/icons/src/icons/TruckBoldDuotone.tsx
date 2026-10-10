import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TruckBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TruckBoldDuotone = memo(
  forwardRef<SVGSVGElement, TruckBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.5c1.66 0 3 1.34 3 3h2.04c.53 0 1.05.2 1.46.54l2.45 2.1c.67.57 1.05 1.4 1.05 2.28v3.83c0 1.24-1 2.25-2.25 2.25h-.29q.04-.24.04-.5 0-.82-.34-1.5h.59q.23-.02.25-.25v-3.83q-.01-.46-.35-.76l-2.45-2.1q-.07-.06-.16-.06H15v5.15c-.84.25-1.55.8-2 1.55V6.5c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v8q0 .27.13.5-.62.86-.63 2v.1C2.6 16.58 2 15.6 2 14.5v-8c0-1.66 1.34-3 3-3z" opacity={0.4} />
        <path d="M12.84 15.5q-.34.68-.34 1.5 0 .26.04.5h-2.08q.04-.24.04-.5 0-.82-.34-1.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M7 13.5c1.93 0 3.5 1.57 3.5 3.5S8.93 20.5 7 20.5 3.5 18.93 3.5 17s1.57-3.5 3.5-3.5m0 2c-.83 0-1.5.67-1.5 1.5q0 .27.09.5c.2.58.76 1 1.41 1s1.2-.42 1.41-1q.09-.23.09-.5c0-.83-.67-1.5-1.5-1.5M16 13.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5m0 2c-.83 0-1.5.67-1.5 1.5q0 .27.09.5c.2.58.76 1 1.41 1s1.2-.42 1.41-1q.09-.23.09-.5c0-.83-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckBoldDuotone.displayName = 'TruckBoldDuotone';

// Triple export pattern
export { TruckBoldDuotone, TruckBoldDuotone as TruckBoldDuotoneIcon, TruckBoldDuotone as SiTruckBoldDuotone };
export default TruckBoldDuotone;
export type { TruckBoldDuotoneProps };
