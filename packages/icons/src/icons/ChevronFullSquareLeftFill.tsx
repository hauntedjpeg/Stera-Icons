import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullSquareLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-square-left-fill" {...props}>
      <path fillRule="evenodd" d="M21.38 12.5c0 1.39 0 2.48-.08 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08h1c1.39 0 2.48 0 3.36.08s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36zm-6.75-3.49c0-.94-1.08-1.46-1.82-.89l-3.84 3a1.12 1.12 0 0 0 0 1.77l3.84 2.99c.74.57 1.81.04 1.81-.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullSquareLeftFill.displayName = 'ChevronFullSquareLeftFill';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareLeftFill, ChevronFullSquareLeftFill as ChevronFullSquareLeftFillIcon, ChevronFullSquareLeftFill as SiChevronFullSquareLeftFill };
export default ChevronFullSquareLeftFill;
export type { ChevronFullSquareLeftFillProps };
