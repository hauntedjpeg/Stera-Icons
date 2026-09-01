import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelFillProps = Omit<IconBaseProps, 'children'>;

const LabelFill = memo(
  forwardRef<SVGSVGElement, LabelFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.46 4.13c1.25 0 2.42.6 3.15 1.62l3.27 4.58c.72 1 .72 2.34 0 3.34l-3.27 4.58a3.9 3.9 0 0 1-3.15 1.63H6A3.9 3.9 0 0 1 2.13 16V8A3.9 3.9 0 0 1 6 4.13z" />
    </IconBase>
  ))
);

LabelFill.displayName = 'LabelFill';

// Triple export pattern (lucide-react style)
export { LabelFill, LabelFill as LabelFillIcon, LabelFill as SiLabelFill };
export default LabelFill;
export type { LabelFillProps };
