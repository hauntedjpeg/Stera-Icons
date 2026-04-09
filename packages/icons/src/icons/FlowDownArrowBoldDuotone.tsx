import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDownArrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowDownArrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-down-arrow-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 1a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" opacity={.4} />
        <path d="m13 19.59 3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-.4.25l-.1.02h-.03a1 1 0 0 1-.34 0h-.06l-.06-.02a1 1 0 0 1-.42-.25l-5-5a1 1 0 1 1 1.42-1.42L11 19.6v-8.7a5 5 0 0 0 2 0z" />
    </IconBase>
  ))
);

FlowDownArrowBoldDuotone.displayName = 'FlowDownArrowBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowDownArrowBoldDuotone, FlowDownArrowBoldDuotone as FlowDownArrowBoldDuotoneIcon, FlowDownArrowBoldDuotone as SiFlowDownArrowBoldDuotone };
export default FlowDownArrowBoldDuotone;
export type { FlowDownArrowBoldDuotoneProps };
