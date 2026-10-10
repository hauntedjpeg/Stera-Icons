import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendRegularDuotone = memo(
  forwardRef<SVGSVGElement, SendRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.47 7.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-4.37 4.37-.12-.43q-.13-.38-.51-.5l-.43-.13z" opacity={.4} />
        <path fillRule="evenodd" d="M19.26 2.35c1.48-.5 2.88.91 2.4 2.4l-5.25 15.7c-.58 1.76-3.08 1.72-3.6-.06l-2.1-7.1-7.1-2.1c-1.78-.51-1.82-3.02-.06-3.6zm.97 1.92c.1-.3-.2-.6-.5-.5L4.02 9.01c-.37.12-.36.64.01.75l7.5 2.2q.38.13.5.51l2.21 7.5c.11.37.63.38.75.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

SendRegularDuotone.displayName = 'SendRegularDuotone';

// Triple export pattern
export { SendRegularDuotone, SendRegularDuotone as SendRegularDuotoneIcon, SendRegularDuotone as SiSendRegularDuotone };
export default SendRegularDuotone;
export type { SendRegularDuotoneProps };
