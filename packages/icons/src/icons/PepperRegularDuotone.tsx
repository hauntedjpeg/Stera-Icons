import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PepperRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PepperRegularDuotone = memo(
  forwardRef<SVGSVGElement, PepperRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m10.74 7.19-.02.14c-.06.73.36 1.39.85 1.92-1.25 2.96-2.76 4.72-4.43 6.67-.7.82-1.43 1.66-2.2 2.66-.13.17-.24.54-.17.86.06.24.24.57.94.73.77.18 1.83.05 3.1-.42a21.32 21.32 0 0 0 9.05-7.14c.83.1 1.73-.07 2.26-.94l.04-.08c-1.13 2.54-3.76 5.27-6.55 7.23-1.4 1-2.89 1.82-4.29 2.33a7 7 0 0 1-3.95.49c-1.2-.28-1.87-1-2.06-1.88-.18-.79.07-1.6.45-2.1Q4.95 16.16 6 14.95c1.93-2.24 3.5-4.08 4.76-7.8l.02-.04z" opacity={.4} />
        <path fillRule="evenodd" d="M17.39 1.56a.75.75 0 0 1 1.04-.17q.89.63 1.18 1.42c.2.54.14 1.06-.02 1.5-.14.4-.39.74-.64 1.03a4.9 4.9 0 0 1 1.64 5.01 7 7 0 0 1-.47 1.32c-.62 1.02-1.74 1.07-2.69.87-.96-.21-2.07-.74-3.16-1.33a12 12 0 0 1-2.47-1.73c-.6-.57-1.15-1.31-1.08-2.15l.02-.14.05-.13.01-.01.01-.03.24-.46c.14-.24.36-.6.58-.83a5.4 5.4 0 0 1 6-1.2c.24-.21.46-.47.55-.74a.7.7 0 0 0 .02-.47c-.06-.17-.22-.41-.64-.7a.75.75 0 0 1-.17-1.06m0 4.52a3.9 3.9 0 0 0-4.68.68 3 3 0 0 0-.48.8c.04.15.18.43.6.84.5.48 1.26 1 2.16 1.5a11 11 0 0 0 2.76 1.17c.7.15.95.01 1.06-.15q.21-.5.33-.94a3.44 3.44 0 0 0-1.75-3.9" clipRule="evenodd" />
    </IconBase>
  ))
);

PepperRegularDuotone.displayName = 'PepperRegularDuotone';

// Triple export pattern
export { PepperRegularDuotone, PepperRegularDuotone as PepperRegularDuotoneIcon, PepperRegularDuotone as SiPepperRegularDuotone };
export default PepperRegularDuotone;
export type { PepperRegularDuotoneProps };
