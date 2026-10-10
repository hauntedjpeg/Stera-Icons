import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PowerFillProps = Omit<IconBaseProps, 'children'>;

const PowerFill = memo(
  forwardRef<SVGSVGElement, PowerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.77 6.46c.5-.49 1.28-.49 1.77 0 3.61 3.61 3.61 9.47 0 13.08s-9.47 3.61-13.08 0-3.61-9.47 0-13.08c.49-.49 1.28-.49 1.77 0 .48.49.48 1.28 0 1.77-2.64 2.63-2.64 6.9 0 9.54 2.63 2.64 6.9 2.64 9.54 0 2.64-2.63 2.64-6.9 0-9.54-.48-.5-.48-1.28 0-1.77" />
        <path d="M12 1.75c.69 0 1.25.56 1.25 1.25v9c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25V3c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

PowerFill.displayName = 'PowerFill';

// Triple export pattern
export { PowerFill, PowerFill as PowerFillIcon, PowerFill as SiPowerFill };
export default PowerFill;
export type { PowerFillProps };
