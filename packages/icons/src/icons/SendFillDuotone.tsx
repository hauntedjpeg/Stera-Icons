import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendFillDuotone = memo(
  forwardRef<SVGSVGElement, SendFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.42 4.34c1.38-.46 2.7.86 2.24 2.24L15 20.54c-.54 1.64-2.88 1.6-3.37-.06l-1.6-5.45 5-5c.3-.3.3-.77 0-1.06s-.77-.3-1.06 0l-5 5-5.45-1.6c-1.66-.5-1.7-2.83-.06-3.37z" opacity={.4} />
        <path d="M13.97 8.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-5 5-.24-.82-.82-.24z" />
    </IconBase>
  ))
);

SendFillDuotone.displayName = 'SendFillDuotone';

// Triple export pattern
export { SendFillDuotone, SendFillDuotone as SendFillDuotoneIcon, SendFillDuotone as SiSendFillDuotone };
export default SendFillDuotone;
export type { SendFillDuotoneProps };
