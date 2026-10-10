import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronSquareDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronSquareDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronSquareDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3.13c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36s0 2.48-.07 3.36-.22 1.63-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07s-2.48 0-3.36-.07-1.63-.22-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56-.35-.68-.5-1.43-.57-2.31-.08-.88-.08-1.97-.08-3.36s0-2.48.08-3.36.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08m4.62 6.75c-.34-.34-.9-.34-1.24 0L12 13.26 8.62 9.88c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l4 4q.26.24.62.25.36 0 .62-.25l4-4c.34-.34.34-.9 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M15.38 9.88c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-4 4q-.27.24-.62.25-.36 0-.62-.25l-4-4c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0L12 13.26z" />
    </IconBase>
  ))
);

ChevronSquareDownFillDuotone.displayName = 'ChevronSquareDownFillDuotone';

// Triple export pattern
export { ChevronSquareDownFillDuotone, ChevronSquareDownFillDuotone as ChevronSquareDownFillDuotoneIcon, ChevronSquareDownFillDuotone as SiChevronSquareDownFillDuotone };
export default ChevronSquareDownFillDuotone;
export type { ChevronSquareDownFillDuotoneProps };
