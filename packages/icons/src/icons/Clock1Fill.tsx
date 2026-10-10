import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock1FillProps = Omit<IconBaseProps, 'children'>;

const Clock1Fill = memo(
  forwardRef<SVGSVGElement, Clock1FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 4c-.48 0-.87.39-.87.87v5.02l.01.14q.03.15.1.28l.03.04q0 0 .02.03l.03.04.01.02.04.04.03.03.03.02.03.03.04.02.04.04h.02l.01.01.23.1h.1l.03.01h.18l.05-.01.06-.01.08-.03h.01l.07-.03h.01l.05-.03.04-.03.02-.01.05-.04.03-.03.02-.01.04-.05.02-.02.04-.04.01-.03.04-.04v-.02l2-3.47c.25-.41.1-.95-.31-1.2-.42-.23-.96-.09-1.2.33l-.37.63V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock1Fill.displayName = 'Clock1Fill';

// Triple export pattern
export { Clock1Fill, Clock1Fill as Clock1FillIcon, Clock1Fill as SiClock1Fill };
export default Clock1Fill;
export type { Clock1FillProps };
