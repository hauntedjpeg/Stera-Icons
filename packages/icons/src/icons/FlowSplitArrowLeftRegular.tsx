import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowLeftRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowLeftRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M22.75 12c0 2.07-1.68 3.75-3.75 3.75-1.81 0-3.33-1.29-3.67-3h-3.58V17c0 1.52-1.23 2.75-2.75 2.75H3.81l1.72 1.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-3-3-.1-.11q0-.03-.02-.05l-.04-.08-.02-.07-.02-.07-.02-.15.01-.14v-.01l.03-.07q0-.04.02-.07l.04-.08.03-.05.09-.11 3-3c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.72 1.72H9c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25H3.81l1.72 1.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-3-3-.1-.11q0-.03-.02-.05l-.04-.08-.02-.07-.02-.07L1.24 5l.01-.14v-.01l.02-.04q0-.06.03-.1l.04-.08.03-.05.09-.11 3-3c.3-.3.77-.3 1.06 0s.3.77 0 1.06L3.81 4.25H9c1.52 0 2.75 1.23 2.75 2.75v4.25h3.58c.34-1.71 1.86-3 3.67-3 2.07 0 3.75 1.68 3.75 3.75m-1.5 0c0-1.24-1-2.25-2.25-2.25-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowLeftRegular.displayName = 'FlowSplitArrowLeftRegular';

// Triple export pattern
export { FlowSplitArrowLeftRegular, FlowSplitArrowLeftRegular as FlowSplitArrowLeftRegularIcon, FlowSplitArrowLeftRegular as SiFlowSplitArrowLeftRegular };
export default FlowSplitArrowLeftRegular;
export type { FlowSplitArrowLeftRegularProps };
