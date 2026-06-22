import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StethoscopeRegularProps = Omit<IconBaseProps, 'children'>;

const StethoscopeRegular = memo(
  forwardRef<SVGSVGElement, StethoscopeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2.75c.41 0 .75.34.75.75v.25H12a2.75 2.75 0 0 1 2.75 2.75V10c0 3.18-2.37 5.8-5.44 6.2a4.25 4.25 0 0 0 4.19 3.55h.25a4.5 4.5 0 0 0 4.5-4.5v-1.1a2.75 2.75 0 1 1 1.5 0v1.1a6 6 0 0 1-6 6h-.25a5.75 5.75 0 0 1-5.7-5.04A6.25 6.25 0 0 1 2.24 10V6.5A2.75 2.75 0 0 1 5 3.75h.25V3.5a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0v-.25H5c-.69 0-1.25.56-1.25 1.25V10a4.75 4.75 0 0 0 9.5 0V6.5c0-.69-.56-1.25-1.25-1.25h-.25v.25a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75m8 7.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

StethoscopeRegular.displayName = 'StethoscopeRegular';

// Triple export pattern (lucide-react style)
export { StethoscopeRegular, StethoscopeRegular as StethoscopeRegularIcon, StethoscopeRegular as SiStethoscopeRegular };
export default StethoscopeRegular;
export type { StethoscopeRegularProps };
