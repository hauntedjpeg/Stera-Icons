import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FrameFillProps = Omit<IconBaseProps, 'children'>;

const FrameFill = memo(
  forwardRef<SVGSVGElement, FrameFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.5 1.75c.69 0 1.25.56 1.25 1.25v2.25H21c.69 0 1.25.56 1.25 1.25S21.69 7.75 21 7.75h-2.25v8.5H21c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-2.25V21c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-2.25h-8.5V21c0 .69-.56 1.25-1.25 1.25S5.25 21.69 5.25 21v-2.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h2.25v-8.5H3c-.69 0-1.25-.56-1.25-1.25S2.31 5.25 3 5.25h2.25V3c0-.69.56-1.25 1.25-1.25S7.75 2.31 7.75 3v2.25h8.5V3c0-.69.56-1.25 1.25-1.25m-9.75 14.5h8.5v-8.5h-8.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FrameFill.displayName = 'FrameFill';

// Triple export pattern
export { FrameFill, FrameFill as FrameFillIcon, FrameFill as SiFrameFill };
export default FrameFill;
export type { FrameFillProps };
