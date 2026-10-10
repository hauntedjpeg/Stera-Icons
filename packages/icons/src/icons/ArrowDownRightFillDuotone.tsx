import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.38 5.38c.34-.34.9-.34 1.24 0l6.88 6.88-1.24 1.24-6.88-6.88c-.34-.34-.34-.9 0-1.24" opacity={.4} />
        <path d="M17.38 8.38c.25-.25.63-.32.95-.19.33.14.54.46.54.81v9c0 .48-.39.87-.87.87H9c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95z" />
    </IconBase>
  ))
);

ArrowDownRightFillDuotone.displayName = 'ArrowDownRightFillDuotone';

// Triple export pattern
export { ArrowDownRightFillDuotone, ArrowDownRightFillDuotone as ArrowDownRightFillDuotoneIcon, ArrowDownRightFillDuotone as SiArrowDownRightFillDuotone };
export default ArrowDownRightFillDuotone;
export type { ArrowDownRightFillDuotoneProps };
