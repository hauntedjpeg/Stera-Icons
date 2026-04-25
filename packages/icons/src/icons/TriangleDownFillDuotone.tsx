import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TriangleDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TriangleDownFillDuotone = memo(
  forwardRef<SVGSVGElement, TriangleDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.06 4.88c1.16 0 1.96 0 2.56.05s.86.16 1 .26c.37.27.61.68.66 1.14.02.17-.02.44-.28.99-.25.55-.66 1.25-1.23 2.25l-4.07 7.01c-.57 1-.98 1.7-1.32 2.18-.35.5-.57.67-.72.74-.42.18-.9.18-1.32 0-.15-.07-.37-.24-.72-.74-.35-.49-.75-1.18-1.32-2.18L5.23 9.57c-.58-1-.98-1.7-1.23-2.25-.26-.55-.3-.82-.28-.99.05-.46.29-.87.66-1.14.13-.1.39-.2 1-.26.6-.05 1.4-.05 2.56-.05z" opacity={.4} />
        <path fillRule="evenodd" d="M16.06 3.13q1.67-.02 2.73.06c.7.06 1.33.2 1.86.58a3.4 3.4 0 0 1 1.37 2.38c.07.64-.14 1.27-.43 1.9q-.46.95-1.3 2.4l-4.07 7q-.82 1.47-1.42 2.33c-.4.57-.84 1.05-1.43 1.31-.87.4-1.87.4-2.74 0a3.7 3.7 0 0 1-1.43-1.31q-.6-.87-1.42-2.32l-4.06-7.02Q2.86 9 2.4 8.05c-.3-.63-.5-1.26-.43-1.9.1-.95.6-1.82 1.37-2.38a3.7 3.7 0 0 1 1.86-.58c.7-.07 1.6-.06 2.73-.06zM7.94 4.88c-1.16 0-1.96 0-2.56.05s-.87.16-1 .26c-.37.27-.61.68-.66 1.14-.02.17.02.44.28.99.25.55.65 1.25 1.23 2.25l4.07 7.01c.57 1 .98 1.7 1.32 2.18.35.5.57.67.72.74.42.18.9.18 1.32 0 .15-.07.37-.24.72-.74.35-.49.75-1.18 1.32-2.18l4.07-7.01c.58-1 .98-1.7 1.23-2.25.26-.55.3-.82.28-.99a1.6 1.6 0 0 0-.66-1.14c-.13-.1-.39-.2-1-.26-.6-.05-1.4-.05-2.56-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

TriangleDownFillDuotone.displayName = 'TriangleDownFillDuotone';

// Triple export pattern (lucide-react style)
export { TriangleDownFillDuotone, TriangleDownFillDuotone as TriangleDownFillDuotoneIcon, TriangleDownFillDuotone as SiTriangleDownFillDuotone };
export default TriangleDownFillDuotone;
export type { TriangleDownFillDuotoneProps };
