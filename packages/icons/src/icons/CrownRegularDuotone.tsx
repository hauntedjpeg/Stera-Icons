import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CrownRegularDuotone = memo(
  forwardRef<SVGSVGElement, CrownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.42 16.45c.79.35 1.33 1.14 1.33 2.05v1c0 .97-.78 1.75-1.75 1.75H6c-.97 0-1.75-.78-1.75-1.75v-1c0-.91.54-1.7 1.32-2.05l.2.75c.1.32.4.55.73.55-.41 0-.75.34-.75.75v1c0 .14.11.25.25.25h12q.23-.02.25-.25v-1c0-.41-.34-.75-.75-.75.34 0 .64-.23.72-.55z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.25c1.24 0 2.25 1 2.25 2.25 0 .89-.52 1.66-1.27 2.02l1.8 5.01c.05.16.23.22.37.13l3.3-2.24q-.2-.43-.2-.92c0-1.24 1-2.25 2.25-2.25 1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25q-.27 0-.51-.06l-1.77 6.5c-.08.33-.38.56-.72.56h-11c-.34 0-.63-.23-.72-.55L4 10.69q-.24.06-.51.06c-1.24 0-2.25-1-2.25-2.25 0-1.24 1-2.25 2.25-2.25 1.24 0 2.25 1 2.25 2.25q0 .5-.2.92l3.3 2.24c.14.09.32.03.38-.13l1.79-5c-.75-.37-1.27-1.14-1.27-2.03 0-1.24 1-2.25 2.25-2.25m-1.36 9.79c-.38 1.07-1.68 1.5-2.63.86l-2.26-1.53 1.32 4.88h9.86l1.32-4.88-2.26 1.53c-.95.64-2.25.21-2.63-.86L12 8.23zM3.5 7.75c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75m17 0c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75m-8.5-4c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75" clipRule="evenodd" />
    </IconBase>
  ))
);

CrownRegularDuotone.displayName = 'CrownRegularDuotone';

// Triple export pattern
export { CrownRegularDuotone, CrownRegularDuotone as CrownRegularDuotoneIcon, CrownRegularDuotone as SiCrownRegularDuotone };
export default CrownRegularDuotone;
export type { CrownRegularDuotoneProps };
