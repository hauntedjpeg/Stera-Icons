import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 5.13c.48 0 .88.39.88.87 0 1.8 0 2.9-.3 3.82-.57 1.78-1.98 3.19-3.76 3.77-.92.3-2.03.29-3.82.29H9.88v-1.76H13c1.93 0 2.69 0 3.27-.2 1.26-.4 2.24-1.39 2.65-2.65.2-.58.2-1.34.2-3.27 0-.48.4-.87.88-.87" opacity={.4} />
        <path d="M8.38 7.38c.25-.25.63-.32.95-.19.33.14.54.46.54.81v10c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-5-5-.06-.07q-.19-.24-.2-.55.01-.36.26-.62z" />
    </IconBase>
  ))
);

ArrowCornerDownLeftFillDuotone.displayName = 'ArrowCornerDownLeftFillDuotone';

// Triple export pattern
export { ArrowCornerDownLeftFillDuotone, ArrowCornerDownLeftFillDuotone as ArrowCornerDownLeftFillDuotoneIcon, ArrowCornerDownLeftFillDuotone as SiArrowCornerDownLeftFillDuotone };
export default ArrowCornerDownLeftFillDuotone;
export type { ArrowCornerDownLeftFillDuotoneProps };
