import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelFillProps = Omit<IconBaseProps, 'children'>;

const LabelFill = memo(
  forwardRef<SVGSVGElement, LabelFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.46 4.13c1.25 0 2.42.6 3.15 1.62l3.27 4.58c.72 1 .72 2.34 0 3.34l-3.27 4.58c-.73 1.02-1.9 1.63-3.15 1.63H6c-2.14 0-3.87-1.74-3.87-3.88V8c0-2.14 1.73-3.87 3.87-3.87z" />
    </IconBase>
  ))
);

LabelFill.displayName = 'LabelFill';

// Triple export pattern
export { LabelFill, LabelFill as LabelFillIcon, LabelFill as SiLabelFill };
export default LabelFill;
export type { LabelFillProps };
