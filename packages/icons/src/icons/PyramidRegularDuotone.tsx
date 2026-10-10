import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PyramidRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PyramidRegularDuotone = memo(
  forwardRef<SVGSVGElement, PyramidRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.08 3.09c.57.02 1.14.28 1.52.8l7.2 9.6c.7.92.47 2.23-.48 2.87l-7.21 4.8q-.52.34-1.11.34c.41 0 .75-.34.75-.75V19.6l6.73-4.5c.24-.15.3-.48.13-.7l-6.86-9.15V3.83c0-.38-.3-.7-.67-.74" opacity={.4} />
        <path fillRule="evenodd" d="M12 3.08c.41 0 .75.34.75.75v16.92c0 .41-.34.75-.75.75q-.6 0-1.11-.34l-7.2-4.8c-.96-.64-1.19-1.95-.5-2.87l7.2-9.6c.4-.54 1.01-.8 1.6-.8M4.4 14.4c-.18.23-.12.56.11.72l6.74 4.49V5.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PyramidRegularDuotone.displayName = 'PyramidRegularDuotone';

// Triple export pattern
export { PyramidRegularDuotone, PyramidRegularDuotone as PyramidRegularDuotoneIcon, PyramidRegularDuotone as SiPyramidRegularDuotone };
export default PyramidRegularDuotone;
export type { PyramidRegularDuotoneProps };
