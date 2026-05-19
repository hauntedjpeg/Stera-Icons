import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PowerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PowerRegularDuotone = memo(
  forwardRef<SVGSVGElement, PowerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.13 6.81c.29-.29.76-.29 1.06 0a8.75 8.75 0 1 1-12.38 0 .75.75 0 0 1 1.06 1.06 7.25 7.25 0 1 0 10.26 0 .75.75 0 0 1 0-1.06" opacity={.4} />
        <path d="M12 2.25c.41 0 .75.34.75.75v9a.75.75 0 0 1-1.5 0V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

PowerRegularDuotone.displayName = 'PowerRegularDuotone';

// Triple export pattern (lucide-react style)
export { PowerRegularDuotone, PowerRegularDuotone as PowerRegularDuotoneIcon, PowerRegularDuotone as SiPowerRegularDuotone };
export default PowerRegularDuotone;
export type { PowerRegularDuotoneProps };
