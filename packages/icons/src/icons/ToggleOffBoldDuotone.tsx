import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToggleOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToggleOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, ToggleOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 4c4.42 0 8 3.58 8 8s-3.58 8-8 8H9c-4.42 0-8-3.58-8-8s3.58-8 8-8zM9 6c-3.31 0-6 2.69-6 6s2.69 6 6 6h6c3.31 0 6-2.69 6-6s-2.69-6-6-6z" clipRule="evenodd" opacity={.4} />
        <path d="M9 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4" />
    </IconBase>
  ))
);

ToggleOffBoldDuotone.displayName = 'ToggleOffBoldDuotone';

// Triple export pattern
export { ToggleOffBoldDuotone, ToggleOffBoldDuotone as ToggleOffBoldDuotoneIcon, ToggleOffBoldDuotone as SiToggleOffBoldDuotone };
export default ToggleOffBoldDuotone;
export type { ToggleOffBoldDuotoneProps };
