import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowMergeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowMergeRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowMergeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.97 13.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-6.5 6.5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06zM1.47 2.47c.3-.3.77-.3 1.06 0l7.24 7.24c.99.99 2.32 1.54 3.72 1.54h5.7l.78.78-.73.72h-5.75c-1.8 0-3.51-.71-4.78-1.98L1.47 3.53c-.3-.3-.3-.77 0-1.06" opacity={0.4} />
        <path d="M16.97 7.97c.3-.3.77-.3 1.06 0l3.54 3.54.09.11q.13.19.13.42-.01.32-.23.53l-3.53 3.47c-.3.29-.78.28-1.07-.01s-.28-.78.02-1.07l2.99-2.93-3-3c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

FlowMergeRegularDuotone.displayName = 'FlowMergeRegularDuotone';

// Triple export pattern
export { FlowMergeRegularDuotone, FlowMergeRegularDuotone as FlowMergeRegularDuotoneIcon, FlowMergeRegularDuotone as SiFlowMergeRegularDuotone };
export default FlowMergeRegularDuotone;
export type { FlowMergeRegularDuotoneProps };
