import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 17.5c0 1.24 1 2.25 2.25 2.25h1c.41 0 .75.34.75.75s-.34.75-.75.75h-1c-1.23 0-2.32-.59-3-1.5.47-.63.75-1.4.75-2.25M9 2.75c1.23 0 2.32.59 3 1.5-.47.63-.75 1.4-.75 2.25 0-1.24-1-2.25-2.25-2.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M16 2.75c.41 0 .75.34.75.75s-.34.75-.75.75h-1c-1.24 0-2.25 1-2.25 2.25v11c0 2.07-1.68 3.75-3.75 3.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c1.24 0 2.25-1 2.25-2.25v-11c0-2.07 1.68-3.75 3.75-3.75z" />
    </IconBase>
  ))
);

CursorTextRegularDuotone.displayName = 'CursorTextRegularDuotone';

// Triple export pattern
export { CursorTextRegularDuotone, CursorTextRegularDuotone as CursorTextRegularDuotoneIcon, CursorTextRegularDuotone as SiCursorTextRegularDuotone };
export default CursorTextRegularDuotone;
export type { CursorTextRegularDuotoneProps };
