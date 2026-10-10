import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendHRegularProps = Omit<IconBaseProps, 'children'>;

const SendHRegular = memo(
  forwardRef<SVGSVGElement, SendHRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M3.08 5.54c-.89-1.62.84-3.42 2.5-2.6l14.72 7.37c1.4.7 1.4 2.68 0 3.38L5.58 21.05c-1.66.83-3.39-.97-2.5-2.59L6.6 12zM4.9 4.29c-.34-.17-.7.2-.52.53l3.51 6.43H13c.41 0 .75.34.75.75s-.34.75-.75.75H7.9l-3.5 6.43c-.19.33.17.7.5.53l14.73-7.36c.29-.15.29-.55 0-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

SendHRegular.displayName = 'SendHRegular';

// Triple export pattern
export { SendHRegular, SendHRegular as SendHRegularIcon, SendHRegular as SiSendHRegular };
export default SendHRegular;
export type { SendHRegularProps };
