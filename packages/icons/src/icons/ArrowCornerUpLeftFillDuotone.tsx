import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 10.12c1.8 0 2.9 0 3.82.3 1.78.57 3.19 1.98 3.77 3.76.3.92.29 2.03.29 3.82 0 .48-.4.87-.88.87s-.87-.39-.87-.87c0-1.93-.02-2.69-.2-3.27-.42-1.26-1.4-2.24-2.66-2.65-.58-.2-1.34-.2-3.27-.2H9.88v-1.76z" opacity={.4} />
        <path d="M8.38 5.38c.25-.25.63-.32.95-.19.33.14.54.46.54.81v10c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-5-5q-.25-.27-.25-.62 0-.31.2-.55l.05-.07z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftFillDuotone.displayName = 'ArrowCornerUpLeftFillDuotone';

// Triple export pattern
export { ArrowCornerUpLeftFillDuotone, ArrowCornerUpLeftFillDuotone as ArrowCornerUpLeftFillDuotoneIcon, ArrowCornerUpLeftFillDuotone as SiArrowCornerUpLeftFillDuotone };
export default ArrowCornerUpLeftFillDuotone;
export type { ArrowCornerUpLeftFillDuotoneProps };
