import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CrownRegularDuotone = memo(
  forwardRef<SVGSVGElement, CrownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.42 16.45a2.3 2.3 0 0 1 1.33 2.05v1c0 .97-.78 1.75-1.75 1.75H6c-.97 0-1.75-.78-1.75-1.75v-1c0-.91.54-1.7 1.32-2.05l.2.75c.1.32.4.55.73.55a.75.75 0 0 0-.75.75v1c0 .14.11.25.25.25h12q.23-.02.25-.25v-1a.75.75 0 0 0-.75-.75c.34 0 .64-.23.72-.55z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.25a2.25 2.25 0 0 1 .98 4.27l1.8 5.01c.05.16.23.22.37.13l3.3-2.24a2.24 2.24 0 0 1 2.05-3.17 2.25 2.25 0 1 1-.51 4.44l-1.77 6.5a.75.75 0 0 1-.72.56h-11a.75.75 0 0 1-.72-.55L4 10.69a2.25 2.25 0 1 1 1.54-1.27l3.3 2.24c.14.09.32.03.38-.13l1.79-5A2.25 2.25 0 0 1 12 2.24m-1.36 9.79a1.75 1.75 0 0 1-2.63.86l-2.26-1.53 1.32 4.88h9.86l1.32-4.88-2.26 1.53c-.95.64-2.25.21-2.63-.86L12 8.23zM3.5 7.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m17 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-8.5-4a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CrownRegularDuotone.displayName = 'CrownRegularDuotone';

// Triple export pattern (lucide-react style)
export { CrownRegularDuotone, CrownRegularDuotone as CrownRegularDuotoneIcon, CrownRegularDuotone as SiCrownRegularDuotone };
export default CrownRegularDuotone;
export type { CrownRegularDuotoneProps };
