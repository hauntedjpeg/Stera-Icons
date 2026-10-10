import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 17.5c0 1.1.9 2 2 2h1c.55 0 1 .45 1 1s-.45 1-1 1h-1c-1.2 0-2.27-.53-3-1.36.62-.7 1-1.63 1-2.64M9 2.5c1.2 0 2.27.52 3 1.36-.62.7-1 1.63-1 2.64 0-1.1-.9-2-2-2H8c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M16 2.5c.55 0 1 .45 1 1s-.45 1-1 1h-1c-1.1 0-2 .9-2 2v11c0 2.2-1.8 4-4 4H8c-.55 0-1-.45-1-1s.45-1 1-1h1c1.1 0 2-.9 2-2v-11c0-2.2 1.8-4 4-4z" />
    </IconBase>
  ))
);

CursorTextBoldDuotone.displayName = 'CursorTextBoldDuotone';

// Triple export pattern
export { CursorTextBoldDuotone, CursorTextBoldDuotone as CursorTextBoldDuotoneIcon, CursorTextBoldDuotone as SiCursorTextBoldDuotone };
export default CursorTextBoldDuotone;
export type { CursorTextBoldDuotoneProps };
