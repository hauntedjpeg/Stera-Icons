import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullSquareUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareUpFill = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.5 21.38c1.39 0 2.48 0 3.36-.08a6 6 0 0 0 2.3-.57c1.11-.56 2.01-1.46 2.57-2.56.35-.68.5-1.43.57-2.31.08-.88.07-1.97.07-3.36v-1c0-1.39 0-2.48-.07-3.36a6 6 0 0 0-.57-2.3c-.56-1.11-1.46-2.01-2.56-2.57a6 6 0 0 0-2.31-.57c-.88-.08-1.97-.08-3.36-.08h-1c-1.39 0-2.48 0-3.36.08s-1.63.22-2.3.57c-1.11.56-2.01 1.46-2.57 2.56-.35.68-.5 1.43-.57 2.31-.08.88-.08 1.97-.08 3.36v1c0 1.39 0 2.48.08 3.36s.22 1.63.57 2.3c.56 1.11 1.46 2.01 2.56 2.57.68.35 1.43.5 2.31.57.88.08 1.97.07 3.36.07zm-3.49-6.75a1.12 1.12 0 0 1-.89-1.82l3-3.84a1.12 1.12 0 0 1 1.77 0l2.99 3.84c.57.74.04 1.81-.9 1.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullSquareUpFill.displayName = 'ChevronFullSquareUpFill';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareUpFill, ChevronFullSquareUpFill as ChevronFullSquareUpFillIcon, ChevronFullSquareUpFill as SiChevronFullSquareUpFill };
export default ChevronFullSquareUpFill;
export type { ChevronFullSquareUpFillProps };
