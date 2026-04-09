import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowLeftArrowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowLeftArrowRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowLeftArrowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-left-arrow-duotone" {...props}>
      <path fillRule="evenodd" d="M18 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" opacity={.4} />
        <path d="M6.47 6.47a.75.75 0 1 1 1.06 1.06l-3.72 3.72h9.5a5 5 0 0 0 0 1.5h-9.5l3.72 3.72a.75.75 0 0 1-1.06 1.06l-5-5a.8.8 0 0 1-.17-.81v-.01l.05-.08.12-.16z" />
    </IconBase>
  ))
);

FlowLeftArrowRegularDuotone.displayName = 'FlowLeftArrowRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlowLeftArrowRegularDuotone, FlowLeftArrowRegularDuotone as FlowLeftArrowRegularDuotoneIcon, FlowLeftArrowRegularDuotone as SiFlowLeftArrowRegularDuotone };
export default FlowLeftArrowRegularDuotone;
export type { FlowLeftArrowRegularDuotoneProps };
