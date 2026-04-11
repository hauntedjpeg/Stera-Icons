import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SkipBackFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SkipBackFillDuotone = memo(
  forwardRef<SVGSVGElement, SkipBackFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.5 4.13c.48 0 .88.39.88.87v14a.88.88 0 0 1-1.75 0V5c0-.48.39-.87.87-.87" opacity={.4} />
        <path d="M18.61 4c.55.03 1.05.3 1.39.74a2 2 0 0 1 .35 1.04q.03.5.02 1.2v10.03q0 .71-.02 1.2a2 2 0 0 1-.35 1.05c-.34.44-.84.71-1.39.74-.42.03-.78-.13-1.06-.29q-.44-.24-1.02-.64L9.5 14.39q-.62-.4-1.02-.71a2 2 0 0 1-.7-.87 2.1 2.1 0 0 1 0-1.62c.16-.38.43-.65.7-.87q.4-.31 1.02-.71l7.02-4.68q.59-.4 1.02-.64c.24-.14.55-.28.9-.3z" />
    </IconBase>
  ))
);

SkipBackFillDuotone.displayName = 'SkipBackFillDuotone';

// Triple export pattern (lucide-react style)
export { SkipBackFillDuotone, SkipBackFillDuotone as SkipBackFillDuotoneIcon, SkipBackFillDuotone as SiSkipBackFillDuotone };
export default SkipBackFillDuotone;
export type { SkipBackFillDuotoneProps };
