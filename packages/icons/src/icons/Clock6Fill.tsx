import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock6FillProps = Omit<IconBaseProps, 'children'>;

const Clock6Fill = memo(
  forwardRef<SVGSVGElement, Clock6FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v9a.88.88 0 0 0 1.74 0V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock6Fill.displayName = 'Clock6Fill';

// Triple export pattern (lucide-react style)
export { Clock6Fill, Clock6Fill as Clock6FillIcon, Clock6Fill as SiClock6Fill };
export default Clock6Fill;
export type { Clock6FillProps };
