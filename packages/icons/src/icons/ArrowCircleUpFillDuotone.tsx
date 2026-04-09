import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 21.88a9.88 9.88 0 1 0 0-19.76 9.88 9.88 0 0 0 0 19.76m0-5a.9.9 0 0 1-.87-.88v-5.89l-2.51 2.5a.88.88 0 0 1-1.24-1.23l4-4a.9.9 0 0 1 1.24 0l4 4a.88.88 0 0 1-1.24 1.24l-2.5-2.5V16c0 .48-.4.88-.88.88" clipRule="evenodd" opacity={.4} />
        <path d="M12 16.88c.48 0 .87-.4.87-.88v-5.89l2.51 2.5a.88.88 0 0 0 1.24-1.23l-4-4a.9.9 0 0 0-1.24 0l-4 4a.88.88 0 0 0 1.24 1.24l2.5-2.5V16c0 .48.4.87.88.88" />
    </IconBase>
  ))
);

ArrowCircleUpFillDuotone.displayName = 'ArrowCircleUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpFillDuotone, ArrowCircleUpFillDuotone as ArrowCircleUpFillDuotoneIcon, ArrowCircleUpFillDuotone as SiArrowCircleUpFillDuotone };
export default ArrowCircleUpFillDuotone;
export type { ArrowCircleUpFillDuotoneProps };
