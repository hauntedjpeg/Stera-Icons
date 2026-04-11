import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock1FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock1FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock1FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v5.02a1 1 0 0 0 .16.49l.03.04.01.02.04.04.03.03.03.02.03.03.08.06h.02l.01.01.23.1h.1l.03.01h.18l.11-.02.08-.03h.01l.07-.03h.01l.09-.06.02-.01.08-.07.02-.01.04-.05.02-.02.04-.04.01-.03.04-.04v-.02l2-3.47a.88.88 0 0 0-1.5-.87l-.37.63V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v1.73l.36-.63a.88.88 0 0 1 1.52.87l-2 3.47-.01.02-.04.04-.01.03-.04.04-.02.02-.04.05-.02.01-.03.03-.05.04-.02.01-.09.05h-.01l-.07.04h-.01l-.07.02h-.01l-.11.03h-.25l-.05-.02-.24-.09-.03-.01-.08-.06-.03-.03-.03-.02-.03-.03-.04-.04-.01-.02-.03-.04-.05-.07a1 1 0 0 1-.12-.42V7c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

Clock1FillDuotone.displayName = 'Clock1FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock1FillDuotone, Clock1FillDuotone as Clock1FillDuotoneIcon, Clock1FillDuotone as SiClock1FillDuotone };
export default Clock1FillDuotone;
export type { Clock1FillDuotoneProps };
