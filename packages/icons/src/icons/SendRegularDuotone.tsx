import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendRegularDuotone = memo(
  forwardRef<SVGSVGElement, SendRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.03 8.91c.29-.29.76-.29 1.06 0 .29.3.29.77 0 1.06l-3.85 3.85-.13-.42-.03-.1q-.14-.31-.48-.41l-.42-.13z" opacity={.4} />
        <path fillRule="evenodd" d="M17.42 4.34c1.38-.46 2.7.86 2.24 2.24L15 20.54c-.54 1.64-2.88 1.6-3.37-.06L9.8 14.21l-6.27-1.84c-1.66-.5-1.7-2.83-.06-3.37zm.48 1.43L3.93 10.42c-.24.08-.24.44.01.5l6.66 1.97q.35.1.48.42l.03.09 1.96 6.66c.08.25.43.26.5 0L18.24 6.1c.07-.2-.12-.4-.33-.33" clipRule="evenodd" />
    </IconBase>
  ))
);

SendRegularDuotone.displayName = 'SendRegularDuotone';

// Triple export pattern
export { SendRegularDuotone, SendRegularDuotone as SendRegularDuotoneIcon, SendRegularDuotone as SiSendRegularDuotone };
export default SendRegularDuotone;
export type { SendRegularDuotoneProps };
