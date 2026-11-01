import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendRegularProps = Omit<IconBaseProps, 'children'>;

const SendRegular = memo(
  forwardRef<SVGSVGElement, SendRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.42 4.34c1.38-.46 2.7.86 2.24 2.24L15 20.54c-.54 1.64-2.88 1.6-3.37-.06L9.8 14.21l-6.27-1.84c-1.66-.5-1.7-2.83-.06-3.37zm.48 1.43L3.93 10.42c-.24.08-.24.44.01.5l6.24 1.84 3.85-3.85c.29-.29.76-.29 1.06 0 .29.3.29.77 0 1.06l-3.85 3.85 1.83 6.24c.08.25.43.26.5 0L18.24 6.1c.07-.2-.12-.4-.33-.33" clipRule="evenodd" />
    </IconBase>
  ))
);

SendRegular.displayName = 'SendRegular';

// Triple export pattern
export { SendRegular, SendRegular as SendRegularIcon, SendRegular as SiSendRegular };
export default SendRegular;
export type { SendRegularProps };
