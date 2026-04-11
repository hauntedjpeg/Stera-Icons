import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock8FillProps = Omit<IconBaseProps, 'children'>;

const Clock8Fill = memo(
  forwardRef<SVGSVGElement, Clock8FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v4.5L8.1 13.23a.88.88 0 0 0 .87 1.52l3.44-1.99a1 1 0 0 0 .33-.3v-.02a1 1 0 0 0 .13-.45V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock8Fill.displayName = 'Clock8Fill';

// Triple export pattern (lucide-react style)
export { Clock8Fill, Clock8Fill as Clock8FillIcon, Clock8Fill as SiClock8Fill };
export default Clock8Fill;
export type { Clock8FillProps };
