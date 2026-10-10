import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToggleOnRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToggleOnRegularDuotone = memo(
  forwardRef<SVGSVGElement, ToggleOnRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.4 4.26c4.1.2 7.35 3.6 7.35 7.74 0 4.28-3.47 7.75-7.75 7.75H9c-4.28 0-7.75-3.47-7.75-7.75S4.72 4.25 9 4.25h6zM9 5.75c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25h6c3.45 0 6.25-2.8 6.25-6.25 0-3.34-2.63-6.07-5.93-6.24L15 5.75z" clipRule="evenodd" opacity={.4} />
        <path d="M15 8.25c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75-3.75-1.68-3.75-3.75S12.93 8.25 15 8.25" />
    </IconBase>
  ))
);

ToggleOnRegularDuotone.displayName = 'ToggleOnRegularDuotone';

// Triple export pattern
export { ToggleOnRegularDuotone, ToggleOnRegularDuotone as ToggleOnRegularDuotoneIcon, ToggleOnRegularDuotone as SiToggleOnRegularDuotone };
export default ToggleOnRegularDuotone;
export type { ToggleOnRegularDuotoneProps };
