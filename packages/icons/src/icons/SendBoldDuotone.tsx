import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendBoldDuotone = memo(
  forwardRef<SVGSVGElement, SendBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.85 8.74c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41l-3.74 3.74-.17-.56-.04-.12q-.2-.42-.64-.56l-.57-.17z" opacity={.4} />
        <path fillRule="evenodd" d="M17.35 4.1c1.57-.52 3.07.98 2.54 2.56l-4.65 13.96c-.62 1.87-3.29 1.83-3.85-.07l-1.8-6.14-6.14-1.8c-1.9-.56-1.94-3.22-.07-3.85zm.63 1.9L4 10.66l-.01.01v.02h.01l6.67 1.96q.43.14.63.56l.04.12 1.96 6.66.02.01.01-.01L18 6.02V6z" clipRule="evenodd" />
    </IconBase>
  ))
);

SendBoldDuotone.displayName = 'SendBoldDuotone';

// Triple export pattern
export { SendBoldDuotone, SendBoldDuotone as SendBoldDuotoneIcon, SendBoldDuotone as SiSendBoldDuotone };
export default SendBoldDuotone;
export type { SendBoldDuotoneProps };
