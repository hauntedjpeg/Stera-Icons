import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendVRegularProps = Omit<IconBaseProps, 'children'>;

const SendVRegular = memo(
  forwardRef<SVGSVGElement, SendVRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.54 21.01c-1.62.89-3.42-.84-2.6-2.5L10.32 3.8c.7-1.4 2.68-1.4 3.38 0l7.36 14.73c.83 1.65-.97 3.38-2.59 2.5L12 17.49zM4.29 19.2c-.17.33.2.69.53.5l6.43-3.5v-5.1c0-.41.34-.75.75-.75s.75.34.75.75v5.1l6.43 3.5c.33.19.7-.17.53-.5L12.35 4.46c-.15-.29-.55-.28-.7 0z" clipRule="evenodd" />
    </IconBase>
  ))
);

SendVRegular.displayName = 'SendVRegular';

// Triple export pattern
export { SendVRegular, SendVRegular as SendVRegularIcon, SendVRegular as SiSendVRegular };
export default SendVRegular;
export type { SendVRegularProps };
