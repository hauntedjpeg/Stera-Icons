import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock7FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock7FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-7-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v4.76l-1.89 3.27a.88.88 0 0 0 1.52.87l2-3.46v-.01l.1-.24v-.09l.01-.1V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .87.39.87.87v5.14l-.02.05-.09.24-2 3.47a.88.88 0 0 1-1.52-.87l1.88-3.27V7c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

Clock7FillDuotone.displayName = 'Clock7FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock7FillDuotone, Clock7FillDuotone as Clock7FillDuotoneIcon, Clock7FillDuotone as SiClock7FillDuotone };
export default Clock7FillDuotone;
export type { Clock7FillDuotoneProps };
