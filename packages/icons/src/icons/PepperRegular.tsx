import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PepperRegularProps = Omit<IconBaseProps, 'children'>;

const PepperRegular = memo(
  forwardRef<SVGSVGElement, PepperRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.39 1.56c.24-.33.7-.41 1.04-.17q.89.63 1.18 1.42c.2.54.14 1.06-.02 1.5-.14.4-.39.74-.64 1.03 1.48 1.23 2.12 3.17 1.64 5q-.15.62-.43 1.25c-1.13 2.54-3.76 5.27-6.55 7.23-1.4 1-2.89 1.82-4.29 2.33-1.38.52-2.77.76-3.95.49-1.2-.28-1.87-1-2.06-1.88-.18-.79.07-1.6.45-2.1Q4.95 16.16 6 14.95c1.93-2.24 3.5-4.08 4.76-7.79l.03-.09.01-.01q0-.01.02-.03.01-.05.05-.11l.19-.35c.13-.24.35-.6.57-.83 1.51-1.58 3.94-2.08 6-1.2.24-.21.46-.47.55-.74q.1-.25.02-.47c-.06-.16-.22-.41-.64-.7-.33-.25-.41-.72-.17-1.06m-5.82 7.68c-1.25 2.97-2.76 4.73-4.43 6.68-.7.82-1.43 1.66-2.2 2.66-.13.17-.24.54-.17.86.06.24.24.57.94.74q1.17.27 3.1-.43c1.24-.46 2.6-1.22 3.93-2.15 2.04-1.43 3.9-3.24 5.11-5l-.42-.06c-.96-.21-2.07-.74-3.16-1.33-.97-.53-1.84-1.12-2.47-1.73q-.12-.11-.23-.24m5.82-3.16c-1.57-.86-3.52-.53-4.68.68q-.12.13-.35.54l-.13.25c.04.16.18.44.6.85.5.48 1.26 1 2.16 1.5 1.07.58 2.02 1.01 2.76 1.17.71.15.95 0 1.06-.15q.23-.5.33-.94c.39-1.47-.27-3.08-1.75-3.9" clipRule="evenodd" />
    </IconBase>
  ))
);

PepperRegular.displayName = 'PepperRegular';

// Triple export pattern
export { PepperRegular, PepperRegular as PepperRegularIcon, PepperRegular as SiPepperRegular };
export default PepperRegular;
export type { PepperRegularProps };
