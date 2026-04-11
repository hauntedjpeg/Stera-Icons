import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock9FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock9FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock9FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v4.13H8a.88.88 0 0 0 0 1.74h4c.48 0 .88-.39.88-.87V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v5c0 .48-.4.88-.88.88H8a.88.88 0 0 1 0-1.76h3.13V7c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

Clock9FillDuotone.displayName = 'Clock9FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock9FillDuotone, Clock9FillDuotone as Clock9FillDuotoneIcon, Clock9FillDuotone as SiClock9FillDuotone };
export default Clock9FillDuotone;
export type { Clock9FillDuotoneProps };
