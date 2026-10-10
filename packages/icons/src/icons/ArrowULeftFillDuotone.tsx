import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 4.13c3.52 0 6.38 2.85 6.38 6.37s-2.86 6.38-6.38 6.38H8.88v-1.75h4.62c2.55 0 4.63-2.08 4.63-4.63s-2.08-4.62-4.63-4.62H9c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" opacity={.4} />
        <path d="M7.38 11.38c.25-.25.63-.32.95-.19.33.14.54.46.54.81v8c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-4-4-.06-.07q-.19-.24-.2-.55.01-.36.26-.62z" />
    </IconBase>
  ))
);

ArrowULeftFillDuotone.displayName = 'ArrowULeftFillDuotone';

// Triple export pattern
export { ArrowULeftFillDuotone, ArrowULeftFillDuotone as ArrowULeftFillDuotoneIcon, ArrowULeftFillDuotone as SiArrowULeftFillDuotone };
export default ArrowULeftFillDuotone;
export type { ArrowULeftFillDuotoneProps };
