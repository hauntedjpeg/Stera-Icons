import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDiagramFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowDiagramFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowDiagramFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.88 11.38a.9.9 0 0 0 0 1.24l.26.26H7c-.62 0-1.12.5-1.12 1.12v4c0 .62.5 1.13 1.12 1.13h6.13v1.7400000000000002H7A2.9 2.9 0 0 1 4.13 18v-4A2.9 2.9 0 0 1 7 11.13h1.14zM17 3.13A2.9 2.9 0 0 1 19.88 6v4A2.9 2.9 0 0 1 17 12.88h-1.14l.26-.26a.9.9 0 0 0 0-1.24l-.26-.26H17c.62 0 1.13-.5 1.13-1.12V6c0-.62-.5-1.12-1.13-1.12h-6.13V3.12z" opacity={0.4} />
        <path d="M8.8 1.13c1.15 0 2.07.92 2.07 2.07v1.6c0 1.15-.92 2.08-2.07 2.08H5.2A2.1 2.1 0 0 1 3.12 4.8V3.2c0-1.15.93-2.08 2.08-2.08zM18.8 17.13c1.15 0 2.07.92 2.07 2.07v1.6c0 1.15-.92 2.07-2.07 2.07h-3.6a2.1 2.1 0 0 1-2.07-2.07v-1.6c0-1.15.92-2.07 2.07-2.07zM11.38 7.88a.87.87 0 0 1 1.24 0l3.5 3.5c.34.34.34.9 0 1.24l-3.5 3.5a.9.9 0 0 1-1.24 0l-3.5-3.5a.9.9 0 0 1 0-1.24z" />
    </IconBase>
  ))
);

FlowDiagramFillDuotone.displayName = 'FlowDiagramFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowDiagramFillDuotone, FlowDiagramFillDuotone as FlowDiagramFillDuotoneIcon, FlowDiagramFillDuotone as SiFlowDiagramFillDuotone };
export default FlowDiagramFillDuotone;
export type { FlowDiagramFillDuotoneProps };
