import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FrameFillProps = Omit<IconBaseProps, 'children'>;

const FrameFill = memo(
  forwardRef<SVGSVGElement, FrameFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.5 1.75c.69 0 1.25.56 1.25 1.25v2.25H21a1.25 1.25 0 1 1 0 2.5h-2.25v8.5H21a1.25 1.25 0 1 1 0 2.5h-2.25V21a1.25 1.25 0 1 1-2.5 0v-2.25h-8.5V21a1.25 1.25 0 1 1-2.5 0v-2.25H3a1.25 1.25 0 1 1 0-2.5h2.25v-8.5H3a1.25 1.25 0 1 1 0-2.5h2.25V3a1.25 1.25 0 1 1 2.5 0v2.25h8.5V3c0-.69.56-1.25 1.25-1.25m-9.75 14.5h8.5v-8.5h-8.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FrameFill.displayName = 'FrameFill';

// Triple export pattern (lucide-react style)
export { FrameFill, FrameFill as FrameFillIcon, FrameFill as SiFrameFill };
export default FrameFill;
export type { FrameFillProps };
