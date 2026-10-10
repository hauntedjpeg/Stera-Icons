import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorOgBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorOgBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorOgBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.24 14.71c.18.38.59.62 1.03.56l1.33-.18 1.77 3.94c.23.5 0 1.1-.5 1.32l-3.42 1.56q-.39.16-.77.03-.38-.16-.56-.53l-1.77-3.94 1.02-.88c.33-.3.42-.76.26-1.15l1.9 4.23 1.6-.73z" opacity={.4} />
        <path d="M6.59 2.09c.36-.16.78-.1 1.07.16l12 10.62c.3.26.41.67.3 1.04-.12.38-.44.65-.83.7l-4.86.66c-.55.07-1.05-.31-1.13-.86s.31-1.05.86-1.12l2.7-.37L8 5.22v11.65l2.05-1.79c.42-.36 1.05-.32 1.41.1.36.41.32 1.04-.1 1.4l-3.7 3.24c-.3.26-.71.32-1.07.16s-.59-.52-.59-.9V3c0-.4.23-.75.59-.91" />
    </IconBase>
  ))
);

CursorOgBoldDuotone.displayName = 'CursorOgBoldDuotone';

// Triple export pattern
export { CursorOgBoldDuotone, CursorOgBoldDuotone as CursorOgBoldDuotoneIcon, CursorOgBoldDuotone as SiCursorOgBoldDuotone };
export default CursorOgBoldDuotone;
export type { CursorOgBoldDuotoneProps };
