import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m9.1 4.26 10.52 3.5c1.87.63 1.83 3.29-.07 3.85l-6.14 1.8-1.8 6.14c-.56 1.9-3.22 1.94-3.85.07L4.26 9.11c.17.52.74.8 1.26.63s.8-.73.64-1.25L9.66 19l.01.01h.01v-.01l1.97-6.66.04-.12q.2-.42.64-.56l6.66-1.96.01-.02-.01-.01-10.5-3.5c.52.16 1.08-.12 1.25-.64.18-.52-.1-1.09-.63-1.26" opacity={.4} />
        <path d="M3.1 5.66c-.52-1.58.98-3.08 2.56-2.55L9.1 4.26c.52.17.8.74.63 1.26-.17.53-.74.8-1.26.63L5.02 5H5v.02l1.14 3.46c.18.52-.1 1.09-.63 1.26-.52.18-1.09-.1-1.26-.63z" />
    </IconBase>
  ))
);

CursorBoldDuotone.displayName = 'CursorBoldDuotone';

// Triple export pattern
export { CursorBoldDuotone, CursorBoldDuotone as CursorBoldDuotoneIcon, CursorBoldDuotone as SiCursorBoldDuotone };
export default CursorBoldDuotone;
export type { CursorBoldDuotoneProps };
