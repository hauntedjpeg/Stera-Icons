import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4FillProps = Omit<IconBaseProps, 'children'>;

const Clock4Fill = memo(
  forwardRef<SVGSVGElement, Clock4FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 4c-.48 0-.87.39-.87.87v5.02l.01.14q.03.15.1.28l.03.04.01.02.09.1.03.04.03.02.03.03.04.02.04.04h.02l3.47 2c.41.25.95.1 1.2-.31.23-.42.09-.96-.33-1.2l-3.03-1.75V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock4Fill.displayName = 'Clock4Fill';

// Triple export pattern
export { Clock4Fill, Clock4Fill as Clock4FillIcon, Clock4Fill as SiClock4Fill };
export default Clock4Fill;
export type { Clock4FillProps };
