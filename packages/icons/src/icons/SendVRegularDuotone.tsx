import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendVRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendVRegularDuotone = memo(
  forwardRef<SVGSVGElement, SendVRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.54 21.02c-1.62.88-3.42-.85-2.59-2.5l7.36-14.73c.7-1.4 2.68-1.4 3.38 0l7.36 14.73c.83 1.65-.97 3.38-2.59 2.5L12 17.49zM4.3 19.19c-.17.33.2.69.53.5l6.82-3.71c.22-.12.5-.12.72 0l6.82 3.72c.33.18.7-.18.53-.51L12.35 4.46c-.15-.29-.55-.29-.7 0z" clipRule="evenodd" />
        <path d="M11.25 11.1c0-.42.34-.76.75-.76s.75.34.75.75v5.1l-.4-.21c-.22-.12-.49-.12-.7 0l-.4.21z" opacity={.4} />
    </IconBase>
  ))
);

SendVRegularDuotone.displayName = 'SendVRegularDuotone';

// Triple export pattern
export { SendVRegularDuotone, SendVRegularDuotone as SendVRegularDuotoneIcon, SendVRegularDuotone as SiSendVRegularDuotone };
export default SendVRegularDuotone;
export type { SendVRegularDuotoneProps };
