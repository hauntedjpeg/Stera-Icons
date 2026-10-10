import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDiagramRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowDiagramRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowDiagramRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.97 11.47c-.3.3-.3.77 0 1.06l.22.22H7c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h6.25v1.5H7c-1.52 0-2.75-1.23-2.75-2.75v-4c0-1.52 1.23-2.75 2.75-2.75h1.19zM17 3.25c1.52 0 2.75 1.23 2.75 2.75v4c0 1.52-1.23 2.75-2.75 2.75h-1.19l.22-.22c.3-.3.3-.77 0-1.06l-.22-.22H17c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25h-6.25v-1.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M18.8 17.25c1.08 0 1.95.87 1.95 1.95v1.6c0 1.08-.87 1.95-1.95 1.95h-3.6c-1.08 0-1.95-.87-1.95-1.95v-1.6c0-1.08.87-1.95 1.95-1.95zm-3.6 1.5c-.25 0-.45.2-.45.45v1.6c0 .25.2.45.45.45h3.6c.25 0 .45-.2.45-.45v-1.6c0-.25-.2-.45-.45-.45zM11.53 7.92c.3-.24.73-.22 1 .05l3.5 3.5c.3.3.3.77 0 1.06l-3.5 3.5q-.22.22-.53.22t-.53-.22l-3.5-3.5c-.3-.3-.3-.77 0-1.06l3.5-3.5zM9.56 12 12 14.44 14.44 12 12 9.56zM8.8 1.25c1.08 0 1.95.87 1.95 1.95v1.6c0 1.08-.87 1.95-1.95 1.95H5.2c-1.08 0-1.95-.87-1.95-1.95V3.2c0-1.08.87-1.95 1.95-1.95zm-3.6 1.5c-.25 0-.45.2-.45.45v1.6c0 .25.2.45.45.45h3.6c.25 0 .45-.2.45-.45V3.2c0-.25-.2-.45-.45-.45z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowDiagramRegularDuotone.displayName = 'FlowDiagramRegularDuotone';

// Triple export pattern
export { FlowDiagramRegularDuotone, FlowDiagramRegularDuotone as FlowDiagramRegularDuotoneIcon, FlowDiagramRegularDuotone as SiFlowDiagramRegularDuotone };
export default FlowDiagramRegularDuotone;
export type { FlowDiagramRegularDuotoneProps };
