import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-fill-duotone" {...props}>
      <path d="m5.06 4.88 13.97 4.66q.06.03.07.05t.03.09q0 .05-.03.08l-.08.05-6.66 1.96a.9.9 0 0 0-.55.49l-.04.1-1.96 6.66-.05.08-.08.03-.1-.03-.04-.07L4.88 5.06a.1.1 0 0 1 .04-.14l.06-.04z" opacity={.4} />
        <path fillRule="evenodd" d="M3.22 5.62a1.9 1.9 0 0 1 2.4-2.4l13.96 4.66a1.9 1.9 0 0 1-.06 3.6l-6.2 1.83-1.83 6.2a1.9 1.9 0 0 1-3.61.07zm1.76-.74-.06.04-.04.06v.08l4.66 13.97q.03.06.05.07t.09.03q.05 0 .08-.03l.05-.08 1.96-6.66.04-.1q.16-.37.55-.5l6.66-1.95.08-.05.03-.08-.03-.1-.07-.04L5.06 4.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorFillDuotone.displayName = 'CursorFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorFillDuotone, CursorFillDuotone as CursorFillDuotoneIcon, CursorFillDuotone as SiCursorFillDuotone };
export default CursorFillDuotone;
export type { CursorFillDuotoneProps };
