import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullSquareDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullSquareDownFill = memo(
  forwardRef<SVGSVGElement, ChevronFullSquareDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zM9.01 9.38a1.12 1.12 0 0 0-.89 1.81l3 3.84c.44.58 1.32.58 1.77 0l2.99-3.84c.57-.74.04-1.81-.9-1.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullSquareDownFill.displayName = 'ChevronFullSquareDownFill';

// Triple export pattern (lucide-react style)
export { ChevronFullSquareDownFill, ChevronFullSquareDownFill as ChevronFullSquareDownFillIcon, ChevronFullSquareDownFill as SiChevronFullSquareDownFill };
export default ChevronFullSquareDownFill;
export type { ChevronFullSquareDownFillProps };
