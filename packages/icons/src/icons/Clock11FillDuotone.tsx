import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock11FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock11FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock11FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-11-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v1.73l-.37-.63a.88.88 0 0 0-1.52.87l2 3.47.01.02.08.1.03.03a1 1 0 0 0 .25.2h.01l.07.03h.01l.2.05h.2l.25-.07h.02l.06-.04.03-.01.08-.06.03-.03.06-.06.03-.02q0-.03.03-.04l.02-.03.05-.07.08-.2.01-.04v-.04l.02-.04V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .87.39.87.87v5.13l-.01.03v.04l-.02.04a1 1 0 0 1-.13.27l-.02.03-.03.04-.03.02-.03.04-.03.02-.04.03-.08.06h-.01l-.01.01-.06.03-.02.01-.25.07h-.2l-.12-.02h-.01l-.07-.03h-.01l-.07-.03h-.01a1 1 0 0 1-.28-.22l-.08-.11v-.02l-2-3.47a.88.88 0 0 1 1.5-.87l.37.63V7c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

Clock11FillDuotone.displayName = 'Clock11FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock11FillDuotone, Clock11FillDuotone as Clock11FillDuotoneIcon, Clock11FillDuotone as SiClock11FillDuotone };
export default Clock11FillDuotone;
export type { Clock11FillDuotoneProps };
