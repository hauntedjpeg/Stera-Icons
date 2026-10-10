import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendHRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SendHRegularDuotone = memo(
  forwardRef<SVGSVGElement, SendHRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H7.9l.21-.4c.13-.22.13-.49 0-.7l-.21-.4z" opacity={.4} />
        <path fillRule="evenodd" d="M3.08 5.54c-.89-1.62.84-3.42 2.5-2.6l14.72 7.37c1.4.7 1.4 2.68 0 3.38L5.58 21.05c-1.66.83-3.39-.97-2.5-2.59L6.6 12zM4.9 4.29c-.34-.17-.7.2-.52.53l3.72 6.82c.13.22.12.5 0 .72L4.4 19.18c-.18.33.18.7.52.53l14.72-7.36c.29-.15.29-.55 0-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

SendHRegularDuotone.displayName = 'SendHRegularDuotone';

// Triple export pattern
export { SendHRegularDuotone, SendHRegularDuotone as SendHRegularDuotoneIcon, SendHRegularDuotone as SiSendHRegularDuotone };
export default SendHRegularDuotone;
export type { SendHRegularDuotoneProps };
