import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToggleOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToggleOffFillDuotone = memo(
  forwardRef<SVGSVGElement, ToggleOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 4.13a7.88 7.88 0 0 1 0 15.75H9A7.88 7.88 0 0 1 9 4.13zm-6 4a3.88 3.88 0 1 0 0 7.75 3.88 3.88 0 0 0 0-7.76" clipRule="evenodd" opacity={.4} />
        <path d="M9 8.13a3.88 3.88 0 1 1 0 7.75 3.88 3.88 0 0 1 0-7.76" />
    </IconBase>
  ))
);

ToggleOffFillDuotone.displayName = 'ToggleOffFillDuotone';

// Triple export pattern (lucide-react style)
export { ToggleOffFillDuotone, ToggleOffFillDuotone as ToggleOffFillDuotoneIcon, ToggleOffFillDuotone as SiToggleOffFillDuotone };
export default ToggleOffFillDuotone;
export type { ToggleOffFillDuotoneProps };
