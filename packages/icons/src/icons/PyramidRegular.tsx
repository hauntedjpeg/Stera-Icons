import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PyramidRegularProps = Omit<IconBaseProps, 'children'>;

const PyramidRegular = memo(
  forwardRef<SVGSVGElement, PyramidRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.4 3.88c.8-1.06 2.4-1.06 3.2 0l7.2 9.61c.7.92.47 2.23-.48 2.87l-7.21 4.8c-.67.45-1.55.45-2.22 0l-7.2-4.8c-.96-.64-1.19-1.95-.5-2.87zm-6 10.51c-.18.23-.12.56.12.72l6.73 4.49V5.25zm8.35 5.2 6.73-4.48c.24-.16.3-.49.13-.72l-6.86-9.14z" clipRule="evenodd" />
    </IconBase>
  ))
);

PyramidRegular.displayName = 'PyramidRegular';

// Triple export pattern
export { PyramidRegular, PyramidRegular as PyramidRegularIcon, PyramidRegular as SiPyramidRegular };
export default PyramidRegular;
export type { PyramidRegularProps };
