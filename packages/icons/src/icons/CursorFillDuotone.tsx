import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m5.06 4.88 13.97 4.66q.06.03.07.05t.03.09q0 .05-.03.08l-.08.05-6.66 1.96q-.39.12-.55.49l-.04.1-1.96 6.66-.05.08-.08.03q-.06 0-.1-.03l-.04-.07L4.88 5.06v-.08q0-.03.04-.06.03-.04.06-.04z" opacity={.4} />
        <path fillRule="evenodd" d="M3.22 5.62c-.49-1.48.92-2.89 2.4-2.4l13.96 4.66c1.76.58 1.71 3.09-.06 3.6l-6.2 1.83-1.83 6.2c-.53 1.78-3.03 1.83-3.61.07zm1.76-.74q-.03 0-.06.04-.04.03-.04.06v.08l4.66 13.97q.03.06.05.07t.09.03q.05 0 .08-.03l.05-.08 1.96-6.66.04-.1q.16-.37.55-.5l6.66-1.95.08-.05.03-.08q0-.06-.03-.1l-.07-.04L5.06 4.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorFillDuotone.displayName = 'CursorFillDuotone';

// Triple export pattern
export { CursorFillDuotone, CursorFillDuotone as CursorFillDuotoneIcon, CursorFillDuotone as SiCursorFillDuotone };
export default CursorFillDuotone;
export type { CursorFillDuotoneProps };
