import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronSquareRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronSquareRightFill = memo(
  forwardRef<SVGSVGElement, ChevronSquareRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-square-right-fill" {...props}>
      <path fillRule="evenodd" d="M3.13 12c0 1.39 0 2.48.07 3.36s.22 1.63.57 2.3c.56 1.11 1.46 2.01 2.56 2.57.68.35 1.43.5 2.31.57.88.08 1.97.07 3.36.07s2.48 0 3.36-.07a6 6 0 0 0 2.3-.57c1.11-.56 2.01-1.46 2.57-2.56.35-.68.5-1.43.57-2.31.08-.88.07-1.97.07-3.36s0-2.48-.07-3.36a6 6 0 0 0-.57-2.3c-.56-1.11-1.46-2.01-2.56-2.57a6 6 0 0 0-2.31-.57c-.88-.08-1.97-.08-3.36-.08s-2.48 0-3.36.08-1.63.22-2.3.57c-1.11.56-2.01 1.46-2.57 2.56-.35.68-.5 1.43-.57 2.31-.08.88-.08 1.97-.08 3.36m6.75 4.62a.9.9 0 0 1 0-1.24L13.26 12 9.88 8.62a.88.88 0 0 1 1.24-1.24l4 4a.9.9 0 0 1 0 1.24l-4 4a.9.9 0 0 1-1.24 0" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronSquareRightFill.displayName = 'ChevronSquareRightFill';

// Triple export pattern (lucide-react style)
export { ChevronSquareRightFill, ChevronSquareRightFill as ChevronSquareRightFillIcon, ChevronSquareRightFill as SiChevronSquareRightFill };
export default ChevronSquareRightFill;
export type { ChevronSquareRightFillProps };
