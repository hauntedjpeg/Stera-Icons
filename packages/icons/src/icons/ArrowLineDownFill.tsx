import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineDownFillProps = Omit<IconBaseProps, 'children'>;

const ArrowLineDownFill = memo(
  forwardRef<SVGSVGElement, ArrowLineDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 20.13c.48 0 .88.39.88.87s-.4.88-.88.88H4c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM12 2.13c.48 0 .88.39.88.87v6.13h5.03c1.18 0 1.77 1.42.94 2.26L13 17.24c-.55.55-1.43.55-1.98 0L5.15 11.4c-.83-.84-.24-2.26.94-2.27h5.04V3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ArrowLineDownFill.displayName = 'ArrowLineDownFill';

// Triple export pattern
export { ArrowLineDownFill, ArrowLineDownFill as ArrowLineDownFillIcon, ArrowLineDownFill as SiArrowLineDownFill };
export default ArrowLineDownFill;
export type { ArrowLineDownFillProps };
