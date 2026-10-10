import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendFillProps = Omit<IconBaseProps, 'children'>;

const SendFill = memo(
  forwardRef<SVGSVGElement, SendFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.22 2.23c1.57-.53 3.08.98 2.55 2.55L16.53 20.5c-.62 1.88-3.3 1.83-3.85-.06l-1.79-6.09 5.73-5.72c.34-.34.34-.9 0-1.24s-.9-.34-1.24 0L9.65 13.1l-6.08-1.8c-1.9-.55-1.94-3.22-.07-3.84z" />
    </IconBase>
  ))
);

SendFill.displayName = 'SendFill';

// Triple export pattern
export { SendFill, SendFill as SendFillIcon, SendFill as SiSendFill };
export default SendFill;
export type { SendFillProps };
