import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PyramidBoldProps = Omit<IconBaseProps, 'children'>;

const PyramidBold = memo(
  forwardRef<SVGSVGElement, PyramidBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.2 3.73c.9-1.2 2.7-1.2 3.6 0l7.2 9.61c.78 1.04.53 2.51-.55 3.23l-7.2 4.8c-.76.5-1.74.5-2.5 0l-7.2-4.8a2.25 2.25 0 0 1-.56-3.23zM4.6 14.54a.25.25 0 0 0 .05.36L11 19.13V6zm8.4 4.6 6.35-4.24a.25.25 0 0 0 .06-.36L13 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

PyramidBold.displayName = 'PyramidBold';

// Triple export pattern (lucide-react style)
export { PyramidBold, PyramidBold as PyramidBoldIcon, PyramidBold as SiPyramidBold };
export default PyramidBold;
export type { PyramidBoldProps };
