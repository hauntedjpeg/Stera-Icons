import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 12.13c.35 0 .67.2.8.53.14.33.07.7-.18.96l-6 6q-.27.24-.62.25-.36 0-.62-.25l-6-6c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
        <path d="M12 4.13c.48 0 .88.39.88.87v7.13h-1.76V5c0-.48.4-.87.88-.87" opacity={.4} />
    </IconBase>
  ))
);

ArrowDownFillDuotone.displayName = 'ArrowDownFillDuotone';

// Triple export pattern
export { ArrowDownFillDuotone, ArrowDownFillDuotone as ArrowDownFillDuotoneIcon, ArrowDownFillDuotone as SiArrowDownFillDuotone };
export default ArrowDownFillDuotone;
export type { ArrowDownFillDuotoneProps };
