import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownFillProps = Omit<IconBaseProps, 'children'>;

const ArrowDownFill = memo(
  forwardRef<SVGSVGElement, ArrowDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4.13c.48 0 .87.39.87.87v7.13H18c.35 0 .67.2.8.53.14.33.07.7-.18.96l-6 6c-.34.34-.9.34-1.24 0l-6-6c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54h5.12V5c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

ArrowDownFill.displayName = 'ArrowDownFill';

// Triple export pattern
export { ArrowDownFill, ArrowDownFill as ArrowDownFillIcon, ArrowDownFill as SiArrowDownFill };
export default ArrowDownFill;
export type { ArrowDownFillProps };
