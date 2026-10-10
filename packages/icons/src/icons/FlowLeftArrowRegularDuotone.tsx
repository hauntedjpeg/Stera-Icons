import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowLeftArrowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowLeftArrowRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowLeftArrowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18 7.25c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75-4.75-2.13-4.75-4.75S15.38 7.25 18 7.25m0 1.5c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.46 3.25 3.25 3.25 1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" opacity={.4} />
        <path d="M6.47 6.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3.72 3.72h9.5q-.06.37-.06.75t.06.75h-9.5l3.72 3.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-5-5-.09-.1-.07-.14-.05-.16-.01-.13.01-.13.04-.15v-.01l.05-.08q.05-.09.12-.16z" />
    </IconBase>
  ))
);

FlowLeftArrowRegularDuotone.displayName = 'FlowLeftArrowRegularDuotone';

// Triple export pattern
export { FlowLeftArrowRegularDuotone, FlowLeftArrowRegularDuotone as FlowLeftArrowRegularDuotoneIcon, FlowLeftArrowRegularDuotone as SiFlowLeftArrowRegularDuotone };
export default FlowLeftArrowRegularDuotone;
export type { FlowLeftArrowRegularDuotoneProps };
