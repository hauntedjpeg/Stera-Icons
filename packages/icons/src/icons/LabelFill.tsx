import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelFillProps = Omit<IconBaseProps, 'children'>;

const LabelFill = memo(
  forwardRef<SVGSVGElement, LabelFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-fill" {...props}>
      <path d="M17 4.13c2.7 0 4.87 2.18 4.87 4.87v6c0 2.7-2.18 4.88-4.87 4.88H9.06a4.9 4.9 0 0 1-3.97-2.05l-2.97-4.16c-.72-1-.72-2.34 0-3.34l2.97-4.16a4.9 4.9 0 0 1 3.97-2.04z" />
    </IconBase>
  ))
);

LabelFill.displayName = 'LabelFill';

// Triple export pattern (lucide-react style)
export { LabelFill, LabelFill as LabelFillIcon, LabelFill as SiLabelFill };
export default LabelFill;
export type { LabelFillProps };
