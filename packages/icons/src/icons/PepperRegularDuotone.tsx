import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PepperRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PepperRegularDuotone = memo(
  forwardRef<SVGSVGElement, PepperRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m10.74 7.19-.02.14c-.06.73.36 1.39.85 1.92-1.25 2.96-2.76 4.72-4.43 6.67-.7.82-1.43 1.66-2.2 2.66-.13.17-.24.54-.17.86.06.24.24.57.94.73.77.18 1.83.05 3.1-.42 1.24-.46 2.6-1.22 3.93-2.15 2.04-1.43 3.9-3.24 5.11-5 .84.1 1.74-.06 2.27-.93l.04-.08c-1.13 2.54-3.76 5.27-6.55 7.23-1.4 1-2.89 1.82-4.29 2.33-1.38.51-2.77.76-3.95.49-1.2-.28-1.87-1-2.06-1.88-.18-.79.07-1.6.45-2.1Q4.95 16.16 6 14.95c1.93-2.24 3.5-4.08 4.76-7.8l.02-.04z" opacity={.4} />
        <path fillRule="evenodd" d="M17.39 1.56c.24-.33.7-.41 1.04-.17q.89.63 1.18 1.42c.2.54.14 1.06-.02 1.5-.14.4-.39.74-.64 1.03 1.49 1.24 2.12 3.18 1.64 5.01q-.16.62-.43 1.24l-.04.08c-.62 1.02-1.74 1.07-2.69.87-.96-.21-2.07-.74-3.16-1.33-.97-.53-1.84-1.12-2.47-1.73-.6-.57-1.15-1.31-1.08-2.15l.02-.14.05-.13.01-.01.01-.03.06-.11.18-.35c.14-.24.36-.6.58-.83 1.51-1.58 3.94-2.08 6-1.2.24-.21.46-.47.55-.74q.1-.25.02-.47c-.06-.17-.22-.41-.64-.7-.33-.25-.41-.72-.17-1.06m0 4.52c-1.57-.86-3.52-.53-4.68.68-.07.08-.2.29-.35.54l-.13.25c.04.16.18.44.6.85.5.48 1.26 1 2.16 1.5 1.07.58 2.02 1.01 2.76 1.17.7.15.95.01 1.06-.15q.21-.5.33-.94c.39-1.47-.27-3.08-1.75-3.9" clipRule="evenodd" />
    </IconBase>
  ))
);

PepperRegularDuotone.displayName = 'PepperRegularDuotone';

// Triple export pattern
export { PepperRegularDuotone, PepperRegularDuotone as PepperRegularDuotoneIcon, PepperRegularDuotone as SiPepperRegularDuotone };
export default PepperRegularDuotone;
export type { PepperRegularDuotoneProps };
