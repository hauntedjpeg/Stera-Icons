import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToggleOnFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToggleOnFillDuotone = memo(
  forwardRef<SVGSVGElement, ToggleOnFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 4.13a7.88 7.88 0 0 1 0 15.75H9A7.88 7.88 0 0 1 9 4.13zm0 4a3.88 3.88 0 1 0 0 7.75 3.88 3.88 0 0 0 0-7.76" clipRule="evenodd" opacity={.4} />
        <path d="M15 8.13a3.88 3.88 0 1 1 0 7.75 3.88 3.88 0 0 1 0-7.76" />
    </IconBase>
  ))
);

ToggleOnFillDuotone.displayName = 'ToggleOnFillDuotone';

// Triple export pattern (lucide-react style)
export { ToggleOnFillDuotone, ToggleOnFillDuotone as ToggleOnFillDuotoneIcon, ToggleOnFillDuotone as SiToggleOnFillDuotone };
export default ToggleOnFillDuotone;
export type { ToggleOnFillDuotoneProps };
