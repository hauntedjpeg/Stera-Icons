import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastFillDuotone = memo(
  forwardRef<SVGSVGElement, ContrastFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.13 12c0 5.45 4.42 9.88 9.87 9.88V2.13c-5.45 0-9.87 4.42-9.87 9.87" opacity={.4} />
        <path d="M21.88 12c0 5.45-4.43 9.88-9.88 9.88V2.13c5.45 0 9.88 4.42 9.88 9.87" />
    </IconBase>
  ))
);

ContrastFillDuotone.displayName = 'ContrastFillDuotone';

// Triple export pattern
export { ContrastFillDuotone, ContrastFillDuotone as ContrastFillDuotoneIcon, ContrastFillDuotone as SiContrastFillDuotone };
export default ContrastFillDuotone;
export type { ContrastFillDuotoneProps };
