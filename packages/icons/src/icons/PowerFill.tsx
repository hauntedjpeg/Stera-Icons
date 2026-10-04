import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PowerFillProps = Omit<IconBaseProps, 'children'>;

const PowerFill = memo(
  forwardRef<SVGSVGElement, PowerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.77 6.46a1.25 1.25 0 0 1 1.77 0 9.25 9.25 0 1 1-13.08 0 1.25 1.25 0 0 1 1.77 1.77 6.75 6.75 0 1 0 9.54 0 1.25 1.25 0 0 1 0-1.77" />
        <path d="M12 1.75c.7 0 1.25.56 1.25 1.25v9a1.25 1.25 0 0 1-2.5 0V3c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

PowerFill.displayName = 'PowerFill';

// Triple export pattern (lucide-react style)
export { PowerFill, PowerFill as PowerFillIcon, PowerFill as SiPowerFill };
export default PowerFill;
export type { PowerFillProps };
