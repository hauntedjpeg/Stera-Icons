import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowDownRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowDownRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowDownRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.25c2.07 0 3.75 1.68 3.75 3.75 0 1.81-1.29 3.33-3 3.67v3.58H17c1.52 0 2.75 1.23 2.75 2.75v5.19l1.72-1.72c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3 3-.11.1q-.03 0-.05.02l-.08.04-.07.02-.07.02-.15.02-.14-.01h-.01l-.07-.03q-.04 0-.07-.02l-.08-.04-.05-.03-.11-.09-3-3c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l1.72 1.72V15c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v5.19l1.72-1.72c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3 3-.11.1q-.03 0-.05.02l-.08.04-.07.02-.07.02-.15.02-.14-.01h-.01l-.04-.02q-.06 0-.1-.03l-.08-.04-.05-.03-.11-.09-3-3c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l1.72 1.72V15c0-1.52 1.23-2.75 2.75-2.75h4.25V8.67c-1.71-.34-3-1.86-3-3.67 0-2.07 1.68-3.75 3.75-3.75m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowDownRegular.displayName = 'FlowSplitArrowDownRegular';

// Triple export pattern
export { FlowSplitArrowDownRegular, FlowSplitArrowDownRegular as FlowSplitArrowDownRegularIcon, FlowSplitArrowDownRegular as SiFlowSplitArrowDownRegular };
export default FlowSplitArrowDownRegular;
export type { FlowSplitArrowDownRegularProps };
