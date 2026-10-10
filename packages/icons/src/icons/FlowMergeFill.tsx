import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowMergeFillProps = Omit<IconBaseProps, 'children'>;

const FlowMergeFill = memo(
  forwardRef<SVGSVGElement, FlowMergeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.88 13.88c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-6.5 6.5c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24zM1.38 2.38c.34-.34.9-.34 1.24 0l7.24 7.24c.96.96 2.27 1.5 3.63 1.5h3.13V8.5c0-.35.22-.67.54-.8.33-.14.7-.07.96.18l3.53 3.54q.26.26.26.62-.01.36-.26.62l-3.54 3.46c-.25.25-.62.32-.95.19-.32-.14-.53-.46-.53-.81v-2.63h-3.14c-1.83 0-3.58-.72-4.87-2L1.38 3.61c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

FlowMergeFill.displayName = 'FlowMergeFill';

// Triple export pattern
export { FlowMergeFill, FlowMergeFill as FlowMergeFillIcon, FlowMergeFill as SiFlowMergeFill };
export default FlowMergeFill;
export type { FlowMergeFillProps };
