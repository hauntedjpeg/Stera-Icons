import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorClickFillProps = Omit<IconBaseProps, 'children'>;

const CursorClickFill = memo(
  forwardRef<SVGSVGElement, CursorClickFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.7 10.73c-.42-1.26.77-2.45 2.03-2.03l10.05 3.35c1.49.5 1.45 2.62-.06 3.06L16.4 16.4l-1.28 4.33c-.44 1.51-2.57 1.55-3.06.06zM5.03 12.7c.34-.34.9-.34 1.24 0s.34.9 0 1.24L4.9 15.3c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24zM2.15 7.52c.13-.46.61-.74 1.08-.61l1.85.5c.47.12.74.6.62 1.06-.13.47-.6.75-1.07.62l-1.86-.5c-.46-.12-.74-.6-.62-1.07M14.06 3.67c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-1.36 1.36c-.34.34-.9.34-1.23 0-.35-.34-.35-.9 0-1.24zM7.52 2.15c.47-.12.95.16 1.07.62l.5 1.86c.13.46-.15.94-.62 1.07-.46.12-.94-.15-1.07-.62l-.5-1.85c-.12-.47.16-.95.62-1.08" />
    </IconBase>
  ))
);

CursorClickFill.displayName = 'CursorClickFill';

// Triple export pattern
export { CursorClickFill, CursorClickFill as CursorClickFillIcon, CursorClickFill as SiCursorClickFill };
export default CursorClickFill;
export type { CursorClickFillProps };
