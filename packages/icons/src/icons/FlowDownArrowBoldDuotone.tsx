import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDownArrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowDownArrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" opacity={.4} />
        <path d="m13 19.59 3.3-3.3c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-5 5-.15.12-.12.07-.14.06-.1.02h-.02L12 23q-.09 0-.17-.02h-.06l-.06-.02-.14-.06-.12-.06-.16-.13-5-5c-.39-.4-.39-1.03 0-1.42.4-.39 1.03-.39 1.42 0L11 19.6v-8.7q.48.1 1 .11.51 0 1-.1z" />
    </IconBase>
  ))
);

FlowDownArrowBoldDuotone.displayName = 'FlowDownArrowBoldDuotone';

// Triple export pattern
export { FlowDownArrowBoldDuotone, FlowDownArrowBoldDuotone as FlowDownArrowBoldDuotoneIcon, FlowDownArrowBoldDuotone as SiFlowDownArrowBoldDuotone };
export default FlowDownArrowBoldDuotone;
export type { FlowDownArrowBoldDuotoneProps };
