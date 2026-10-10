import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDiagramFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowDiagramFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowDiagramFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.88 11.38c-.34.34-.34.9 0 1.24l.26.26H7c-.62 0-1.12.5-1.12 1.12v4c0 .62.5 1.13 1.12 1.13h6.13v1.74H7c-1.59 0-2.87-1.28-2.87-2.87v-4c0-1.59 1.28-2.87 2.87-2.87h1.14zM17 3.13c1.59 0 2.88 1.28 2.88 2.87v4c0 1.59-1.3 2.88-2.88 2.88h-1.14l.26-.26c.34-.34.34-.9 0-1.24l-.26-.26H17c.62 0 1.13-.5 1.13-1.12V6c0-.62-.5-1.12-1.13-1.12h-6.13V3.12z" opacity={0.4} />
        <path d="M8.8 1.13c1.15 0 2.07.92 2.07 2.07v1.6c0 1.15-.92 2.08-2.07 2.08H5.2c-1.15 0-2.08-.93-2.08-2.08V3.2c0-1.15.93-2.08 2.08-2.08zM18.8 17.13c1.15 0 2.07.92 2.07 2.07v1.6c0 1.15-.92 2.07-2.07 2.07h-3.6c-1.15 0-2.07-.92-2.07-2.07v-1.6c0-1.15.92-2.07 2.07-2.07zM11.38 7.88c.34-.34.9-.34 1.24 0l3.5 3.5c.34.34.34.9 0 1.24l-3.5 3.5q-.27.24-.62.25-.36 0-.62-.25l-3.5-3.5c-.34-.34-.34-.9 0-1.24z" />
    </IconBase>
  ))
);

FlowDiagramFillDuotone.displayName = 'FlowDiagramFillDuotone';

// Triple export pattern
export { FlowDiagramFillDuotone, FlowDiagramFillDuotone as FlowDiagramFillDuotoneIcon, FlowDiagramFillDuotone as SiFlowDiagramFillDuotone };
export default FlowDiagramFillDuotone;
export type { FlowDiagramFillDuotoneProps };
