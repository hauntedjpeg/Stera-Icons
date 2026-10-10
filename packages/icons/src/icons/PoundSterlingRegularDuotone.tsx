import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingRegularDuotone = memo(
  forwardRef<SVGSVGElement, PoundSterlingRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 11.75c.41 0 .75.34.75.75s-.34.75-.75.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M9.25 16.76c0 1.3-.8 2.3-1.6 2.99H19c.41 0 .75.34.75.75s-.34.75-.75.75H5c-.36 0-.67-.25-.74-.6-.06-.36.13-.71.46-.85h.03l.1-.05.36-.17c.3-.16.7-.39 1.1-.68.83-.62 1.44-1.36 1.44-2.14v-3.51h1.5zM12.02 2.8c2.29-.31 4.95.66 6.61 3.25.22.35.12.82-.23 1.04s-.8.12-1.03-.23c-1.34-2.09-3.43-2.8-5.14-2.57-1.73.25-2.98 1.4-2.98 3.1v4.36h-1.5V7.39c0-2.62 2-4.26 4.27-4.58" />
    </IconBase>
  ))
);

PoundSterlingRegularDuotone.displayName = 'PoundSterlingRegularDuotone';

// Triple export pattern
export { PoundSterlingRegularDuotone, PoundSterlingRegularDuotone as PoundSterlingRegularDuotoneIcon, PoundSterlingRegularDuotone as SiPoundSterlingRegularDuotone };
export default PoundSterlingRegularDuotone;
export type { PoundSterlingRegularDuotoneProps };
