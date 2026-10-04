import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PepperRegularProps = Omit<IconBaseProps, 'children'>;

const PepperRegular = memo(
  forwardRef<SVGSVGElement, PepperRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.39 1.56a.75.75 0 0 1 1.04-.17q.89.63 1.18 1.42c.2.54.14 1.06-.02 1.5-.14.4-.39.74-.64 1.03a4.9 4.9 0 0 1 1.64 5q-.15.62-.43 1.25c-1.13 2.54-3.76 5.27-6.55 7.23-1.4 1-2.89 1.82-4.29 2.33a7 7 0 0 1-3.95.49c-1.2-.28-1.87-1-2.06-1.88-.18-.79.07-1.6.45-2.1Q4.95 16.16 6 14.95c1.93-2.24 3.5-4.08 4.76-7.79l.03-.09.01-.01q0-.01.02-.03.01-.05.05-.11l.19-.35c.13-.24.35-.6.57-.83a5.4 5.4 0 0 1 6-1.2c.24-.21.46-.47.55-.74a.7.7 0 0 0 .02-.47c-.06-.16-.22-.41-.64-.7a.75.75 0 0 1-.17-1.06m-5.82 7.68c-1.25 2.97-2.76 4.73-4.43 6.68-.7.82-1.43 1.66-2.2 2.66-.13.17-.24.54-.17.86.06.24.24.57.94.74q1.17.27 3.1-.43a21.33 21.33 0 0 0 9.05-7.14l-.43-.07c-.96-.21-2.07-.74-3.16-1.33a12 12 0 0 1-2.7-1.97m5.82-3.16a3.9 3.9 0 0 0-4.68.68 3 3 0 0 0-.48.8c.04.15.18.43.6.84.5.48 1.26 1 2.16 1.5a11 11 0 0 0 2.76 1.17c.71.15.95 0 1.06-.15q.23-.5.33-.94a3.44 3.44 0 0 0-1.75-3.9" clipRule="evenodd" />
    </IconBase>
  ))
);

PepperRegular.displayName = 'PepperRegular';

// Triple export pattern (lucide-react style)
export { PepperRegular, PepperRegular as PepperRegularIcon, PepperRegular as SiPepperRegular };
export default PepperRegular;
export type { PepperRegularProps };
