import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckBoldDuotone = memo(
  forwardRef<SVGSVGElement, CheckBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m9.53 18.69-.1.08zM3.43 10.32c.45-.31 1.07-.2 1.39.25l4.1 5.84-.85.9c-.33.36-.35.87-.1 1.25l-4.79-6.84c-.32-.46-.2-1.08.25-1.4" opacity={0.4} />
        <path d="M19.27 5.32c.37-.4 1-.43 1.41-.05s.43 1 .05 1.41l-11.2 12c-.38.4-1 .43-1.41.05s-.43-1-.05-1.41z" />
    </IconBase>
  ))
);

CheckBoldDuotone.displayName = 'CheckBoldDuotone';

// Triple export pattern
export { CheckBoldDuotone, CheckBoldDuotone as CheckBoldDuotoneIcon, CheckBoldDuotone as SiCheckBoldDuotone };
export default CheckBoldDuotone;
export type { CheckBoldDuotoneProps };
