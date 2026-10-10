import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendVBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendVBoldDuotone = memo(
  forwardRef<SVGSVGElement, SendVBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.66 21.23c-1.84 1-3.87-.96-2.93-2.83l7.36-14.72c.79-1.58 3.03-1.58 3.82 0l7.36 14.72c.94 1.87-1.1 3.83-2.93 2.83L12 17.78zM4.5 19.38q0 .03.04.08l.08.04.08-.02 6.82-3.72c.3-.16.66-.16.96 0l6.82 3.72.08.02.08-.04q.04-.05.04-.08.01-.02-.01-.08L12.12 4.57q-.02-.04-.05-.06L12 4.5l-.07.02-.05.06L4.52 19.3q-.03.06-.02.08" clipRule="evenodd" />
        <path d="M11 11.1c0-.56.45-1 1-1s1 .44 1 1v4.94l-.52-.28c-.3-.16-.66-.16-.96 0l-.52.28z" opacity={.4} />
    </IconBase>
  ))
);

SendVBoldDuotone.displayName = 'SendVBoldDuotone';

// Triple export pattern
export { SendVBoldDuotone, SendVBoldDuotone as SendVBoldDuotoneIcon, SendVBoldDuotone as SiSendVBoldDuotone };
export default SendVBoldDuotone;
export type { SendVBoldDuotoneProps };
