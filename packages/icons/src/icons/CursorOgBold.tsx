import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorOgBoldProps = Omit<IconBaseProps, 'children'>;

const CursorOgBold = memo(
  forwardRef<SVGSVGElement, CursorOgBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.59 2.09c.36-.16.78-.1 1.07.16l12 10.62c.3.26.41.67.3 1.04-.12.38-.44.65-.83.7l-3.53.48 1.77 3.94c.23.5 0 1.1-.5 1.32l-3.43 1.56q-.37.16-.76.03-.38-.16-.56-.53l-1.77-3.94-2.69 2.35c-.3.26-.71.32-1.07.16s-.59-.52-.59-.9V3c0-.4.23-.75.59-.91M8 16.87l2.05-1.79.1-.07q.35-.24.77-.15c.31.06.57.27.7.56l1.91 4.25 1.6-.73-1.9-4.25q-.2-.47.03-.9c.15-.28.43-.46.74-.5l2.7-.37L8 5.22z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorOgBold.displayName = 'CursorOgBold';

// Triple export pattern
export { CursorOgBold, CursorOgBold as CursorOgBoldIcon, CursorOgBold as SiCursorOgBold };
export default CursorOgBold;
export type { CursorOgBoldProps };
