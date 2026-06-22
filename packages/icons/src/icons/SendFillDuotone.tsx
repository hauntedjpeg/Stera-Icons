import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendFillDuotone = memo(
  forwardRef<SVGSVGElement, SendFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.38 7.38a.88.88 0 0 1 1.24 1.24l-5.73 5.73-.28-.96-.96-.28z" />
        <path d="m9.65 13.1-6.08-1.78a2.02 2.02 0 0 1-.06-3.85l15.7-5.24a2.02 2.02 0 0 1 2.56 2.55L16.53 20.5a2.02 2.02 0 0 1-3.85-.07l-1.79-6.08 5.73-5.73a.87.87 0 0 0-1.24-1.24z" opacity={.4} />
    </IconBase>
  ))
);

SendFillDuotone.displayName = 'SendFillDuotone';

// Triple export pattern (lucide-react style)
export { SendFillDuotone, SendFillDuotone as SendFillDuotoneIcon, SendFillDuotone as SiSendFillDuotone };
export default SendFillDuotone;
export type { SendFillDuotoneProps };
