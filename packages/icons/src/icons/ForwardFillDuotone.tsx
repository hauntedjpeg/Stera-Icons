import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ForwardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ForwardFillDuotone = memo(
  forwardRef<SVGSVGElement, ForwardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m19.76 12-5.89 5.89V14.5c0-.48-.39-.87-.87-.87h-2c-3.24 0-5.45 1.22-6.83 2.47l-.14.13c.26-2.03.84-3.31 1.75-4.15 1.3-1.2 3.48-1.7 7.22-1.7.48 0 .87-.4.88-.88V6.11z" opacity={.4} />
        <path fillRule="evenodd" d="M12.67 3.2c.32-.14.7-.07.95.18l8 8c.34.34.34.9 0 1.24l-8 8c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81v-4.63H11c-2.76 0-4.55 1.03-5.67 2.03-.56.5-.95 1-1.2 1.38l-.26.44-.06.11-.01.02c-.17.38-.58.6-.98.5-.4-.08-.7-.44-.7-.85 0-3.8.62-6.5 2.47-8.2 1.69-1.56 4.2-2.09 7.54-2.16V4c0-.35.2-.67.53-.8m1.2 6.3c0 .48-.39.87-.87.87-3.74 0-5.92.52-7.22 1.71-.91.84-1.5 2.12-1.75 4.15l.14-.13c1.38-1.25 3.59-2.48 6.83-2.48h2c.48 0 .87.4.88.88v3.39L19.76 12l-5.89-5.89z" clipRule="evenodd" />
    </IconBase>
  ))
);

ForwardFillDuotone.displayName = 'ForwardFillDuotone';

// Triple export pattern
export { ForwardFillDuotone, ForwardFillDuotone as ForwardFillDuotoneIcon, ForwardFillDuotone as SiForwardFillDuotone };
export default ForwardFillDuotone;
export type { ForwardFillDuotoneProps };
