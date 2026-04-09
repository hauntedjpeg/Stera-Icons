import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastFillDuotone = memo(
  forwardRef<SVGSVGElement, ContrastFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="contrast-fill-duotone" {...props}>
      <path d="M2.13 12A9.9 9.9 0 0 0 12 21.88V2.13A9.9 9.9 0 0 0 2.13 12" opacity={.4} />
        <path d="M21.88 12A9.9 9.9 0 0 1 12 21.88V2.13A9.9 9.9 0 0 1 21.88 12" />
    </IconBase>
  ))
);

ContrastFillDuotone.displayName = 'ContrastFillDuotone';

// Triple export pattern (lucide-react style)
export { ContrastFillDuotone, ContrastFillDuotone as ContrastFillDuotoneIcon, ContrastFillDuotone as SiContrastFillDuotone };
export default ContrastFillDuotone;
export type { ContrastFillDuotoneProps };
