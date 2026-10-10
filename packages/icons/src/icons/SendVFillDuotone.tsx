import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendVFillDuotone = memo(
  forwardRef<SVGSVGElement, SendVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.1 2.84c.78-1.56 3.02-1.56 3.8 0l8.1 16.2c.93 1.87-1.1 3.82-2.92 2.82l-6.2-3.39V10c0-.48-.4-.87-.88-.87s-.87.39-.87.87v8.47l-6.21 3.39c-1.83 1-3.85-.95-2.92-2.82z" opacity={.4} />
        <path d="M12 9.13c.48 0 .88.39.88.87v8.47L12 18l-.87.47V10c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

SendVFillDuotone.displayName = 'SendVFillDuotone';

// Triple export pattern
export { SendVFillDuotone, SendVFillDuotone as SendVFillDuotoneIcon, SendVFillDuotone as SiSendVFillDuotone };
export default SendVFillDuotone;
export type { SendVFillDuotoneProps };
