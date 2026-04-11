import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock10FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock10FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock10FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v3.48L8.97 9.24a.88.88 0 0 0-.87 1.52l3.46 2h.02l.03.02.04.02.04.02.05.01.03.01.04.01.04.01h.06l.01.01h.19l.05-.01a1 1 0 0 0 .3-.12l.05-.03.03-.03.04-.02.02-.02a.9.9 0 0 0 .28-.64V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .87.39.87.87v5q0 .39-.27.64l-.02.02-.04.02-.03.03q-.03 0-.04.03l-.03.01a1 1 0 0 1-.28.11h-.05l-.1.01h-.16l-.04-.02h-.04l-.03-.02-.05-.01-.04-.02-.04-.02-.03-.02h-.02l-3.46-2a.88.88 0 0 1 .87-1.52l2.15 1.24V7c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

Clock10FillDuotone.displayName = 'Clock10FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock10FillDuotone, Clock10FillDuotone as Clock10FillDuotoneIcon, Clock10FillDuotone as SiClock10FillDuotone };
export default Clock10FillDuotone;
export type { Clock10FillDuotoneProps };
