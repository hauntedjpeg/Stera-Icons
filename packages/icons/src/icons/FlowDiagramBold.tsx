import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDiagramBoldProps = Omit<IconBaseProps, 'children'>;

const FlowDiagramBold = memo(
  forwardRef<SVGSVGElement, FlowDiagramBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.03 1.01c1.04.1 1.87.94 1.96 1.99H17c1.66 0 3 1.34 3 3v4c0 1.66-1.34 3-3 3h-1.09l-3.2 3.2q-.31.3-.71.3-.42 0-.7-.3L8.08 13H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6.01c.1-1.12 1.04-2 2.19-2h3.6l.23.01c1.1.11 1.97 1.05 1.97 2.19v1.6c0 1.21-.99 2.2-2.2 2.2h-3.6c-1.15 0-2.09-.88-2.19-2H7c-1.66 0-3-1.34-3-3v-4c0-1.66 1.34-3 3-3h1.09l3.2-3.2c.4-.4 1.03-.4 1.42 0l3.2 3.2H17c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-6.01c-.1 1.12-1.04 2-2.19 2H5.2C3.99 7 3 6.01 3 4.8V3.2C3 1.99 3.99 1 5.2 1h3.6zM15.2 19q-.18.02-.2.2v1.6q.02.18.2.2h3.6q.18-.02.2-.2v-1.6q-.01-.16-.16-.2H15.2m-5.29-7L12 14.09 14.09 12 12 9.91zM5.2 3q-.18.02-.2.2v1.6q.02.18.2.2h3.6q.18-.02.2-.2V3.2q-.01-.16-.16-.2H5.2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowDiagramBold.displayName = 'FlowDiagramBold';

// Triple export pattern
export { FlowDiagramBold, FlowDiagramBold as FlowDiagramBoldIcon, FlowDiagramBold as SiFlowDiagramBold };
export default FlowDiagramBold;
export type { FlowDiagramBoldProps };
