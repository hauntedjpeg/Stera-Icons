import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelFillDuotone = memo(
  forwardRef<SVGSVGElement, LabelFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 5.88c1.73 0 3.13 1.4 3.13 3.12v6c0 1.73-1.4 3.12-3.13 3.13H9.06c-1.01 0-1.96-.5-2.54-1.31l-2.98-4.17c-.28-.39-.28-.91 0-1.3l2.98-4.17a3.1 3.1 0 0 1 2.54-1.3z" opacity={0.4} />
        <path fillRule="evenodd" d="M17 4a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H9.06a5 5 0 0 1-4.07-2.1l-2.97-4.16a3 3 0 0 1 0-3.48l2.97-4.17A5 5 0 0 1 9.06 4zm-7.94.13c-1.58 0-3.05.76-3.97 2.04l-2.97 4.16c-.72 1-.72 2.34 0 3.34l2.97 4.16a4.9 4.9 0 0 0 3.97 2.05H17c2.7 0 4.88-2.19 4.88-4.88V9c0-2.7-2.19-4.87-4.88-4.87z" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M17 4.13c2.7 0 4.88 2.18 4.88 4.87v6c0 2.7-2.19 4.88-4.88 4.88H9.06a4.9 4.9 0 0 1-3.97-2.05l-2.97-4.16c-.72-1-.72-2.34 0-3.34l2.97-4.16a4.9 4.9 0 0 1 3.97-2.04zM9.06 5.88c-1.01 0-1.96.48-2.54 1.3l-2.98 4.17c-.28.39-.28.91 0 1.3l2.98 4.17c.58.82 1.53 1.3 2.54 1.3H17c1.73 0 3.13-1.4 3.13-3.12V9c0-1.73-1.4-3.12-3.13-3.12z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelFillDuotone.displayName = 'LabelFillDuotone';

// Triple export pattern (lucide-react style)
export { LabelFillDuotone, LabelFillDuotone as LabelFillDuotoneIcon, LabelFillDuotone as SiLabelFillDuotone };
export default LabelFillDuotone;
export type { LabelFillDuotoneProps };
