import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock3FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock3FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock3FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v5c0 .48.39.88.87.88h4a.88.88 0 0 0 0-1.76h-3.12V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v4.13H16a.88.88 0 0 1 0 1.74h-4a.9.9 0 0 1-.87-.87V7c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

Clock3FillDuotone.displayName = 'Clock3FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock3FillDuotone, Clock3FillDuotone as Clock3FillDuotoneIcon, Clock3FillDuotone as SiClock3FillDuotone };
export default Clock3FillDuotone;
export type { Clock3FillDuotoneProps };
