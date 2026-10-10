import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 17.5c0 1.24 1 2.25 2.25 2.25h1c.41 0 .75.34.75.75s-.34.75-.75.75h-1c-1.23 0-2.32-.59-3-1.5.47-.63.75-1.4.75-2.25M12.75 11.25h1.75c.41 0 .75.34.75.75s-.34.75-.75.75h-1.75zM11.25 12.75H9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75zM9 2.75c1.23 0 2.32.59 3 1.5-.47.63-.75 1.4-.75 2.25 0-1.24-1-2.25-2.25-2.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M16 2.75c.41 0 .75.34.75.75s-.34.75-.75.75h-1c-1.24 0-2.25 1-2.25 2.25v11c0 2.07-1.68 3.75-3.75 3.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c1.24 0 2.25-1 2.25-2.25v-11c0-2.07 1.68-3.75 3.75-3.75z" />
    </IconBase>
  ))
);

CursorTextAltRegularDuotone.displayName = 'CursorTextAltRegularDuotone';

// Triple export pattern
export { CursorTextAltRegularDuotone, CursorTextAltRegularDuotone as CursorTextAltRegularDuotoneIcon, CursorTextAltRegularDuotone as SiCursorTextAltRegularDuotone };
export default CursorTextAltRegularDuotone;
export type { CursorTextAltRegularDuotoneProps };
