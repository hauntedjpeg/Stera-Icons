import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock1FillProps = Omit<IconBaseProps, 'children'>;

const Clock1Fill = memo(
  forwardRef<SVGSVGElement, Clock1FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v5.02a1 1 0 0 0 .16.49l.03.04.01.02.04.04.03.03.03.02.03.03.08.06h.02l.01.01.23.1h.1l.03.01h.18l.11-.02.08-.03h.01l.07-.03h.01l.09-.06.02-.01.05-.04.03-.03.02-.01.04-.05.02-.02.04-.04.01-.03.04-.04v-.02l2-3.47a.88.88 0 0 0-1.5-.87l-.37.63V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock1Fill.displayName = 'Clock1Fill';

// Triple export pattern (lucide-react style)
export { Clock1Fill, Clock1Fill as Clock1FillIcon, Clock1Fill as SiClock1Fill };
export default Clock1Fill;
export type { Clock1FillProps };
