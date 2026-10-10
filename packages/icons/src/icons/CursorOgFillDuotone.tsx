import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorOgFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorOgFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorOgFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m16.99 13.01-2.97.4q-.44.07-.65.44-.2.38-.03.79L15.3 19l-1.83.83-1.96-4.37q-.19-.39-.62-.5-.36-.06-.68.14l-.08.06-2.25 1.97V4.94z" opacity={.4} />
        <path fillRule="evenodd" d="M6.64 2.2c.31-.14.68-.08.94.14l12 10.63c.26.22.36.58.26.9-.1.34-.38.57-.72.62l-3.7.5 1.84 4.1c.2.43 0 .95-.44 1.15l-3.43 1.56q-.32.15-.67.02-.34-.13-.49-.46l-1.84-4.1-2.81 2.47c-.26.23-.62.28-.94.14s-.51-.46-.51-.8V3c0-.34.2-.66.51-.8m1.24 14.94 2.25-1.97.08-.06q.32-.2.68-.13.43.1.62.5l1.96 4.36 1.83-.83-1.96-4.37c-.12-.26-.1-.55.03-.79q.21-.37.65-.44l2.97-.4-9.11-8.07z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorOgFillDuotone.displayName = 'CursorOgFillDuotone';

// Triple export pattern
export { CursorOgFillDuotone, CursorOgFillDuotone as CursorOgFillDuotoneIcon, CursorOgFillDuotone as SiCursorOgFillDuotone };
export default CursorOgFillDuotone;
export type { CursorOgFillDuotoneProps };
