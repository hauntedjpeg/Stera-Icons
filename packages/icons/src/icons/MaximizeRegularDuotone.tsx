import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MaximizeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MaximizeRegularDuotone = memo(
  forwardRef<SVGSVGElement, MaximizeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15.25c.41 0 .75.34.75.75v1.75c0 1.1.9 2 2 2H8a.75.75 0 0 1 0 1.5H6.25a3.5 3.5 0 0 1-3.5-3.5V16c0-.41.34-.75.75-.75M17.75 2.75a3.5 3.5 0 0 1 3.5 3.5V8a.75.75 0 0 1-1.5 0V6.25a2 2 0 0 0-2-2H16a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path d="M20.5 15.25c.41 0 .75.34.75.75v1.75a3.5 3.5 0 0 1-3.5 3.5H16a.75.75 0 0 1 0-1.5h1.75a2 2 0 0 0 2-2V16c0-.41.34-.75.75-.75M8 2.75a.75.75 0 0 1 0 1.5H6.25a2 2 0 0 0-2 2V8a.75.75 0 0 1-1.5 0V6.25a3.5 3.5 0 0 1 3.5-3.5z" />
    </IconBase>
  ))
);

MaximizeRegularDuotone.displayName = 'MaximizeRegularDuotone';

// Triple export pattern (lucide-react style)
export { MaximizeRegularDuotone, MaximizeRegularDuotone as MaximizeRegularDuotoneIcon, MaximizeRegularDuotone as SiMaximizeRegularDuotone };
export default MaximizeRegularDuotone;
export type { MaximizeRegularDuotoneProps };
