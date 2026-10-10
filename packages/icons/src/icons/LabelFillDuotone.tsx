import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelFillDuotone = memo(
  forwardRef<SVGSVGElement, LabelFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.46 5.88c.68 0 1.33.33 1.73.88l3.27 4.59c.28.39.28.91 0 1.3l-3.27 4.59c-.4.55-1.05.89-1.73.89H6c-1.17 0-2.12-.96-2.12-2.13V8c0-1.17.95-2.12 2.12-2.12z" opacity={.4} />
        <path fillRule="evenodd" d="M15.46 4.13c1.25 0 2.42.6 3.15 1.62l3.27 4.58c.72 1 .72 2.34 0 3.34l-3.27 4.58c-.73 1.02-1.9 1.63-3.15 1.63H6c-2.14 0-3.87-1.74-3.87-3.88V8c0-2.14 1.73-3.87 3.87-3.87zM6 5.88c-1.17 0-2.12.95-2.12 2.12v8c0 1.17.95 2.13 2.12 2.13h9.46c.68 0 1.33-.34 1.73-.9l3.27-4.58c.28-.39.28-.91 0-1.3l-3.27-4.59c-.4-.55-1.05-.88-1.73-.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelFillDuotone.displayName = 'LabelFillDuotone';

// Triple export pattern
export { LabelFillDuotone, LabelFillDuotone as LabelFillDuotoneIcon, LabelFillDuotone as SiLabelFillDuotone };
export default LabelFillDuotone;
export type { LabelFillDuotoneProps };
