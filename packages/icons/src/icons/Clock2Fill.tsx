import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock2FillProps = Omit<IconBaseProps, 'children'>;

const Clock2Fill = memo(
  forwardRef<SVGSVGElement, Clock2FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 4c-.48 0-.87.39-.87.87v5.13l.02.06.03.12.06.12.01.03.03.04.03.04.02.03.03.03.03.03.11.09.02.01.04.03.05.02h.01l.07.04h.01l.07.02.07.02h.05l.03.01h.21l.06-.02h.04l.03-.02.05-.01.04-.02h.02l.06-.04 3.47-2c.42-.24.56-.78.32-1.2s-.78-.56-1.2-.32l-2.14 1.24V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock2Fill.displayName = 'Clock2Fill';

// Triple export pattern
export { Clock2Fill, Clock2Fill as Clock2FillIcon, Clock2Fill as SiClock2Fill };
export default Clock2Fill;
export type { Clock2FillProps };
