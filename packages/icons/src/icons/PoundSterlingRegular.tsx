import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingRegularProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingRegular = memo(
  forwardRef<SVGSVGElement, PoundSterlingRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.02 2.8c2.29-.31 4.95.66 6.61 3.25.22.35.12.82-.23 1.04s-.8.12-1.03-.23c-1.34-2.09-3.43-2.8-5.14-2.57-1.73.25-2.98 1.4-2.98 3.1v4.36H14c.41 0 .75.34.75.75s-.34.75-.75.75H9.25v3.5c0 1.3-.8 2.31-1.6 3H19c.41 0 .75.34.75.75s-.34.75-.75.75H5c-.36 0-.67-.25-.74-.6-.06-.36.13-.71.46-.85h.03l.1-.05.36-.17c.3-.16.7-.39 1.1-.68.83-.62 1.44-1.36 1.44-2.14v-3.51H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.75V7.39c0-2.62 2-4.26 4.27-4.58" />
    </IconBase>
  ))
);

PoundSterlingRegular.displayName = 'PoundSterlingRegular';

// Triple export pattern
export { PoundSterlingRegular, PoundSterlingRegular as PoundSterlingRegularIcon, PoundSterlingRegular as SiPoundSterlingRegular };
export default PoundSterlingRegular;
export type { PoundSterlingRegularProps };
