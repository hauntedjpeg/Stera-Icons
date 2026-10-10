import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PolarisFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PolarisFillDuotone = memo(
  forwardRef<SVGSVGElement, PolarisFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.75 13.25v1.77l-2.37 2.36c-.48.5-1.28.5-1.76 0-.5-.48-.5-1.28 0-1.76l2.37-2.37zM17.38 15.62c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-2.37-2.36v-1.78h1.76zM15.62 6.62c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76l-2.36 2.36h-1.77V8.99zM6.62 6.62c.48-.5 1.28-.5 1.76 0l2.37 2.36v1.76H8.98L6.62 8.39c-.5-.48-.5-1.28 0-1.76" opacity={0.4} />
        <path d="M12 1.75c.69 0 1.25.56 1.25 1.25v7.75H20c.69 0 1.25.55 1.25 1.25 0 .69-.56 1.25-1.25 1.25h-6.75V21c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-7.75H4c-.69 0-1.25-.56-1.25-1.25 0-.7.56-1.25 1.25-1.25h6.75V3c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

PolarisFillDuotone.displayName = 'PolarisFillDuotone';

// Triple export pattern
export { PolarisFillDuotone, PolarisFillDuotone as PolarisFillDuotoneIcon, PolarisFillDuotone as SiPolarisFillDuotone };
export default PolarisFillDuotone;
export type { PolarisFillDuotoneProps };
