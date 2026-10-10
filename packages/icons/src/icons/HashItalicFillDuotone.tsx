import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashItalicFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashItalicFillDuotone = memo(
  forwardRef<SVGSVGElement, HashItalicFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.22 21.27c-.15.68-.82 1.1-1.5.95-.67-.15-1.09-.82-.94-1.5l1-4.47h2.56zM14.22 21.27c-.15.68-.82 1.1-1.5.95-.67-.15-1.09-.82-.94-1.5l1-4.47h2.56zM9.9 13.75H7.32l.78-3.5h2.56zM15.9 13.75h-2.57l.78-3.5h2.56zM9.78 2.73c.15-.68.82-1.1 1.5-.95.67.15 1.1.82.94 1.5l-1 4.47H8.67zM15.78 2.73c.15-.68.82-1.1 1.5-.95.67.15 1.1.82.94 1.5l-1 4.47h-2.56z" opacity={0.4} />
        <path d="M19 13.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 7.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25S4.31 7.75 5 7.75z" />
    </IconBase>
  ))
);

HashItalicFillDuotone.displayName = 'HashItalicFillDuotone';

// Triple export pattern
export { HashItalicFillDuotone, HashItalicFillDuotone as HashItalicFillDuotoneIcon, HashItalicFillDuotone as SiHashItalicFillDuotone };
export default HashItalicFillDuotone;
export type { HashItalicFillDuotoneProps };
