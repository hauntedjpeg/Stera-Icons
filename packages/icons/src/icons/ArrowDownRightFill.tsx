import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightFill = memo(
  forwardRef<SVGSVGElement, ArrowDownRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.38 5.38c.34-.34.9-.34 1.24 0l6.88 6.88 3.88-3.88c.25-.25.63-.32.95-.19.33.14.54.46.54.81v9q0 .35-.25.62-.26.24-.62.25H9c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95l3.88-3.88-6.88-6.88c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

ArrowDownRightFill.displayName = 'ArrowDownRightFill';

// Triple export pattern
export { ArrowDownRightFill, ArrowDownRightFill as ArrowDownRightFillIcon, ArrowDownRightFill as SiArrowDownRightFill };
export default ArrowDownRightFill;
export type { ArrowDownRightFillProps };
