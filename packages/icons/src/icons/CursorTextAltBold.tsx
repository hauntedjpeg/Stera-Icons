import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextAltBoldProps = Omit<IconBaseProps, 'children'>;

const CursorTextAltBold = memo(
  forwardRef<SVGSVGElement, CursorTextAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 2.5c1.2 0 2.27.52 3 1.36.73-.84 1.8-1.36 3-1.36h1c.55 0 1 .45 1 1s-.45 1-1 1h-1c-1.1 0-2 .9-2 2V11h1.5c.55 0 1 .45 1 1s-.45 1-1 1H13v4.5c0 1.1.9 2 2 2h1c.55 0 1 .45 1 1s-.45 1-1 1h-1c-1.2 0-2.27-.53-3-1.36-.73.83-1.8 1.36-3 1.36H8c-.55 0-1-.45-1-1s.45-1 1-1h1c1.1 0 2-.9 2-2V13H9.5c-.55 0-1-.45-1-1s.45-1 1-1H11V6.5c0-1.1-.9-2-2-2H8c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

CursorTextAltBold.displayName = 'CursorTextAltBold';

// Triple export pattern
export { CursorTextAltBold, CursorTextAltBold as CursorTextAltBoldIcon, CursorTextAltBold as SiCursorTextAltBold };
export default CursorTextAltBold;
export type { CursorTextAltBoldProps };
