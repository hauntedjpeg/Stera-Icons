import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowDownFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.88 12.13H17A2.9 2.9 0 0 1 19.88 15v3.13h-1.75V15c0-.62-.5-1.12-1.13-1.12H7c-.62 0-1.12.5-1.12 1.12v3.13H4.13V15A2.9 2.9 0 0 1 7 12.13h4.13V8.77a4 4 0 0 0 1.74 0z" opacity={.4} />
        <path d="M8 18.13a.88.88 0 0 1 .62 1.49l-3 3a.9.9 0 0 1-1.24 0l-3-3a.88.88 0 0 1 .62-1.5zM22 18.13a.88.88 0 0 1 .62 1.49l-3 3a.9.9 0 0 1-1.24 0l-3-3a.88.88 0 0 1 .62-1.5zM12 1.13a3.88 3.88 0 1 1 0 7.75 3.88 3.88 0 0 1 0-7.76" />
    </IconBase>
  ))
);

FlowSplitArrowDownFillDuotone.displayName = 'FlowSplitArrowDownFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowDownFillDuotone, FlowSplitArrowDownFillDuotone as FlowSplitArrowDownFillDuotoneIcon, FlowSplitArrowDownFillDuotone as SiFlowSplitArrowDownFillDuotone };
export default FlowSplitArrowDownFillDuotone;
export type { FlowSplitArrowDownFillDuotoneProps };
