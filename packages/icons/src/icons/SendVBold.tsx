import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendVBoldProps = Omit<IconBaseProps, 'children'>;

const SendVBold = memo(
  forwardRef<SVGSVGElement, SendVBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.66 21.23c-1.84 1-3.87-.96-2.93-2.83l7.36-14.72c.79-1.58 3.03-1.58 3.82 0l7.36 14.72c.94 1.87-1.1 3.83-2.93 2.83L12 17.77zM4.5 19.38q0 .03.04.08l.08.04.08-.02 6.3-3.44V11.1c0-.55.45-1 1-1s1 .45 1 1v4.95l6.3 3.44.08.02.08-.04q.04-.05.04-.08l-.01-.08-7.37-14.73q-.02-.04-.05-.06L12 4.5l-.07.02q-.03.02-.05.06L4.5 19.3q-.03.06-.01.08" clipRule="evenodd" />
    </IconBase>
  ))
);

SendVBold.displayName = 'SendVBold';

// Triple export pattern
export { SendVBold, SendVBold as SendVBoldIcon, SendVBold as SiSendVBold };
export default SendVBold;
export type { SendVBoldProps };
