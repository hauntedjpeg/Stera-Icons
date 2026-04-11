import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendHFillProps = Omit<IconBaseProps, 'children'>;

const SendHFill = memo(
  forwardRef<SVGSVGElement, SendHFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.97 5.6a2.01 2.01 0 0 1 2.66-2.76l14.73 7.36a2.01 2.01 0 0 1 0 3.6L5.63 21.16a2.01 2.01 0 0 1-2.66-2.76l3.01-5.52H13a.88.88 0 0 0 0-1.75H5.98z" />
    </IconBase>
  ))
);

SendHFill.displayName = 'SendHFill';

// Triple export pattern (lucide-react style)
export { SendHFill, SendHFill as SendHFillIcon, SendHFill as SiSendHFill };
export default SendHFill;
export type { SendHFillProps };
