import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m2.12 4.25c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l1 1h-2.13c-2.55 0-4.62 2.08-4.62 4.63s2.07 4.63 4.62 4.63c1.56 0 2.94-.78 3.78-1.96.28-.4.18-.94-.21-1.22-.4-.28-.94-.19-1.22.2-.52.75-1.38 1.22-2.35 1.22-1.59 0-2.87-1.28-2.87-2.87s1.28-2.87 2.87-2.87h2.14l-1 1c-.35.34-.35.9 0 1.24.33.34.89.34 1.23 0l2.43-2.43c.38-.38.38-1 0-1.38z" clipRule="evenodd" opacity={.4} />
        <path d="M12.88 6.38c.34-.34.9-.34 1.24 0l2.43 2.43c.38.38.38 1 0 1.38l-2.43 2.43c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l1-1h-2.13c-1.59 0-2.87 1.28-2.87 2.87s1.28 2.87 2.87 2.87c.97 0 1.83-.47 2.35-1.21.28-.4.82-.49 1.22-.21s.49.82.2 1.22c-.83 1.18-2.2 1.95-3.77 1.95-2.55 0-4.62-2.07-4.62-4.62s2.07-4.63 4.62-4.63h2.14l-1-1c-.35-.34-.35-.9 0-1.24" />
    </IconBase>
  ))
);

RotateCircleRightFillDuotone.displayName = 'RotateCircleRightFillDuotone';

// Triple export pattern
export { RotateCircleRightFillDuotone, RotateCircleRightFillDuotone as RotateCircleRightFillDuotoneIcon, RotateCircleRightFillDuotone as SiRotateCircleRightFillDuotone };
export default RotateCircleRightFillDuotone;
export type { RotateCircleRightFillDuotoneProps };
