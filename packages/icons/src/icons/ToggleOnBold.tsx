import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToggleOnBoldProps = Omit<IconBaseProps, 'children'>;

const ToggleOnBold = memo(
  forwardRef<SVGSVGElement, ToggleOnBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4" />
        <path fillRule="evenodd" d="M15 4c4.42 0 8 3.58 8 8s-3.58 8-8 8H9c-4.42 0-8-3.58-8-8s3.58-8 8-8zM9 6c-3.31 0-6 2.69-6 6s2.69 6 6 6h6c3.31 0 6-2.69 6-6s-2.69-6-6-6z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToggleOnBold.displayName = 'ToggleOnBold';

// Triple export pattern
export { ToggleOnBold, ToggleOnBold as ToggleOnBoldIcon, ToggleOnBold as SiToggleOnBold };
export default ToggleOnBold;
export type { ToggleOnBoldProps };
