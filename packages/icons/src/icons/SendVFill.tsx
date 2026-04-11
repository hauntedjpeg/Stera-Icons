import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendVFillProps = Omit<IconBaseProps, 'children'>;

const SendVFill = memo(
  forwardRef<SVGSVGElement, SendVFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.1 2.85a2.12 2.12 0 0 1 3.8 0l8.1 16.2a2.12 2.12 0 0 1-2.92 2.81l-6.2-3.39V10a.88.88 0 0 0-1.75 0v8.47l-6.21 3.39A2.12 2.12 0 0 1 2 19.04z" />
    </IconBase>
  ))
);

SendVFill.displayName = 'SendVFill';

// Triple export pattern (lucide-react style)
export { SendVFill, SendVFill as SendVFillIcon, SendVFill as SiSendVFill };
export default SendVFill;
export type { SendVFillProps };
