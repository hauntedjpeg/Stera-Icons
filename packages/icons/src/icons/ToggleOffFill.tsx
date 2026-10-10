import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToggleOffFillProps = Omit<IconBaseProps, 'children'>;

const ToggleOffFill = memo(
  forwardRef<SVGSVGElement, ToggleOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 4.13c4.35 0 7.88 3.52 7.88 7.87s-3.53 7.88-7.88 7.88H9c-4.35 0-7.87-3.53-7.87-7.88S4.64 4.13 9 4.13zm-6 4c-2.14 0-3.87 1.73-3.87 3.87S6.86 15.88 9 15.88s3.88-1.74 3.88-3.88S11.14 8.13 9 8.13" clipRule="evenodd" />
    </IconBase>
  ))
);

ToggleOffFill.displayName = 'ToggleOffFill';

// Triple export pattern
export { ToggleOffFill, ToggleOffFill as ToggleOffFillIcon, ToggleOffFill as SiToggleOffFill };
export default ToggleOffFill;
export type { ToggleOffFillProps };
