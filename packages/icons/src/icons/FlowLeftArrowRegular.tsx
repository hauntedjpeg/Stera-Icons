import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowLeftArrowRegularProps = Omit<IconBaseProps, 'children'>;

const FlowLeftArrowRegular = memo(
  forwardRef<SVGSVGElement, FlowLeftArrowRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.47 6.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3.72 3.72h9.5c.36-2.27 2.32-4 4.69-4 2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75c-2.37 0-4.33-1.73-4.69-4h-9.5l3.72 3.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-5-5c-.3-.3-.3-.77 0-1.06zM18 8.75c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.45 3.25 3.25 3.25s3.25-1.46 3.25-3.25c0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowLeftArrowRegular.displayName = 'FlowLeftArrowRegular';

// Triple export pattern
export { FlowLeftArrowRegular, FlowLeftArrowRegular as FlowLeftArrowRegularIcon, FlowLeftArrowRegular as SiFlowLeftArrowRegular };
export default FlowLeftArrowRegular;
export type { FlowLeftArrowRegularProps };
