import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowRightRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowRightRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M1.25 12c0 2.07 1.68 3.75 3.75 3.75 1.81 0 3.33-1.29 3.68-3h3.57V17c0 1.52 1.23 2.75 2.75 2.75h5.19l-1.72 1.72c-.3.3-.3.77 0 1.06s.77.3 1.06 0l3-3 .1-.11q0-.03.02-.05l.04-.08.02-.07.02-.07.02-.15-.01-.14v-.01l-.03-.07q0-.04-.02-.07l-.04-.08-.03-.05-.09-.11-3-3c-.3-.3-.77-.3-1.06 0s-.3.77 0 1.06l1.72 1.72H15c-.69 0-1.25-.56-1.25-1.25V7c0-.69.56-1.25 1.25-1.25h5.19l-1.72 1.72c-.3.3-.3.77 0 1.06s.77.3 1.06 0l3-3 .1-.11q0-.03.02-.05l.04-.08.02-.07.02-.07.02-.15-.01-.14v-.01l-.02-.04q0-.06-.03-.1l-.04-.08-.03-.05-.09-.11-3-3c-.3-.3-.77-.3-1.06 0s-.3.77 0 1.06l1.72 1.72H15c-1.52 0-2.75 1.23-2.75 2.75v4.25H8.68c-.35-1.71-1.87-3-3.68-3-2.07 0-3.75 1.68-3.75 3.75m1.5 0c0-1.24 1-2.25 2.25-2.25 1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowRightRegular.displayName = 'FlowSplitArrowRightRegular';

// Triple export pattern
export { FlowSplitArrowRightRegular, FlowSplitArrowRightRegular as FlowSplitArrowRightRegularIcon, FlowSplitArrowRightRegular as SiFlowSplitArrowRightRegular };
export default FlowSplitArrowRightRegular;
export type { FlowSplitArrowRightRegularProps };
