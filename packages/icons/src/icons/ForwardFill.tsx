import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ForwardFillProps = Omit<IconBaseProps, 'children'>;

const ForwardFill = memo(
  forwardRef<SVGSVGElement, ForwardFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.67 3.2c.32-.14.7-.07.95.18l8 8c.34.34.34.9 0 1.24l-8 8c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81v-4.63H11c-2.76 0-4.55 1.03-5.67 2.03-.56.5-.95 1-1.2 1.38l-.26.44-.06.11-.01.02c-.17.38-.58.6-.98.5-.4-.08-.7-.44-.7-.85 0-3.8.62-6.5 2.47-8.2 1.69-1.56 4.2-2.09 7.54-2.16V4c0-.35.2-.67.53-.8" />
    </IconBase>
  ))
);

ForwardFill.displayName = 'ForwardFill';

// Triple export pattern
export { ForwardFill, ForwardFill as ForwardFillIcon, ForwardFill as SiForwardFill };
export default ForwardFill;
export type { ForwardFillProps };
