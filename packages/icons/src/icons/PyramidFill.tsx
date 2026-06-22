import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PyramidFillProps = Omit<IconBaseProps, 'children'>;

const PyramidFill = memo(
  forwardRef<SVGSVGElement, PyramidFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.3 3.8a2.13 2.13 0 0 1 3.4 0l7.2 9.62c.74.97.5 2.36-.51 3.04l-7.21 4.8c-.72.48-1.65.48-2.36 0l-7.2-4.8a2.13 2.13 0 0 1-.53-3.04zm1.7.9a.4.4 0 0 0-.3.16l-7.2 9.6a.4.4 0 0 0 .08.54l7.21 4.8q.1.07.21.07z" clipRule="evenodd" />
    </IconBase>
  ))
);

PyramidFill.displayName = 'PyramidFill';

// Triple export pattern (lucide-react style)
export { PyramidFill, PyramidFill as PyramidFillIcon, PyramidFill as SiPyramidFill };
export default PyramidFill;
export type { PyramidFillProps };
