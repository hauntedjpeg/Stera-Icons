import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendFillProps = Omit<IconBaseProps, 'children'>;

const SendFill = memo(
  forwardRef<SVGSVGElement, SendFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.22 2.23a2.02 2.02 0 0 1 2.55 2.55L16.53 20.5a2.02 2.02 0 0 1-3.85-.06l-1.79-6.09 5.73-5.72a.88.88 0 0 0-1.24-1.24L9.65 13.1l-6.08-1.8a2.02 2.02 0 0 1-.06-3.84z" />
    </IconBase>
  ))
);

SendFill.displayName = 'SendFill';

// Triple export pattern (lucide-react style)
export { SendFill, SendFill as SendFillIcon, SendFill as SiSendFill };
export default SendFill;
export type { SendFillProps };
