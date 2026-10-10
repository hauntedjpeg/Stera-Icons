import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock10FillProps = Omit<IconBaseProps, 'children'>;

const Clock10Fill = memo(
  forwardRef<SVGSVGElement, Clock10FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 4c-.48 0-.87.39-.87.87v3.48L8.97 9.24c-.42-.24-.95-.1-1.2.32-.23.42-.1.96.33 1.2l3.46 2h.02l.03.02.04.02.03.01.06.03h.02l.05.01.05.01h.04l.02.01h.19l.05-.01q.16-.03.28-.1l.03-.02.04-.03.03-.03.04-.02.02-.02q.27-.25.28-.64V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock10Fill.displayName = 'Clock10Fill';

// Triple export pattern
export { Clock10Fill, Clock10Fill as Clock10FillIcon, Clock10Fill as SiClock10Fill };
export default Clock10Fill;
export type { Clock10FillProps };
