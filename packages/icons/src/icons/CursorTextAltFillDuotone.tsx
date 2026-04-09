import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextAltFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-alt-fill-duotone" {...props}>
      <path d="M13.25 17.5c0 .97.78 1.75 1.75 1.75h1a1.25 1.25 0 1 1 0 2.5h-1a4.2 4.2 0 0 1-3-1.24 4.2 4.2 0 0 0 1.25-3.01M13.25 10.75h1.25a1.25 1.25 0 1 1 0 2.5h-1.25zM10.75 13.25H9.5a1.25 1.25 0 1 1 0-2.5h1.25zM9 2.25c1.17 0 2.23.47 3 1.24a4.2 4.2 0 0 0-1.25 3.01c0-.97-.78-1.75-1.75-1.75H8a1.25 1.25 0 1 1 0-2.5z" opacity={0.4} />
        <path d="M16 2.25a1.25 1.25 0 1 1 0 2.5h-1c-.97 0-1.75.78-1.75 1.75v11c0 2.35-1.9 4.25-4.25 4.25H8a1.25 1.25 0 1 1 0-2.5h1c.97 0 1.75-.78 1.75-1.75v-11c0-2.35 1.9-4.25 4.25-4.25z" />
    </IconBase>
  ))
);

CursorTextAltFillDuotone.displayName = 'CursorTextAltFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorTextAltFillDuotone, CursorTextAltFillDuotone as CursorTextAltFillDuotoneIcon, CursorTextAltFillDuotone as SiCursorTextAltFillDuotone };
export default CursorTextAltFillDuotone;
export type { CursorTextAltFillDuotoneProps };
