import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FrameFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FrameFillDuotone = memo(
  forwardRef<SVGSVGElement, FrameFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.25 6.5c0 .69.56 1.25 1.25 1.25h1.25v8.5H17.5c-.69 0-1.25.56-1.25 1.25v1.25h-8.5V17.5c0-.69-.56-1.25-1.25-1.25H5.25v-8.5H6.5c.69 0 1.25-.56 1.25-1.25V5.25h8.5zm-8.5 9.75h8.5v-8.5h-8.5z" clipRule="evenodd" opacity={.4} />
        <path d="M6.5 16.25c.69 0 1.25.56 1.25 1.25V21c0 .69-.56 1.25-1.25 1.25S5.25 21.69 5.25 21v-2.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 16.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-2.25V21c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-3.5c0-.69.56-1.25 1.25-1.25zM6.5 1.75c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25H3c-.69 0-1.25-.56-1.25-1.25S2.31 5.25 3 5.25h2.25V3c0-.69.56-1.25 1.25-1.25M17.5 1.75c.69 0 1.25.56 1.25 1.25v2.25H21c.69 0 1.25.56 1.25 1.25S21.69 7.75 21 7.75h-3.5c-.69 0-1.25-.56-1.25-1.25V3c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

FrameFillDuotone.displayName = 'FrameFillDuotone';

// Triple export pattern
export { FrameFillDuotone, FrameFillDuotone as FrameFillDuotoneIcon, FrameFillDuotone as SiFrameFillDuotone };
export default FrameFillDuotone;
export type { FrameFillDuotoneProps };
