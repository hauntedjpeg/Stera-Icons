import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PowerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PowerBoldDuotone = memo(
  forwardRef<SVGSVGElement, PowerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.95 6.64c.4-.4 1.02-.4 1.41 0 3.52 3.51 3.52 9.2 0 12.72-3.51 3.52-9.21 3.52-12.72 0-3.52-3.51-3.52-9.21 0-12.72.39-.4 1.02-.4 1.41 0 .39.39.39 1.02 0 1.41-2.73 2.73-2.73 7.17 0 9.9s7.17 2.73 9.9 0 2.73-7.17 0-9.9c-.39-.4-.39-1.02 0-1.41" opacity={.4} />
        <path d="M12 2c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

PowerBoldDuotone.displayName = 'PowerBoldDuotone';

// Triple export pattern
export { PowerBoldDuotone, PowerBoldDuotone as PowerBoldDuotoneIcon, PowerBoldDuotone as SiPowerBoldDuotone };
export default PowerBoldDuotone;
export type { PowerBoldDuotoneProps };
