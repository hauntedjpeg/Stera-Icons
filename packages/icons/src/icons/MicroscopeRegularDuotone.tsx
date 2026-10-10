import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicroscopeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicroscopeRegularDuotone = memo(
  forwardRef<SVGSVGElement, MicroscopeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.25 7.25H11c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25H6.42c-1.92-1.41-3.17-3.68-3.17-6.25 0-4.28 3.47-7.75 7.75-7.75h1.25zM19 16.75c.41 0 .75.34.75.75s-.34.75-.75.75h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M20 19.75c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M16 1.75c2.07 0 3.75 1.68 3.75 3.75v4.75c0 1.1-.9 2-2 2h-.02l.02.25c0 .97-.78 1.75-1.75 1.75s-1.75-.78-1.75-1.75q0-.13.02-.25h-.02c-1.1 0-2-.9-2-2V5.5c0-2.07 1.68-3.75 3.75-3.75m0 1.5c-1.24 0-2.25 1-2.25 2.25v4.75c0 .28.22.5.5.5h3.5c.28 0 .5-.22.5-.5V5.5c0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

MicroscopeRegularDuotone.displayName = 'MicroscopeRegularDuotone';

// Triple export pattern
export { MicroscopeRegularDuotone, MicroscopeRegularDuotone as MicroscopeRegularDuotoneIcon, MicroscopeRegularDuotone as SiMicroscopeRegularDuotone };
export default MicroscopeRegularDuotone;
export type { MicroscopeRegularDuotoneProps };
