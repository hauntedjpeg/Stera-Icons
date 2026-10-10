import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m-.88 4.25c-.34-.34-.9-.34-1.24 0L7.45 8.81c-.38.38-.38 1 0 1.38l2.43 2.43c.34.34.9.34 1.24 0s.34-.9 0-1.24l-1-1h2.13c1.59 0 2.87 1.28 2.88 2.87s-1.3 2.87-2.88 2.88c-.97 0-1.83-.48-2.35-1.22-.28-.4-.82-.49-1.22-.21s-.49.82-.2 1.22c.83 1.18 2.2 1.95 3.77 1.96 2.55 0 4.62-2.08 4.63-4.63s-2.08-4.62-4.63-4.62h-2.14l1-1.01c.35-.34.35-.9 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M9.88 6.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-1 1h2.13c2.55 0 4.62 2.08 4.62 4.63s-2.07 4.62-4.62 4.62c-1.56 0-2.94-.77-3.78-1.95-.28-.4-.18-.94.21-1.22.4-.28.94-.19 1.22.2.52.75 1.38 1.22 2.35 1.22 1.59 0 2.87-1.28 2.87-2.87s-1.28-2.88-2.87-2.88H10.1l1 1.01c.35.34.35.9 0 1.24-.33.34-.89.34-1.23 0l-2.43-2.43c-.38-.38-.38-1 0-1.38z" />
    </IconBase>
  ))
);

RotateCircleLeftFillDuotone.displayName = 'RotateCircleLeftFillDuotone';

// Triple export pattern
export { RotateCircleLeftFillDuotone, RotateCircleLeftFillDuotone as RotateCircleLeftFillDuotoneIcon, RotateCircleLeftFillDuotone as SiRotateCircleLeftFillDuotone };
export default RotateCircleLeftFillDuotone;
export type { RotateCircleLeftFillDuotoneProps };
