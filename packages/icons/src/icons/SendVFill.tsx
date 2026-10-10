import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendVFillProps = Omit<IconBaseProps, 'children'>;

const SendVFill = memo(
  forwardRef<SVGSVGElement, SendVFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.1 2.85c.78-1.57 3.02-1.57 3.8 0l8.1 16.2c.93 1.86-1.1 3.8-2.92 2.81l-6.2-3.39V10c0-.48-.4-.87-.88-.87s-.87.39-.87.87v8.47l-6.21 3.39c-1.83 1-3.85-.95-2.92-2.82z" />
    </IconBase>
  ))
);

SendVFill.displayName = 'SendVFill';

// Triple export pattern
export { SendVFill, SendVFill as SendVFillIcon, SendVFill as SiSendVFill };
export default SendVFill;
export type { SendVFillProps };
