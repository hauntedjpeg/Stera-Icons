import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronSquareUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronSquareUpFill = memo(
  forwardRef<SVGSVGElement, ChevronSquareUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 20.88c1.39 0 2.48 0 3.36-.08s1.63-.22 2.3-.57c1.11-.56 2.01-1.46 2.57-2.56.35-.68.5-1.43.57-2.31.08-.88.07-1.97.07-3.36s0-2.48-.07-3.36-.22-1.63-.57-2.3c-.56-1.11-1.46-2.01-2.56-2.57-.68-.35-1.43-.5-2.31-.57-.88-.08-1.97-.08-3.36-.08s-2.48 0-3.36.08-1.63.22-2.3.57c-1.11.56-2.01 1.46-2.57 2.56-.35.68-.5 1.43-.57 2.31-.08.88-.08 1.97-.08 3.36s0 2.48.08 3.36.22 1.63.57 2.3c.56 1.11 1.46 2.01 2.56 2.57.68.35 1.43.5 2.31.57.88.08 1.97.07 3.36.07m4.62-6.76c-.34.34-.9.34-1.24 0L12 10.74l-3.38 3.38c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l4-4q.26-.25.62-.26.36.01.62.26l4 4c.34.34.34.9 0 1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronSquareUpFill.displayName = 'ChevronSquareUpFill';

// Triple export pattern
export { ChevronSquareUpFill, ChevronSquareUpFill as ChevronSquareUpFillIcon, ChevronSquareUpFill as SiChevronSquareUpFill };
export default ChevronSquareUpFill;
export type { ChevronSquareUpFillProps };
