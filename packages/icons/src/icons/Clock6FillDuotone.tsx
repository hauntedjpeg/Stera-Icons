import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock6FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock6FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock6FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-6-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v9a.88.88 0 0 0 1.74 0V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v9a.88.88 0 0 1-1.76 0V7c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

Clock6FillDuotone.displayName = 'Clock6FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock6FillDuotone, Clock6FillDuotone as Clock6FillDuotoneIcon, Clock6FillDuotone as SiClock6FillDuotone };
export default Clock6FillDuotone;
export type { Clock6FillDuotoneProps };
