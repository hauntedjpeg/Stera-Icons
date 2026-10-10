import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StethoscopeRegularProps = Omit<IconBaseProps, 'children'>;

const StethoscopeRegular = memo(
  forwardRef<SVGSVGElement, StethoscopeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2.75c.41 0 .75.34.75.75v.25H12c1.52 0 2.75 1.23 2.75 2.75V10c0 3.18-2.37 5.8-5.44 6.2.33 2.01 2.08 3.55 4.19 3.55h.25c2.49 0 4.5-2.01 4.5-4.5v-1.1c-1.15-.33-2-1.4-2-2.65 0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75c0 1.26-.85 2.32-2 2.64v1.11c0 3.31-2.69 6-6 6h-.25c-2.94 0-5.36-2.2-5.7-5.04-3.12-.35-5.55-3-5.55-6.21V6.5c0-1.52 1.23-2.75 2.75-2.75h.25V3.5c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.25H5c-.69 0-1.25.56-1.25 1.25V10c0 2.62 2.13 4.75 4.75 4.75s4.75-2.13 4.75-4.75V6.5c0-.69-.56-1.25-1.25-1.25h-.25v.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75m8 7.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

StethoscopeRegular.displayName = 'StethoscopeRegular';

// Triple export pattern
export { StethoscopeRegular, StethoscopeRegular as StethoscopeRegularIcon, StethoscopeRegular as SiStethoscopeRegular };
export default StethoscopeRegular;
export type { StethoscopeRegularProps };
