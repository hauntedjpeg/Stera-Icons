import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down-right-fill-duotone" {...props}>
      <path d="M5.38 5.38a.9.9 0 0 1 1.24 0l6.88 6.88-1.24 1.24-6.88-6.88a.9.9 0 0 1 0-1.24" opacity={.4} />
        <path d="M17.38 8.38a.88.88 0 0 1 1.5.62v9c0 .48-.4.87-.88.87H9a.88.88 0 0 1-.62-1.49z" />
    </IconBase>
  ))
);

ArrowDownRightFillDuotone.displayName = 'ArrowDownRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowDownRightFillDuotone, ArrowDownRightFillDuotone as ArrowDownRightFillDuotoneIcon, ArrowDownRightFillDuotone as SiArrowDownRightFillDuotone };
export default ArrowDownRightFillDuotone;
export type { ArrowDownRightFillDuotoneProps };
