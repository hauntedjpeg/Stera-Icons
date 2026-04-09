import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, MoreCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75M7.5 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path d="M7.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

MoreCircleFillDuotone.displayName = 'MoreCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { MoreCircleFillDuotone, MoreCircleFillDuotone as MoreCircleFillDuotoneIcon, MoreCircleFillDuotone as SiMoreCircleFillDuotone };
export default MoreCircleFillDuotone;
export type { MoreCircleFillDuotoneProps };
