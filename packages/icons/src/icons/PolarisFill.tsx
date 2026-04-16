import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PolarisFillProps = Omit<IconBaseProps, 'children'>;

const PolarisFill = memo(
  forwardRef<SVGSVGElement, PolarisFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.75c.69 0 1.25.56 1.25 1.25v5.98l2.37-2.36a1.25 1.25 0 1 1 1.76 1.76l-2.36 2.37H20a1.25 1.25 0 0 1 0 2.5h-4.99l2.37 2.37a1.25 1.25 0 0 1-1.76 1.76l-2.37-2.36V21a1.25 1.25 0 1 1-2.5 0v-5.98l-2.37 2.36a1.25 1.25 0 1 1-1.76-1.76l2.37-2.37H4a1.25 1.25 0 1 1 0-2.5h4.98L6.62 8.38a1.25 1.25 0 1 1 1.76-1.76l2.37 2.36V3c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

PolarisFill.displayName = 'PolarisFill';

// Triple export pattern (lucide-react style)
export { PolarisFill, PolarisFill as PolarisFillIcon, PolarisFill as SiPolarisFill };
export default PolarisFill;
export type { PolarisFillProps };
