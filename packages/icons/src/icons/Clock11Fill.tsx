import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock11FillProps = Omit<IconBaseProps, 'children'>;

const Clock11Fill = memo(
  forwardRef<SVGSVGElement, Clock11FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v1.73l-.37-.63a.88.88 0 0 0-1.52.87l2 3.47.01.02.05.07.03.04.03.02.06.06.03.03.05.04.02.01.09.05h.01l.07.04h.01l.07.02.12.03h.24l.06-.02.16-.05h.02l.06-.04.03-.01.08-.06.03-.03.03-.02.03-.03.03-.04.02-.02.03-.04.05-.07a1 1 0 0 0 .11-.42V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock11Fill.displayName = 'Clock11Fill';

// Triple export pattern (lucide-react style)
export { Clock11Fill, Clock11Fill as Clock11FillIcon, Clock11Fill as SiClock11Fill };
export default Clock11Fill;
export type { Clock11FillProps };
