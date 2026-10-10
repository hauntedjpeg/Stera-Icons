import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDiagramBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowDiagramBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowDiagramBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.8 11.3c-.4.38-.4 1.02 0 1.4l.29.3H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6.01l-.01.2v1.6l.01.2H7c-1.66 0-3-1.34-3-3v-4c0-1.66 1.34-3 3-3h1.09zM17 3c1.66 0 3 1.34 3 3v4c0 1.66-1.34 3-3 3h-1.09l.3-.3c.39-.38.39-1.02 0-1.4l-.3-.3H17c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-6.01l.01-.2V3z" opacity={0.4} />
        <path fillRule="evenodd" d="M19.03 17.01c1.1.11 1.97 1.05 1.97 2.19v1.6c0 1.21-.99 2.2-2.2 2.2h-3.6c-1.21 0-2.2-.99-2.2-2.2v-1.6c0-1.21.99-2.2 2.2-2.2h3.6zM15.2 19q-.18.02-.2.2v1.6q.02.18.2.2h3.6q.18-.02.2-.2v-1.6q-.01-.16-.16-.2H15.2M11.3 7.8c.38-.4 1.02-.4 1.4 0l3.5 3.5c.4.38.4 1.02 0 1.4l-3.5 3.5q-.28.3-.7.3t-.7-.3l-3.5-3.5c-.4-.38-.4-1.02 0-1.4zM9.9 12 12 14.09 14.09 12 12 9.91zM9.03 1.01C10.13 1.12 11 2.06 11 3.2v1.6C11 6.01 10.01 7 8.8 7H5.2C3.99 7 3 6.01 3 4.8V3.2C3 1.99 3.99 1 5.2 1h3.6zM5.2 3q-.18.02-.2.2v1.6q.02.18.2.2h3.6q.18-.02.2-.2V3.2q-.01-.16-.16-.2H5.2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowDiagramBoldDuotone.displayName = 'FlowDiagramBoldDuotone';

// Triple export pattern
export { FlowDiagramBoldDuotone, FlowDiagramBoldDuotone as FlowDiagramBoldDuotoneIcon, FlowDiagramBoldDuotone as SiFlowDiagramBoldDuotone };
export default FlowDiagramBoldDuotone;
export type { FlowDiagramBoldDuotoneProps };
