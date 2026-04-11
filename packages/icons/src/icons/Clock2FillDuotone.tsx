import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock2FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock2FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock2FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v5.13l.02.06.09.24.01.03.06.08.02.03.17.15.02.01.09.05h.01l.07.04h.01l.07.02.12.03h.24l.06-.02.07-.02.05-.01.04-.02h.02l.06-.04 3.47-2a.88.88 0 0 0-.87-1.52l-2.15 1.24V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v3.48l2.15-1.24a.88.88 0 0 1 .87 1.52l-3.46 2h-.01l-.06.03-.02.01-.04.02-.05.01-.03.01-.04.01-.06.01h-.03l-.03.01h-.18l-.11-.02h-.01l-.07-.03h-.01l-.07-.03h-.01l-.09-.06-.02-.01-.17-.15-.02-.03-.06-.08v-.02l-.01-.01-.1-.24v-.06l-.02-.1V7c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

Clock2FillDuotone.displayName = 'Clock2FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock2FillDuotone, Clock2FillDuotone as Clock2FillDuotoneIcon, Clock2FillDuotone as SiClock2FillDuotone };
export default Clock2FillDuotone;
export type { Clock2FillDuotoneProps };
