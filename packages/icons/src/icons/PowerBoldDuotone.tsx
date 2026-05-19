import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PowerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PowerBoldDuotone = memo(
  forwardRef<SVGSVGElement, PowerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.95 6.64a1 1 0 0 1 1.41 0 9 9 0 1 1-12.72 0 1 1 0 0 1 1.41 1.41 7 7 0 1 0 9.9 0 1 1 0 0 1 0-1.41" opacity={.4} />
        <path d="M12 2a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

PowerBoldDuotone.displayName = 'PowerBoldDuotone';

// Triple export pattern (lucide-react style)
export { PowerBoldDuotone, PowerBoldDuotone as PowerBoldDuotoneIcon, PowerBoldDuotone as SiPowerBoldDuotone };
export default PowerBoldDuotone;
export type { PowerBoldDuotoneProps };
