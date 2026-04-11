import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendVFillDuotone = memo(
  forwardRef<SVGSVGElement, SendVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.1 2.84a2.12 2.12 0 0 1 3.8 0l8.1 16.2a2.12 2.12 0 0 1-2.92 2.82l-6.2-3.39V10a.88.88 0 0 0-1.75 0v8.47l-6.21 3.39A2.12 2.12 0 0 1 2 19.04z" opacity={.4} />
        <path d="M12 9.13c.48 0 .88.39.88.87v8.47L12 18l-.87.47V10c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

SendVFillDuotone.displayName = 'SendVFillDuotone';

// Triple export pattern (lucide-react style)
export { SendVFillDuotone, SendVFillDuotone as SendVFillDuotoneIcon, SendVFillDuotone as SiSendVFillDuotone };
export default SendVFillDuotone;
export type { SendVFillDuotoneProps };
