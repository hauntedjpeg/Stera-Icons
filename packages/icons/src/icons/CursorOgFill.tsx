import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorOgFillProps = Omit<IconBaseProps, 'children'>;

const CursorOgFill = memo(
  forwardRef<SVGSVGElement, CursorOgFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.64 2.2c.31-.14.68-.08.94.14l12 10.63c.26.22.36.58.26.9-.1.34-.38.57-.72.62l-3.7.5 1.84 4.1c.2.43 0 .95-.44 1.15l-3.43 1.56q-.32.15-.67.02-.34-.13-.49-.46l-1.84-4.1-2.81 2.47c-.26.23-.62.28-.94.14s-.51-.46-.51-.8V3c0-.34.2-.66.51-.8" />
    </IconBase>
  ))
);

CursorOgFill.displayName = 'CursorOgFill';

// Triple export pattern
export { CursorOgFill, CursorOgFill as CursorOgFillIcon, CursorOgFill as SiCursorOgFill };
export default CursorOgFill;
export type { CursorOgFillProps };
