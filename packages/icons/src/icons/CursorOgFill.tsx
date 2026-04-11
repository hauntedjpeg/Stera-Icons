import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorOgFillProps = Omit<IconBaseProps, 'children'>;

const CursorOgFill = memo(
  forwardRef<SVGSVGElement, CursorOgFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.64 2.2a.9.9 0 0 1 .94.14l12 10.63a.88.88 0 0 1-.46 1.52l-3.7.5 1.84 4.1c.2.43 0 .95-.44 1.15l-3.43 1.56a.9.9 0 0 1-1.16-.44l-1.84-4.1-2.81 2.47a.88.88 0 0 1-1.45-.66V3c0-.34.2-.66.51-.8" />
    </IconBase>
  ))
);

CursorOgFill.displayName = 'CursorOgFill';

// Triple export pattern (lucide-react style)
export { CursorOgFill, CursorOgFill as CursorOgFillIcon, CursorOgFill as SiCursorOgFill };
export default CursorOgFill;
export type { CursorOgFillProps };
