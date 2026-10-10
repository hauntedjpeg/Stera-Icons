import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowRightArrowRegularProps = Omit<IconBaseProps, 'children'>;

const FlowRightArrowRegular = memo(
  forwardRef<SVGSVGElement, FlowRightArrowRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.47 6.47c.3-.3.77-.3 1.06 0l5 5c.3.3.3.77 0 1.06l-5 5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l3.72-3.72h-9.5c-.36 2.27-2.32 4-4.69 4-2.62 0-4.75-2.13-4.75-4.75S3.38 7.25 6 7.25c2.37 0 4.33 1.73 4.69 4h9.5l-3.72-3.72c-.3-.3-.3-.77 0-1.06M6 8.75c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.46 3.25 3.25 3.25 1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowRightArrowRegular.displayName = 'FlowRightArrowRegular';

// Triple export pattern
export { FlowRightArrowRegular, FlowRightArrowRegular as FlowRightArrowRegularIcon, FlowRightArrowRegular as SiFlowRightArrowRegular };
export default FlowRightArrowRegular;
export type { FlowRightArrowRegularProps };
