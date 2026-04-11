import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownFillProps = Omit<IconBaseProps, 'children'>;

const ArrowDownFill = memo(
  forwardRef<SVGSVGElement, ArrowDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4.13c.48 0 .87.39.87.87v7.13H18a.88.88 0 0 1 .62 1.49l-6 6a.9.9 0 0 1-1.24 0l-6-6a.88.88 0 0 1 .62-1.5h5.12V5c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

ArrowDownFill.displayName = 'ArrowDownFill';

// Triple export pattern (lucide-react style)
export { ArrowDownFill, ArrowDownFill as ArrowDownFillIcon, ArrowDownFill as SiArrowDownFill };
export default ArrowDownFill;
export type { ArrowDownFillProps };
