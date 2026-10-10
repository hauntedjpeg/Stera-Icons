import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToggleOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToggleOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, ToggleOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 4.25c4.28 0 7.75 3.47 7.75 7.75s-3.47 7.75-7.75 7.75H9c-4.28 0-7.75-3.47-7.75-7.75 0-4.15 3.26-7.53 7.35-7.74l.4-.01zm-6 1.5h-.32c-3.3.18-5.93 2.9-5.93 6.25 0 3.45 2.8 6.25 6.25 6.25h6c3.45 0 6.25-2.8 6.25-6.25S18.45 5.75 15 5.75z" clipRule="evenodd" opacity={.4} />
        <path d="M9 8.25c2.07 0 3.75 1.68 3.75 3.75S11.07 15.75 9 15.75 5.25 14.07 5.25 12 6.93 8.25 9 8.25" />
    </IconBase>
  ))
);

ToggleOffRegularDuotone.displayName = 'ToggleOffRegularDuotone';

// Triple export pattern
export { ToggleOffRegularDuotone, ToggleOffRegularDuotone as ToggleOffRegularDuotoneIcon, ToggleOffRegularDuotone as SiToggleOffRegularDuotone };
export default ToggleOffRegularDuotone;
export type { ToggleOffRegularDuotoneProps };
