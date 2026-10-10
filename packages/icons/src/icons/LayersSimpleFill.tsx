import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersSimpleFillProps = Omit<IconBaseProps, 'children'>;

const LayersSimpleFill = memo(
  forwardRef<SVGSVGElement, LayersSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.67 3.28c1.45-.8 3.21-.8 4.66 0l7.08 3.85c1.47.81 1.47 2.93 0 3.74L19.33 12l2.08 1.13c1.47.81 1.47 2.93 0 3.73l-7.08 3.86c-1.45.8-3.2.8-4.66 0l-7.08-3.86c-1.47-.8-1.47-2.92 0-3.73L4.67 12 2.6 10.87c-1.47-.81-1.47-2.93 0-3.74zm4.66 11.44c-1.45.8-3.2.8-4.66 0L6.5 13l-3.07 1.67c-.26.14-.26.52 0 .66l7.07 3.86c.94.5 2.06.5 3 0l7.07-3.86c.26-.14.26-.52 0-.66L17.5 13z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersSimpleFill.displayName = 'LayersSimpleFill';

// Triple export pattern
export { LayersSimpleFill, LayersSimpleFill as LayersSimpleFillIcon, LayersSimpleFill as SiLayersSimpleFill };
export default LayersSimpleFill;
export type { LayersSimpleFillProps };
