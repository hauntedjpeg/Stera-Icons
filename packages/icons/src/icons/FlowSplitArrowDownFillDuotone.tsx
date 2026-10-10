import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowDownFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.88 12.13H17c1.59 0 2.88 1.28 2.88 2.87v3.13h-1.75V15c0-.62-.5-1.12-1.13-1.12H7c-.62 0-1.12.5-1.12 1.12v3.13H4.13V15c0-1.59 1.28-2.87 2.87-2.87h4.13V8.77q.42.1.87.1.46 0 .88-.1z" opacity={.4} />
        <path d="M8 18.13c.35 0 .67.2.8.54.14.32.07.7-.18.95l-3 3q-.27.24-.62.25-.36 0-.62-.25l-3-3c-.25-.25-.32-.63-.19-.96.14-.32.46-.53.81-.54zM22 18.13c.35 0 .67.2.8.54.14.32.07.7-.18.95l-3 3q-.26.24-.62.25-.36 0-.62-.25l-3-3c-.25-.25-.32-.63-.19-.96.14-.32.46-.53.81-.54zM12 1.13c2.14 0 3.87 1.73 3.87 3.87S14.14 8.88 12 8.88 8.12 7.14 8.12 5 9.86 1.13 12 1.13" />
    </IconBase>
  ))
);

FlowSplitArrowDownFillDuotone.displayName = 'FlowSplitArrowDownFillDuotone';

// Triple export pattern
export { FlowSplitArrowDownFillDuotone, FlowSplitArrowDownFillDuotone as FlowSplitArrowDownFillDuotoneIcon, FlowSplitArrowDownFillDuotone as SiFlowSplitArrowDownFillDuotone };
export default FlowSplitArrowDownFillDuotone;
export type { FlowSplitArrowDownFillDuotoneProps };
