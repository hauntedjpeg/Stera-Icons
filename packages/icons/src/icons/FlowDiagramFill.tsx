import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDiagramFillProps = Omit<IconBaseProps, 'children'>;

const FlowDiagramFill = memo(
  forwardRef<SVGSVGElement, FlowDiagramFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-diagram-fill" {...props}>
      <path d="M8.8 1.13c1.12 0 2.03.88 2.07 2H17A2.9 2.9 0 0 1 19.88 6v4A2.9 2.9 0 0 1 17 12.88h-1.14l-3.24 3.24a.9.9 0 0 1-1.1.1l-.14-.1-3.24-3.25H7c-.62 0-1.12.5-1.12 1.13v4c0 .62.5 1.13 1.12 1.13h6.13c.04-1.12.95-2 2.07-2h3.6c1.15 0 2.07.92 2.07 2.07v1.6c0 1.15-.92 2.07-2.07 2.07h-3.6a2.07 2.07 0 0 1-2.07-2H7A2.9 2.9 0 0 1 4.13 18v-4A2.9 2.9 0 0 1 7 11.13h1.14l3.24-3.25a.9.9 0 0 1 1.24 0l3.24 3.25H17c.62 0 1.13-.5 1.13-1.13V6c0-.62-.5-1.12-1.13-1.12h-6.13c-.04 1.1-.95 2-2.07 2H5.2A2.1 2.1 0 0 1 3.12 4.8V3.2c0-1.15.93-2.08 2.08-2.08z" />
    </IconBase>
  ))
);

FlowDiagramFill.displayName = 'FlowDiagramFill';

// Triple export pattern (lucide-react style)
export { FlowDiagramFill, FlowDiagramFill as FlowDiagramFillIcon, FlowDiagramFill as SiFlowDiagramFill };
export default FlowDiagramFill;
export type { FlowDiagramFillProps };
