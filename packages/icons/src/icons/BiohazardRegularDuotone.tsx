import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BiohazardRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BiohazardRegularDuotone = memo(
  forwardRef<SVGSVGElement, BiohazardRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 7.25a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5m0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M13.58 18.53a4.24 4.24 0 0 0 5.55 1.15.75.75 0 0 1 .74 1.3A5.75 5.75 0 0 1 12 18.84a5.7 5.7 0 0 1-7.87 2.14.75.75 0 1 1 .75-1.3 4.25 4.25 0 0 0 5.53-1.15 6 6 0 0 0 3.17 0" />
        <path fillRule="evenodd" d="M15.17 10.16q.64.73.92 1.69a4.24 4.24 0 0 0-3.34 4.21l.01.27q.04.42.15.82a4 4 0 0 1-1.82 0 4.3 4.3 0 0 0-.4-3.28 4.2 4.2 0 0 0-2.78-2.02q.28-.96.92-1.69a4.24 4.24 0 0 0 6.33 0" clipRule="evenodd" />
        <path d="M6.95 10.25q-.4.73-.57 1.54A4.24 4.24 0 0 0 2.75 16a.75.75 0 0 1-1.5.07V16a5.75 5.75 0 0 1 5.7-5.75M17.05 10.25a5.7 5.7 0 0 1 5.7 5.75.75.75 0 0 1-1.5 0 4.25 4.25 0 0 0-3.63-4.2 6 6 0 0 0-.57-1.55M9.12 2.35a.75.75 0 0 1 .76 1.3 4.25 4.25 0 0 0-1.85 5.2q-.6.57-1.03 1.31a5.7 5.7 0 0 1 2.12-7.81M13.85 2.62a.75.75 0 0 1 1.03-.27A5.75 5.75 0 0 1 17 10.16a6 6 0 0 0-1.03-1.32 4.24 4.24 0 0 0-1.85-5.2.75.75 0 0 1-.27-1.02" />
    </IconBase>
  ))
);

BiohazardRegularDuotone.displayName = 'BiohazardRegularDuotone';

// Triple export pattern (lucide-react style)
export { BiohazardRegularDuotone, BiohazardRegularDuotone as BiohazardRegularDuotoneIcon, BiohazardRegularDuotone as SiBiohazardRegularDuotone };
export default BiohazardRegularDuotone;
export type { BiohazardRegularDuotoneProps };
