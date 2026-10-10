import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelRegularDuotone = memo(
  forwardRef<SVGSVGElement, LabelRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.76 6.06c.34-.24.8-.16 1.05.18l2.97 4.16c.68.96.68 2.24 0 3.2l-2.97 4.16c-.24.34-.71.42-1.05.17s-.41-.7-.17-1.04l2.97-4.16c.31-.44.31-1.02 0-1.46l-2.97-4.16c-.24-.34-.17-.8.17-1.05" />
        <path fillRule="evenodd" d="M15.46 4.25c1.2 0 2.34.58 3.05 1.57l3.27 4.58-2.97-4.16c-.24-.34-.71-.42-1.05-.18-.34.25-.41.71-.17 1.05l-.3-.42c-.43-.59-1.1-.94-1.83-.94H6c-1.24 0-2.25 1-2.25 2.25v8c0 1.24 1 2.25 2.25 2.25h9.46c.72 0 1.4-.35 1.83-.94l.3-.42c-.24.34-.17.8.17 1.04.34.25.8.17 1.05-.17l-.3.42c-.7.99-1.84 1.57-3.05 1.57H6c-2.07 0-3.75-1.68-3.75-3.75V8c0-2.07 1.68-3.75 3.75-3.75z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

LabelRegularDuotone.displayName = 'LabelRegularDuotone';

// Triple export pattern
export { LabelRegularDuotone, LabelRegularDuotone as LabelRegularDuotoneIcon, LabelRegularDuotone as SiLabelRegularDuotone };
export default LabelRegularDuotone;
export type { LabelRegularDuotoneProps };
