import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BiohazardRegularProps = Omit<IconBaseProps, 'children'>;

const BiohazardRegular = memo(
  forwardRef<SVGSVGElement, BiohazardRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.85 2.62a.75.75 0 0 1 1.03-.27A5.75 5.75 0 0 1 17 10.16l.05.1a5.7 5.7 0 0 1 5.7 5.74.75.75 0 0 1-1.5 0 4.25 4.25 0 0 0-3.63-4.2 5.77 5.77 0 0 1-4.04 6.73 4.24 4.24 0 0 0 5.55 1.15.75.75 0 0 1 .74 1.3A5.75 5.75 0 0 1 12 18.84a5.7 5.7 0 0 1-7.87 2.14.75.75 0 1 1 .75-1.3 4.25 4.25 0 0 0 5.53-1.15 5.75 5.75 0 0 1-4.03-6.74A4.24 4.24 0 0 0 2.75 16a.75.75 0 0 1-1.5.07V16a5.75 5.75 0 0 1 5.7-5.75l.05-.09a5.7 5.7 0 0 1 2.12-7.81.75.75 0 0 1 .76 1.3 4.25 4.25 0 0 0-1.85 5.2 5.73 5.73 0 0 1 7.94 0 4.24 4.24 0 0 0-1.85-5.2.75.75 0 0 1-.27-1.03m-5.94 9.23a4.25 4.25 0 0 0 3.18 5.3 4.3 4.3 0 0 0-.4-3.28 4.2 4.2 0 0 0-2.78-2.02m8.18 0a4.24 4.24 0 0 0-3.34 4.21l.01.27q.04.42.15.82a4.25 4.25 0 0 0 3.18-5.3M12 8.75c-1.26 0-2.39.55-3.17 1.41a4.24 4.24 0 0 0 6.33 0A4.2 4.2 0 0 0 12 8.75" clipRule="evenodd" />
    </IconBase>
  ))
);

BiohazardRegular.displayName = 'BiohazardRegular';

// Triple export pattern (lucide-react style)
export { BiohazardRegular, BiohazardRegular as BiohazardRegularIcon, BiohazardRegular as SiBiohazardRegular };
export default BiohazardRegular;
export type { BiohazardRegularProps };
