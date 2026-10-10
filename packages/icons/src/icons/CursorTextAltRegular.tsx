import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextAltRegularProps = Omit<IconBaseProps, 'children'>;

const CursorTextAltRegular = memo(
  forwardRef<SVGSVGElement, CursorTextAltRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 2.75c1.23 0 2.32.59 3 1.5.68-.91 1.77-1.5 3-1.5h1c.41 0 .75.34.75.75s-.34.75-.75.75h-1c-1.24 0-2.25 1-2.25 2.25v4.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75h-1.75v4.75c0 1.24 1 2.25 2.25 2.25h1c.41 0 .75.34.75.75s-.34.75-.75.75h-1c-1.23 0-2.32-.59-3-1.5-.68.91-1.77 1.5-3 1.5H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c1.24 0 2.25-1 2.25-2.25v-4.75H9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75V6.5c0-1.24-1-2.25-2.25-2.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

CursorTextAltRegular.displayName = 'CursorTextAltRegular';

// Triple export pattern
export { CursorTextAltRegular, CursorTextAltRegular as CursorTextAltRegularIcon, CursorTextAltRegular as SiCursorTextAltRegular };
export default CursorTextAltRegular;
export type { CursorTextAltRegularProps };
