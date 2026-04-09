import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronSquareRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronSquareRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronSquareRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-square-right-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 3.13c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36s0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07s-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36s0-2.48.08-3.36.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08m-.88 4.25a.88.88 0 0 0-1.24 1.24L13.26 12l-3.38 3.38a.88.88 0 0 0 1.24 1.24l4-4a.9.9 0 0 0 0-1.24z" clipRule="evenodd" opacity={.4} />
        <path d="M9.88 7.38a.9.9 0 0 1 1.24 0l4 4a.9.9 0 0 1 0 1.24l-4 4a.88.88 0 0 1-1.24-1.24L13.26 12 9.88 8.62a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

ChevronSquareRightFillDuotone.displayName = 'ChevronSquareRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronSquareRightFillDuotone, ChevronSquareRightFillDuotone as ChevronSquareRightFillDuotoneIcon, ChevronSquareRightFillDuotone as SiChevronSquareRightFillDuotone };
export default ChevronSquareRightFillDuotone;
export type { ChevronSquareRightFillDuotoneProps };
