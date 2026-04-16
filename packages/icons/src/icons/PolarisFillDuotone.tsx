import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PolarisFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PolarisFillDuotone = memo(
  forwardRef<SVGSVGElement, PolarisFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.75 13.25v1.77l-2.37 2.36a1.25 1.25 0 0 1-1.76-1.76l2.37-2.37zM17.38 15.62a1.25 1.25 0 0 1-1.76 1.76l-2.37-2.36v-1.78h1.76zM15.62 6.62a1.25 1.25 0 1 1 1.76 1.76l-2.36 2.36h-1.77V8.99zM6.62 6.62a1.25 1.25 0 0 1 1.76 0l2.37 2.36v1.76H8.98L6.62 8.39a1.25 1.25 0 0 1 0-1.76" opacity={0.4} />
        <path d="M12 1.75c.69 0 1.25.56 1.25 1.25v7.75H20a1.25 1.25 0 0 1 0 2.5h-6.75V21a1.25 1.25 0 1 1-2.5 0v-7.75H4a1.25 1.25 0 1 1 0-2.5h6.75V3c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

PolarisFillDuotone.displayName = 'PolarisFillDuotone';

// Triple export pattern (lucide-react style)
export { PolarisFillDuotone, PolarisFillDuotone as PolarisFillDuotoneIcon, PolarisFillDuotone as SiPolarisFillDuotone };
export default PolarisFillDuotone;
export type { PolarisFillDuotoneProps };
