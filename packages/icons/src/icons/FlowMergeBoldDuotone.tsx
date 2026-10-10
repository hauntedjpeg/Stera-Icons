import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowMergeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowMergeBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowMergeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.8 13.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-6.5 6.5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4zM1.3 2.3c.38-.4 1.02-.4 1.4 0l7.25 7.24c.94.93 2.2 1.46 3.54 1.46h5.1l1.02 1.03-.99.97H13.5c-1.86 0-3.64-.74-4.95-2.05L1.29 3.71C.9 3.3.9 2.68 1.3 2.29" opacity={0.4} />
        <path d="M16.8 7.8c.38-.4 1.02-.4 1.4 0l3.54 3.53q.3.3.3.71 0 .42-.3.7l-3.54 3.47c-.4.39-1.03.38-1.41-.01-.39-.4-.38-1.03.01-1.41l2.81-2.76L16.8 9.2c-.39-.4-.39-1.03 0-1.42" />
    </IconBase>
  ))
);

FlowMergeBoldDuotone.displayName = 'FlowMergeBoldDuotone';

// Triple export pattern
export { FlowMergeBoldDuotone, FlowMergeBoldDuotone as FlowMergeBoldDuotoneIcon, FlowMergeBoldDuotone as SiFlowMergeBoldDuotone };
export default FlowMergeBoldDuotone;
export type { FlowMergeBoldDuotoneProps };
