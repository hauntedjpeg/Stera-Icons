import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MaximizeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MaximizeFillDuotone = memo(
  forwardRef<SVGSVGElement, MaximizeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 14.75c.69 0 1.25.56 1.25 1.25v1.75c0 .83.67 1.5 1.5 1.5H8a1.25 1.25 0 1 1 0 2.5H6.25a4 4 0 0 1-4-4V16c0-.69.56-1.25 1.25-1.25M17.75 2.25a4 4 0 0 1 4 4V8a1.25 1.25 0 1 1-2.5 0V6.25c0-.83-.67-1.5-1.5-1.5H16a1.25 1.25 0 1 1 0-2.5z" opacity={0.4} />
        <path d="M20.5 14.75c.69 0 1.25.56 1.25 1.25v1.75a4 4 0 0 1-4 4H16a1.25 1.25 0 1 1 0-2.5h1.75c.83 0 1.5-.67 1.5-1.5V16c0-.69.56-1.25 1.25-1.25M8 2.25a1.25 1.25 0 1 1 0 2.5H6.25c-.83 0-1.5.67-1.5 1.5V8a1.25 1.25 0 1 1-2.5 0V6.25a4 4 0 0 1 4-4z" />
    </IconBase>
  ))
);

MaximizeFillDuotone.displayName = 'MaximizeFillDuotone';

// Triple export pattern (lucide-react style)
export { MaximizeFillDuotone, MaximizeFillDuotone as MaximizeFillDuotoneIcon, MaximizeFillDuotone as SiMaximizeFillDuotone };
export default MaximizeFillDuotone;
export type { MaximizeFillDuotoneProps };
