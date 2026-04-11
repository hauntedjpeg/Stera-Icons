import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TargetFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TargetFillDuotone = memo(
  forwardRef<SVGSVGElement, TargetFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.38a4.63 4.63 0 1 1 0 9.25 4.63 4.63 0 0 1 0-9.25m0 2.12a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" opacity={0.4} />
        <path d="M12 3.88a8.13 8.13 0 1 1 0 16.25 8.13 8.13 0 0 1 0-16.25m0 1.75a6.37 6.37 0 1 0 0 12.74 6.37 6.37 0 0 0 0-12.74" opacity={0.4} />
        <path d="M12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" />
        <path fillRule="evenodd" d="M12 5.63a6.38 6.38 0 1 1 0 12.75 6.38 6.38 0 0 1 0-12.75m0 1.75a4.62 4.62 0 1 0 0 9.24 4.62 4.62 0 0 0 0-9.25" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 1.75a8.13 8.13 0 1 0 0 16.25 8.13 8.13 0 0 0 0-16.25" clipRule="evenodd" />
    </IconBase>
  ))
);

TargetFillDuotone.displayName = 'TargetFillDuotone';

// Triple export pattern (lucide-react style)
export { TargetFillDuotone, TargetFillDuotone as TargetFillDuotoneIcon, TargetFillDuotone as SiTargetFillDuotone };
export default TargetFillDuotone;
export type { TargetFillDuotoneProps };
