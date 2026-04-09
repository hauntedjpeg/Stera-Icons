import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock12FillProps = Omit<IconBaseProps, 'children'>;

const Clock12Fill = memo(
  forwardRef<SVGSVGElement, Clock12FillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-12-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v5a.88.88 0 0 0 1.74 0V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock12Fill.displayName = 'Clock12Fill';

// Triple export pattern (lucide-react style)
export { Clock12Fill, Clock12Fill as Clock12FillIcon, Clock12Fill as SiClock12Fill };
export default Clock12Fill;
export type { Clock12FillProps };
