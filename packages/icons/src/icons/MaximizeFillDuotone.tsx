import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MaximizeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MaximizeFillDuotone = memo(
  forwardRef<SVGSVGElement, MaximizeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 14.75c.69 0 1.25.56 1.25 1.25v1.75c0 .83.67 1.5 1.5 1.5H8c.69 0 1.25.56 1.25 1.25S8.69 21.75 8 21.75H6.25c-2.2 0-4-1.8-4-4V16c0-.69.56-1.25 1.25-1.25M17.75 2.25c2.2 0 4 1.8 4 4V8c0 .69-.56 1.25-1.25 1.25S19.25 8.69 19.25 8V6.25c0-.83-.67-1.5-1.5-1.5H16c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={0.4} />
        <path d="M20.5 14.75c.69 0 1.25.56 1.25 1.25v1.75c0 2.2-1.8 4-4 4H16c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h1.75c.83 0 1.5-.67 1.5-1.5V16c0-.69.56-1.25 1.25-1.25M8 2.25c.69 0 1.25.56 1.25 1.25S8.69 4.75 8 4.75H6.25c-.83 0-1.5.67-1.5 1.5V8c0 .69-.56 1.25-1.25 1.25S2.25 8.69 2.25 8V6.25c0-2.2 1.8-4 4-4z" />
    </IconBase>
  ))
);

MaximizeFillDuotone.displayName = 'MaximizeFillDuotone';

// Triple export pattern
export { MaximizeFillDuotone, MaximizeFillDuotone as MaximizeFillDuotoneIcon, MaximizeFillDuotone as SiMaximizeFillDuotone };
export default MaximizeFillDuotone;
export type { MaximizeFillDuotoneProps };
