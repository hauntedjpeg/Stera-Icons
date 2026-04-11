import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronSquareLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronSquareLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronSquareLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.88 12c0 1.39 0 2.48-.08 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07s-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36s0-2.48.08-3.36.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08s2.48 0 3.36.08 1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36m-6.76 4.62a.9.9 0 0 0 0-1.24L10.74 12l3.38-3.38a.88.88 0 0 0-1.24-1.24l-4 4a.9.9 0 0 0 0 1.24l4 4c.34.34.9.34 1.24 0" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronSquareLeftFill.displayName = 'ChevronSquareLeftFill';

// Triple export pattern (lucide-react style)
export { ChevronSquareLeftFill, ChevronSquareLeftFill as ChevronSquareLeftFillIcon, ChevronSquareLeftFill as SiChevronSquareLeftFill };
export default ChevronSquareLeftFill;
export type { ChevronSquareLeftFillProps };
