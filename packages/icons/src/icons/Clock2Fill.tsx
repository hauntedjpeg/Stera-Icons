import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock2FillProps = Omit<IconBaseProps, 'children'>;

const Clock2Fill = memo(
  forwardRef<SVGSVGElement, Clock2FillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-2-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v5.13l.02.06.09.24.01.03.06.08.02.03.17.15.02.01.09.05h.01l.07.04h.01l.07.02.12.03h.24l.06-.02.07-.02.05-.01.04-.02h.02l.06-.04 3.47-2a.88.88 0 0 0-.87-1.52l-2.15 1.24V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock2Fill.displayName = 'Clock2Fill';

// Triple export pattern (lucide-react style)
export { Clock2Fill, Clock2Fill as Clock2FillIcon, Clock2Fill as SiClock2Fill };
export default Clock2Fill;
export type { Clock2FillProps };
