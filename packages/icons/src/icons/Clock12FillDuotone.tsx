import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock12FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock12FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock12FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-12-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v5a.88.88 0 0 0 1.74 0V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v5a.88.88 0 0 1-1.76 0V7c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

Clock12FillDuotone.displayName = 'Clock12FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock12FillDuotone, Clock12FillDuotone as Clock12FillDuotoneIcon, Clock12FillDuotone as SiClock12FillDuotone };
export default Clock12FillDuotone;
export type { Clock12FillDuotoneProps };
