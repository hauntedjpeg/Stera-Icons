import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVFillDuotone = memo(
  forwardRef<SVGSVGElement, MoreCircleVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13M12 15c-.83 0-1.5.67-1.5 1.5S11.17 18 12 18s1.5-.67 1.5-1.5S12.83 15 12 15m0-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5M12 6c-.83 0-1.5.67-1.5 1.5S11.17 9 12 9s1.5-.67 1.5-1.5S12.83 6 12 6" clipRule="evenodd" opacity={.4} />
        <path d="M12 9c-.83 0-1.5-.67-1.5-1.5S11.17 6 12 6s1.5.67 1.5 1.5S12.83 9 12 9M12 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5M12 18c-.83 0-1.5-.67-1.5-1.5S11.17 15 12 15s1.5.67 1.5 1.5S12.83 18 12 18" />
    </IconBase>
  ))
);

MoreCircleVFillDuotone.displayName = 'MoreCircleVFillDuotone';

// Triple export pattern
export { MoreCircleVFillDuotone, MoreCircleVFillDuotone as MoreCircleVFillDuotoneIcon, MoreCircleVFillDuotone as SiMoreCircleVFillDuotone };
export default MoreCircleVFillDuotone;
export type { MoreCircleVFillDuotoneProps };
