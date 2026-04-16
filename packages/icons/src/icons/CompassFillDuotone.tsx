import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CompassFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CompassFillDuotone = memo(
  forwardRef<SVGSVGElement, CompassFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m4.62 5.25a.9.9 0 0 0-.9-.2l-6 2a1 1 0 0 0-.51.45l-.04.1-2 6a.88.88 0 0 0 1.1 1.1l6-2q.42-.16.56-.55l2-6a.9.9 0 0 0-.21-.9" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M15.72 7.17a.88.88 0 0 1 1.11 1.1l-2 6a.9.9 0 0 1-.55.56l-6 2a.88.88 0 0 1-1.11-1.1l2-6 .04-.1q.16-.34.51-.46zM12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassFillDuotone.displayName = 'CompassFillDuotone';

// Triple export pattern (lucide-react style)
export { CompassFillDuotone, CompassFillDuotone as CompassFillDuotoneIcon, CompassFillDuotone as SiCompassFillDuotone };
export default CompassFillDuotone;
export type { CompassFillDuotoneProps };
