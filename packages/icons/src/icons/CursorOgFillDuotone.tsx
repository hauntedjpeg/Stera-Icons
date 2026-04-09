import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorOgFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorOgFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorOgFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-og-fill-duotone" {...props}>
      <path d="m16.99 13.01-2.97.4a.88.88 0 0 0-.68 1.23L15.3 19l-1.83.83-1.96-4.37a.88.88 0 0 0-1.3-.36l-.08.06-2.25 1.97V4.94z" opacity={.4} />
        <path fillRule="evenodd" d="M6.64 2.2a.9.9 0 0 1 .94.14l12 10.63a.88.88 0 0 1-.46 1.52l-3.7.5 1.84 4.1c.2.43 0 .95-.44 1.15l-3.43 1.56a.9.9 0 0 1-1.16-.44l-1.84-4.1-2.81 2.47a.88.88 0 0 1-1.45-.66V3c0-.34.2-.66.51-.8m1.24 14.94 2.25-1.97.08-.06a.88.88 0 0 1 1.3.36l1.96 4.37 1.83-.83-1.96-4.37a.88.88 0 0 1 .68-1.23l2.97-.4-9.11-8.07z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorOgFillDuotone.displayName = 'CursorOgFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorOgFillDuotone, CursorOgFillDuotone as CursorOgFillDuotoneIcon, CursorOgFillDuotone as SiCursorOgFillDuotone };
export default CursorOgFillDuotone;
export type { CursorOgFillDuotoneProps };
