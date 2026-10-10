import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StethoscopeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const StethoscopeRegularDuotone = memo(
  forwardRef<SVGSVGElement, StethoscopeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.75 15.25c0 3.31-2.69 6-6 6h-.25c-2.94 0-5.36-2.2-5.7-5.04q.34.04.7.04.4 0 .8-.05c.34 2.01 2.09 3.55 4.2 3.55h.25c2.49 0 4.5-2.01 4.5-4.5v-1.1q.36.1.75.1t.75-.1z" opacity={.4} />
        <path d="M11 2.75c.41 0 .75.34.75.75v.25H12c1.52 0 2.75 1.23 2.75 2.75V10c0 3.45-2.8 6.25-6.25 6.25S2.25 13.45 2.25 10V6.5c0-1.52 1.23-2.75 2.75-2.75h.25V3.5c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.25H5c-.69 0-1.25.56-1.25 1.25V10c0 2.62 2.13 4.75 4.75 4.75s4.75-2.13 4.75-4.75V6.5c0-.69-.56-1.25-1.25-1.25h-.25v.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M19 8.75c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75-2.75-1.23-2.75-2.75S17.48 8.75 19 8.75m0 1.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

StethoscopeRegularDuotone.displayName = 'StethoscopeRegularDuotone';

// Triple export pattern
export { StethoscopeRegularDuotone, StethoscopeRegularDuotone as StethoscopeRegularDuotoneIcon, StethoscopeRegularDuotone as SiStethoscopeRegularDuotone };
export default StethoscopeRegularDuotone;
export type { StethoscopeRegularDuotoneProps };
