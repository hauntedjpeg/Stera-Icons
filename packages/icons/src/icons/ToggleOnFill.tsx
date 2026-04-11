import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToggleOnFillProps = Omit<IconBaseProps, 'children'>;

const ToggleOnFill = memo(
  forwardRef<SVGSVGElement, ToggleOnFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 4.13a7.88 7.88 0 0 1 0 15.75H9A7.88 7.88 0 0 1 9 4.13zm0 4a3.88 3.88 0 1 0 0 7.75 3.88 3.88 0 0 0 0-7.76" clipRule="evenodd" />
    </IconBase>
  ))
);

ToggleOnFill.displayName = 'ToggleOnFill';

// Triple export pattern (lucide-react style)
export { ToggleOnFill, ToggleOnFill as ToggleOnFillIcon, ToggleOnFill as SiToggleOnFill };
export default ToggleOnFill;
export type { ToggleOnFillProps };
