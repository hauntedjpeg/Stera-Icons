import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ForwardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ForwardFillDuotone = memo(
  forwardRef<SVGSVGElement, ForwardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="forward-fill-duotone" {...props}>
      <path d="m19.76 12-5.89 5.89V14.5c0-.48-.39-.87-.87-.87h-2a10 10 0 0 0-6.83 2.47l-.14.13c.26-2.03.84-3.31 1.75-4.15 1.3-1.2 3.48-1.7 7.22-1.7.48 0 .87-.4.88-.88V6.11z" opacity={.4} />
        <path fillRule="evenodd" d="M12.67 3.2c.32-.14.7-.07.95.18l8 8c.34.34.34.9 0 1.24l-8 8a.88.88 0 0 1-1.5-.62v-4.63H11a8.2 8.2 0 0 0-5.67 2.03 7 7 0 0 0-1.52 1.93l-.01.02A.88.88 0 0 1 2.13 19c0-3.8.61-6.5 2.46-8.2 1.69-1.56 4.2-2.09 7.54-2.16V4c0-.35.2-.67.53-.8m1.2 6.3c0 .48-.39.87-.87.87-3.74 0-5.92.52-7.22 1.71-.91.84-1.5 2.12-1.75 4.15l.14-.13A10 10 0 0 1 11 13.62h2c.48 0 .87.4.88.88v3.39L19.76 12l-5.89-5.89z" clipRule="evenodd" />
    </IconBase>
  ))
);

ForwardFillDuotone.displayName = 'ForwardFillDuotone';

// Triple export pattern (lucide-react style)
export { ForwardFillDuotone, ForwardFillDuotone as ForwardFillDuotoneIcon, ForwardFillDuotone as SiForwardFillDuotone };
export default ForwardFillDuotone;
export type { ForwardFillDuotoneProps };
