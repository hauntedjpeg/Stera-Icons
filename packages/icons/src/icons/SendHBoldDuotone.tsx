import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendHBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendHBoldDuotone = memo(
  forwardRef<SVGSVGElement, SendHBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 11c.55 0 1 .45 1 1s-.45 1-1 1H8.05l.28-.52c.16-.3.16-.66 0-.96L8.05 11z" opacity={.4} />
        <path fillRule="evenodd" d="M2.86 5.66c-1-1.84.96-3.87 2.83-2.93l14.72 7.36c1.58.79 1.58 3.03 0 3.82L5.7 21.27c-1.87.94-3.83-1.1-2.83-2.93L6.32 12zM4.7 4.5q-.03 0-.07.04l-.05.08.02.08 3.72 6.82c.17.3.17.66 0 .96L4.61 19.3l-.02.08q0 .03.05.08.03.04.07.04l.08-.01 14.73-7.37q.05-.02.06-.05l.02-.07-.02-.07q-.02-.03-.06-.05L4.79 4.5q-.06-.03-.08-.01" clipRule="evenodd" />
    </IconBase>
  ))
);

SendHBoldDuotone.displayName = 'SendHBoldDuotone';

// Triple export pattern
export { SendHBoldDuotone, SendHBoldDuotone as SendHBoldDuotoneIcon, SendHBoldDuotone as SiSendHBoldDuotone };
export default SendHBoldDuotone;
export type { SendHBoldDuotoneProps };
