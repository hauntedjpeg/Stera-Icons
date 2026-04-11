import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightFill = memo(
  forwardRef<SVGSVGElement, ArrowDownRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.38 5.38a.9.9 0 0 1 1.24 0l6.88 6.88 3.88-3.88a.88.88 0 0 1 1.5.62v9a.9.9 0 0 1-.88.87H9a.88.88 0 0 1-.62-1.49l3.88-3.88-6.88-6.88a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

ArrowDownRightFill.displayName = 'ArrowDownRightFill';

// Triple export pattern (lucide-react style)
export { ArrowDownRightFill, ArrowDownRightFill as ArrowDownRightFillIcon, ArrowDownRightFill as SiArrowDownRightFill };
export default ArrowDownRightFill;
export type { ArrowDownRightFillProps };
