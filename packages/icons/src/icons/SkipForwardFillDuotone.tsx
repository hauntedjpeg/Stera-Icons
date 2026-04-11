import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SkipForwardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SkipForwardFillDuotone = memo(
  forwardRef<SVGSVGElement, SkipForwardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.5 4.13c.48 0 .88.39.88.87v14a.88.88 0 0 1-1.75 0V5c0-.48.39-.87.87-.87" opacity={.4} />
        <path d="M5.54 4c.36.01.67.15.91.29q.44.24 1.02.64l7.02 4.68q.62.4 1.02.71c.27.22.54.49.7.87.22.52.22 1.1 0 1.62-.16.38-.43.65-.7.87q-.4.31-1.02.71l-7.02 4.68q-.58.4-1.02.64c-.28.16-.64.32-1.06.3A1.9 1.9 0 0 1 4 19.25a2 2 0 0 1-.35-1.04q-.03-.5-.02-1.2V6.98q0-.71.02-1.2A2 2 0 0 1 4 4.73c.34-.44.84-.71 1.39-.74z" />
    </IconBase>
  ))
);

SkipForwardFillDuotone.displayName = 'SkipForwardFillDuotone';

// Triple export pattern (lucide-react style)
export { SkipForwardFillDuotone, SkipForwardFillDuotone as SkipForwardFillDuotoneIcon, SkipForwardFillDuotone as SiSkipForwardFillDuotone };
export default SkipForwardFillDuotone;
export type { SkipForwardFillDuotoneProps };
