import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PyramidRegularProps = Omit<IconBaseProps, 'children'>;

const PyramidRegular = memo(
  forwardRef<SVGSVGElement, PyramidRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.4 3.88a2 2 0 0 1 3.2 0l7.2 9.61a2 2 0 0 1-.48 2.87l-7.21 4.8a2 2 0 0 1-2.22 0l-7.2-4.8a2 2 0 0 1-.5-2.87zm-6 10.51a.5.5 0 0 0 .12.72l6.73 4.49V5.25zm8.35 5.2 6.73-4.48a.5.5 0 0 0 .13-.72l-6.86-9.14z" clipRule="evenodd" />
    </IconBase>
  ))
);

PyramidRegular.displayName = 'PyramidRegular';

// Triple export pattern (lucide-react style)
export { PyramidRegular, PyramidRegular as PyramidRegularIcon, PyramidRegular as SiPyramidRegular };
export default PyramidRegular;
export type { PyramidRegularProps };
