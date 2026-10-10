import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToggleOnFillProps = Omit<IconBaseProps, 'children'>;

const ToggleOnFill = memo(
  forwardRef<SVGSVGElement, ToggleOnFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 4.13c4.35 0 7.88 3.52 7.88 7.87s-3.53 7.88-7.88 7.88H9c-4.35 0-7.87-3.53-7.87-7.88S4.64 4.13 9 4.13zm0 4c-2.14 0-3.87 1.73-3.87 3.87s1.73 3.88 3.87 3.88 3.88-1.74 3.88-3.88S17.14 8.13 15 8.13" clipRule="evenodd" />
    </IconBase>
  ))
);

ToggleOnFill.displayName = 'ToggleOnFill';

// Triple export pattern
export { ToggleOnFill, ToggleOnFill as ToggleOnFillIcon, ToggleOnFill as SiToggleOnFill };
export default ToggleOnFill;
export type { ToggleOnFillProps };
