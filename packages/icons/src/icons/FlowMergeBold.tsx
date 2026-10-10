import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowMergeBoldProps = Omit<IconBaseProps, 'children'>;

const FlowMergeBold = memo(
  forwardRef<SVGSVGElement, FlowMergeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.8 13.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-6.5 6.5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4zM1.3 2.3c.38-.4 1.02-.4 1.4 0l7.25 7.24c.94.93 2.2 1.46 3.54 1.46h5.1l-1.8-1.8c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l3.53 3.53q.3.3.3.71 0 .42-.3.7l-3.54 3.47c-.4.39-1.03.38-1.41-.01-.39-.4-.38-1.03.01-1.41L18.62 13H13.5c-1.86 0-3.64-.74-4.95-2.05L1.29 3.71C.9 3.3.9 2.68 1.3 2.29" />
    </IconBase>
  ))
);

FlowMergeBold.displayName = 'FlowMergeBold';

// Triple export pattern
export { FlowMergeBold, FlowMergeBold as FlowMergeBoldIcon, FlowMergeBold as SiFlowMergeBold };
export default FlowMergeBold;
export type { FlowMergeBoldProps };
