import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock3FillProps = Omit<IconBaseProps, 'children'>;

const Clock3Fill = memo(
  forwardRef<SVGSVGElement, Clock3FillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-3-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v5c0 .48.39.88.87.88h4a.88.88 0 0 0 0-1.76h-3.12V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock3Fill.displayName = 'Clock3Fill';

// Triple export pattern (lucide-react style)
export { Clock3Fill, Clock3Fill as Clock3FillIcon, Clock3Fill as SiClock3Fill };
export default Clock3Fill;
export type { Clock3FillProps };
