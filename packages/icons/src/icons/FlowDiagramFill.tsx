import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDiagramFillProps = Omit<IconBaseProps, 'children'>;

const FlowDiagramFill = memo(
  forwardRef<SVGSVGElement, FlowDiagramFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.8 1.13c1.12 0 2.03.88 2.07 2H17c1.59 0 2.88 1.28 2.88 2.87v4c0 1.59-1.3 2.88-2.88 2.88h-1.14l-3.24 3.24-.13.1q-.11.09-.24.12-.12.04-.25.04h-.09l-.16-.04q-.13-.04-.24-.11l-.13-.11-3.24-3.25H7c-.62 0-1.12.5-1.12 1.13v4c0 .62.5 1.13 1.12 1.13h6.13c.04-1.12.95-2 2.07-2h3.6c1.15 0 2.07.92 2.07 2.07v1.6c0 1.15-.92 2.07-2.07 2.07h-3.6c-1.12 0-2.03-.88-2.07-2H7c-1.59 0-2.87-1.28-2.87-2.87v-4c0-1.59 1.28-2.87 2.87-2.87h1.14l3.24-3.25.14-.11.15-.08.08-.03q.25-.08.5 0 .04 0 .08.03l.15.08.14.11 3.24 3.25H17c.62 0 1.13-.5 1.13-1.13V6c0-.62-.5-1.12-1.13-1.12h-6.13c-.04 1.1-.95 2-2.07 2H5.2c-1.15 0-2.08-.93-2.08-2.08V3.2c0-1.15.93-2.08 2.08-2.08z" />
    </IconBase>
  ))
);

FlowDiagramFill.displayName = 'FlowDiagramFill';

// Triple export pattern
export { FlowDiagramFill, FlowDiagramFill as FlowDiagramFillIcon, FlowDiagramFill as SiFlowDiagramFill };
export default FlowDiagramFill;
export type { FlowDiagramFillProps };
