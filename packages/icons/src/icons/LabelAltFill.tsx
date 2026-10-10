import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltFillProps = Omit<IconBaseProps, 'children'>;

const LabelAltFill = memo(
  forwardRef<SVGSVGElement, LabelAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.97 4.13c.93 0 1.8.44 2.34 1.2l3.57 5c.72 1 .72 2.34 0 3.34l-3.57 5c-.54.76-1.41 1.2-2.34 1.2H3.94c-1.52 0-2.4-1.72-1.52-2.96l3.04-4.26c.28-.39.28-.91 0-1.3L2.42 7.09c-.89-1.24 0-2.96 1.52-2.96z" />
    </IconBase>
  ))
);

LabelAltFill.displayName = 'LabelAltFill';

// Triple export pattern
export { LabelAltFill, LabelAltFill as LabelAltFillIcon, LabelAltFill as SiLabelAltFill };
export default LabelAltFill;
export type { LabelAltFillProps };
