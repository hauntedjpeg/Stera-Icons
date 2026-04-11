import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToggleOffFillProps = Omit<IconBaseProps, 'children'>;

const ToggleOffFill = memo(
  forwardRef<SVGSVGElement, ToggleOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 4.13a7.88 7.88 0 0 1 0 15.75H9A7.88 7.88 0 0 1 9 4.13zm-6 4a3.88 3.88 0 1 0 0 7.75 3.88 3.88 0 0 0 0-7.76" clipRule="evenodd" />
    </IconBase>
  ))
);

ToggleOffFill.displayName = 'ToggleOffFill';

// Triple export pattern (lucide-react style)
export { ToggleOffFill, ToggleOffFill as ToggleOffFillIcon, ToggleOffFill as SiToggleOffFill };
export default ToggleOffFill;
export type { ToggleOffFillProps };
