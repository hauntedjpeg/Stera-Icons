import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowMergeRegularProps = Omit<IconBaseProps, 'children'>;

const FlowMergeRegular = memo(
  forwardRef<SVGSVGElement, FlowMergeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.47 13.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-7 7c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06zM1.47 2.47c.3-.3.77-.3 1.06 0l7.24 7.24c.99.99 2.32 1.54 3.72 1.54h5.7l-2.22-2.22c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l3.54 3.53.09.12q.13.19.13.42-.01.32-.23.53l-3.53 3.47c-.3.29-.78.28-1.07-.01s-.28-.78.02-1.07l2.26-2.21h-5.75c-1.8 0-3.51-.71-4.78-1.98L1.47 3.53c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

FlowMergeRegular.displayName = 'FlowMergeRegular';

// Triple export pattern
export { FlowMergeRegular, FlowMergeRegular as FlowMergeRegularIcon, FlowMergeRegular as SiFlowMergeRegular };
export default FlowMergeRegular;
export type { FlowMergeRegularProps };
