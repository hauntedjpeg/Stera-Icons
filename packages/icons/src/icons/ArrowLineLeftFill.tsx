import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowLineLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowLineLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 3.13c.48 0 .88.39.88.87v16c0 .48-.4.88-.88.88s-.87-.4-.87-.88V4c0-.48.39-.87.87-.87M12.61 5.15c.84-.83 2.26-.24 2.27.94v5.04H21c.48 0 .88.39.88.87s-.4.88-.88.88h-6.12v5.03c0 1.18-1.43 1.77-2.27.94L6.76 13c-.55-.55-.55-1.43 0-1.98z" />
    </IconBase>
  ))
);

ArrowLineLeftFill.displayName = 'ArrowLineLeftFill';

// Triple export pattern
export { ArrowLineLeftFill, ArrowLineLeftFill as ArrowLineLeftFillIcon, ArrowLineLeftFill as SiArrowLineLeftFill };
export default ArrowLineLeftFill;
export type { ArrowLineLeftFillProps };
