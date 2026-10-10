import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorPointerFillProps = Omit<IconBaseProps, 'children'>;

const CursorPointerFill = memo(
  forwardRef<SVGSVGElement, CursorPointerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.86 2.5c.8 0 1.46.65 1.46 1.45V11c0 .31.25.56.56.56.3 0 .55-.25.56-.56V9c0-.81.65-1.46 1.45-1.46s1.45.65 1.45 1.45v2.52c0 .3.25.56.56.56.3 0 .56-.25.56-.56V9.99c0-.8.65-1.45 1.45-1.45s1.45.65 1.45 1.45V14c0 4.14-3.35 7.49-7.48 7.49-3.72 0-6.8-2.7-7.39-6.25l-.03-.11L3.23 12l-.04-.07-.06-.13c-.3-.68-.06-1.48.6-1.86q.47-.25.96-.17c.41.07.8.31 1.02.7v.01l1.66 2.81c.13.22.39.32.63.25.24-.06.41-.28.41-.53V3.95c0-.8.65-1.45 1.45-1.45" />
    </IconBase>
  ))
);

CursorPointerFill.displayName = 'CursorPointerFill';

// Triple export pattern
export { CursorPointerFill, CursorPointerFill as CursorPointerFillIcon, CursorPointerFill as SiCursorPointerFill };
export default CursorPointerFill;
export type { CursorPointerFillProps };
