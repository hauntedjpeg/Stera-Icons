import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock11FillProps = Omit<IconBaseProps, 'children'>;

const Clock11Fill = memo(
  forwardRef<SVGSVGElement, Clock11FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 4c-.48 0-.87.39-.87.87v1.73l-.37-.63c-.24-.42-.78-.56-1.2-.32s-.56.78-.32 1.2l2 3.46.01.02.03.04.02.03.03.04.03.02.04.05.02.01.03.03.05.04.02.01.04.03.05.02h.01l.07.04h.01l.07.02.07.02h.05l.03.01h.21l.06-.02.16-.05h.02l.06-.04.03-.01.04-.04.04-.02.03-.03.03-.02.03-.03.03-.04.02-.02.03-.04.02-.03.03-.04q.07-.13.1-.28l.01-.14V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock11Fill.displayName = 'Clock11Fill';

// Triple export pattern
export { Clock11Fill, Clock11Fill as Clock11FillIcon, Clock11Fill as SiClock11Fill };
export default Clock11Fill;
export type { Clock11FillProps };
