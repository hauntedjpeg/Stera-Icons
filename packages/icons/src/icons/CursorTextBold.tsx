import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextBoldProps = Omit<IconBaseProps, 'children'>;

const CursorTextBold = memo(
  forwardRef<SVGSVGElement, CursorTextBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 2.5c1.2 0 2.27.52 3 1.36.73-.84 1.8-1.36 3-1.36h1c.55 0 1 .45 1 1s-.45 1-1 1h-1c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h1c.55 0 1 .45 1 1s-.45 1-1 1h-1c-1.2 0-2.27-.53-3-1.36-.73.83-1.8 1.36-3 1.36H8c-.55 0-1-.45-1-1s.45-1 1-1h1c1.1 0 2-.9 2-2v-11c0-1.1-.9-2-2-2H8c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

CursorTextBold.displayName = 'CursorTextBold';

// Triple export pattern
export { CursorTextBold, CursorTextBold as CursorTextBoldIcon, CursorTextBold as SiCursorTextBold };
export default CursorTextBold;
export type { CursorTextBoldProps };
