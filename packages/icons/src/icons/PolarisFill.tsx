import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PolarisFillProps = Omit<IconBaseProps, 'children'>;

const PolarisFill = memo(
  forwardRef<SVGSVGElement, PolarisFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.75c.69 0 1.25.56 1.25 1.25v5.98l2.37-2.36c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76l-2.36 2.37H20c.69 0 1.25.55 1.25 1.25 0 .69-.56 1.25-1.25 1.25h-4.99l2.37 2.37c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-2.37-2.36V21c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-5.98l-2.37 2.36c-.48.5-1.28.5-1.76 0-.5-.48-.5-1.28 0-1.76l2.37-2.37H4c-.69 0-1.25-.56-1.25-1.25 0-.7.56-1.25 1.25-1.25h4.98L6.62 8.38c-.5-.48-.5-1.28 0-1.76.48-.5 1.28-.5 1.76 0l2.37 2.36V3c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

PolarisFill.displayName = 'PolarisFill';

// Triple export pattern
export { PolarisFill, PolarisFill as PolarisFillIcon, PolarisFill as SiPolarisFill };
export default PolarisFill;
export type { PolarisFillProps };
