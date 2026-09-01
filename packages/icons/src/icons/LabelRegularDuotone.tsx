import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelRegularDuotone = memo(
  forwardRef<SVGSVGElement, LabelRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.76 6.06a.75.75 0 0 1 1.05.18l2.97 4.16c.68.96.68 2.24 0 3.2l-2.97 4.16a.75.75 0 0 1-1.22-.87l2.97-4.16c.31-.44.31-1.02 0-1.46l-2.97-4.16a.75.75 0 0 1 .17-1.05" />
        <path fillRule="evenodd" d="M15.46 4.25c1.2 0 2.34.58 3.05 1.57l3.27 4.58-2.97-4.16a.75.75 0 0 0-1.22.87l-.3-.42c-.43-.59-1.1-.94-1.83-.94H6c-1.24 0-2.25 1-2.25 2.25v8c0 1.24 1 2.25 2.25 2.25h9.46c.72 0 1.4-.35 1.83-.94l.3-.42a.75.75 0 0 0 1.22.87l-.3.42a3.8 3.8 0 0 1-3.05 1.57H6A3.75 3.75 0 0 1 2.25 16V8A3.75 3.75 0 0 1 6 4.25z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

LabelRegularDuotone.displayName = 'LabelRegularDuotone';

// Triple export pattern (lucide-react style)
export { LabelRegularDuotone, LabelRegularDuotone as LabelRegularDuotoneIcon, LabelRegularDuotone as SiLabelRegularDuotone };
export default LabelRegularDuotone;
export type { LabelRegularDuotoneProps };
