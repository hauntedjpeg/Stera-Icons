import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronSquareLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronSquareLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronSquareLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3.13c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36s0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07s-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36s0-2.48.08-3.36.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08m2.12 4.25a.9.9 0 0 0-1.24 0l-4 4a.9.9 0 0 0 0 1.24l4 4a.88.88 0 0 0 1.24-1.24L10.74 12l3.38-3.38a.9.9 0 0 0 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M12.88 7.38a.88.88 0 0 1 1.24 1.24L10.74 12l3.38 3.38a.88.88 0 0 1-1.24 1.24l-4-4a.9.9 0 0 1 0-1.24z" />
    </IconBase>
  ))
);

ChevronSquareLeftFillDuotone.displayName = 'ChevronSquareLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronSquareLeftFillDuotone, ChevronSquareLeftFillDuotone as ChevronSquareLeftFillDuotoneIcon, ChevronSquareLeftFillDuotone as SiChevronSquareLeftFillDuotone };
export default ChevronSquareLeftFillDuotone;
export type { ChevronSquareLeftFillDuotoneProps };
