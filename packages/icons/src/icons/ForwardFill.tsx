import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ForwardFillProps = Omit<IconBaseProps, 'children'>;

const ForwardFill = memo(
  forwardRef<SVGSVGElement, ForwardFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="forward-fill" {...props}>
      <path d="M12.67 3.2c.32-.14.7-.07.95.18l8 8c.34.34.34.9 0 1.24l-8 8a.88.88 0 0 1-1.5-.62v-4.63H11a8.2 8.2 0 0 0-5.67 2.03 7 7 0 0 0-1.52 1.93l-.01.02A.88.88 0 0 1 2.13 19c0-3.8.61-6.5 2.46-8.2 1.69-1.56 4.2-2.09 7.54-2.16V4c0-.35.2-.67.53-.8" />
    </IconBase>
  ))
);

ForwardFill.displayName = 'ForwardFill';

// Triple export pattern (lucide-react style)
export { ForwardFill, ForwardFill as ForwardFillIcon, ForwardFill as SiForwardFill };
export default ForwardFill;
export type { ForwardFillProps };
