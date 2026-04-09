import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock10FillProps = Omit<IconBaseProps, 'children'>;

const Clock10Fill = memo(
  forwardRef<SVGSVGElement, Clock10FillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-10-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v3.48L8.97 9.24a.88.88 0 0 0-.87 1.52l3.46 2h.02l.03.02.04.02.03.01.06.03h.02l.1.02h.04l.02.01h.19l.05-.01q.16-.03.28-.1l.03-.02.04-.03.03-.03.04-.02.02-.02a.9.9 0 0 0 .28-.64V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock10Fill.displayName = 'Clock10Fill';

// Triple export pattern (lucide-react style)
export { Clock10Fill, Clock10Fill as Clock10FillIcon, Clock10Fill as SiClock10Fill };
export default Clock10Fill;
export type { Clock10FillProps };
