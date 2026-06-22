import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StethoscopeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const StethoscopeRegularDuotone = memo(
  forwardRef<SVGSVGElement, StethoscopeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.75 15.25a6 6 0 0 1-6 6h-.25a5.75 5.75 0 0 1-5.7-5.04 6 6 0 0 0 1.5-.01 4.25 4.25 0 0 0 4.2 3.55h.25a4.5 4.5 0 0 0 4.5-4.5v-1.1a3 3 0 0 0 1.5 0z" opacity={.4} />
        <path d="M11 2.75c.41 0 .75.34.75.75v.25H12a2.75 2.75 0 0 1 2.75 2.75V10a6.25 6.25 0 1 1-12.5 0V6.5A2.75 2.75 0 0 1 5 3.75h.25V3.5a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0v-.25H5c-.69 0-1.25.56-1.25 1.25V10a4.75 4.75 0 0 0 9.5 0V6.5c0-.69-.56-1.25-1.25-1.25h-.25v.25a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M19 8.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

StethoscopeRegularDuotone.displayName = 'StethoscopeRegularDuotone';

// Triple export pattern (lucide-react style)
export { StethoscopeRegularDuotone, StethoscopeRegularDuotone as StethoscopeRegularDuotoneIcon, StethoscopeRegularDuotone as SiStethoscopeRegularDuotone };
export default StethoscopeRegularDuotone;
export type { StethoscopeRegularDuotoneProps };
