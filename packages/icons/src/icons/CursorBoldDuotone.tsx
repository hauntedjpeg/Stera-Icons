import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.62 8.76c1.87.63 1.83 3.29-.07 3.85l-6.14 1.8-1.8 6.14c-.56 1.9-3.22 1.94-3.85.07L5.26 10.1v.01c.17.52.74.8 1.26.63s.8-.72.64-1.23l3.5 10.48.01.01h.01v-.01l1.97-6.66.04-.12q.2-.42.64-.56l6.66-1.96.01-.02-.01-.01L9.5 7.16c.51.16 1.06-.12 1.23-.64.18-.52-.1-1.09-.63-1.26h-.01z" opacity={.4} />
        <path d="M4.1 6.66c-.52-1.58.98-3.08 2.56-2.55l3.45 1.15c.52.17.8.74.63 1.26-.17.53-.74.8-1.26.63L6.02 6H6v.02l1.14 3.46c.18.52-.1 1.09-.63 1.26-.52.18-1.09-.1-1.26-.63z" />
    </IconBase>
  ))
);

CursorBoldDuotone.displayName = 'CursorBoldDuotone';

// Triple export pattern
export { CursorBoldDuotone, CursorBoldDuotone as CursorBoldDuotoneIcon, CursorBoldDuotone as SiCursorBoldDuotone };
export default CursorBoldDuotone;
export type { CursorBoldDuotoneProps };
