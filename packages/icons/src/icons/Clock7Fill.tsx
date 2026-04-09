import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7FillProps = Omit<IconBaseProps, 'children'>;

const Clock7Fill = memo(
  forwardRef<SVGSVGElement, Clock7FillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-7-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v4.76l-1.89 3.27a.88.88 0 0 0 1.52.87l2-3.46v-.01l.1-.24v-.06l.01-.12V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock7Fill.displayName = 'Clock7Fill';

// Triple export pattern (lucide-react style)
export { Clock7Fill, Clock7Fill as Clock7FillIcon, Clock7Fill as SiClock7Fill };
export default Clock7Fill;
export type { Clock7FillProps };
