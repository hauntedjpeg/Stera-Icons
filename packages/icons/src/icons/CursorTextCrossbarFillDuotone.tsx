import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextCrossbarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextCrossbarFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextCrossbarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.25 17.5c0 .97.78 1.75 1.75 1.75h1c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-1c-1.17 0-2.23-.47-3-1.24.77-.77 1.25-1.83 1.25-3.01M13.25 10.75h1.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-1.25zM10.75 13.25H9.5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h1.25zM9 2.25c1.17 0 2.23.47 3 1.24-.77.77-1.25 1.83-1.25 3.01 0-.97-.78-1.75-1.75-1.75H8c-.69 0-1.25-.56-1.25-1.25S7.31 2.25 8 2.25z" opacity={0.4} />
        <path d="M16 2.25c.69 0 1.25.56 1.25 1.25S16.69 4.75 16 4.75h-1c-.97 0-1.75.78-1.75 1.75v11c0 2.35-1.9 4.25-4.25 4.25H8c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h1c.97 0 1.75-.78 1.75-1.75v-11c0-2.35 1.9-4.25 4.25-4.25z" />
    </IconBase>
  ))
);

CursorTextCrossbarFillDuotone.displayName = 'CursorTextCrossbarFillDuotone';

// Triple export pattern
export { CursorTextCrossbarFillDuotone, CursorTextCrossbarFillDuotone as CursorTextCrossbarFillDuotoneIcon, CursorTextCrossbarFillDuotone as SiCursorTextCrossbarFillDuotone };
export default CursorTextCrossbarFillDuotone;
export type { CursorTextCrossbarFillDuotoneProps };
