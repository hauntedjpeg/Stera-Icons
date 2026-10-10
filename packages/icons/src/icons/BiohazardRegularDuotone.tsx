import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BiohazardRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BiohazardRegularDuotone = memo(
  forwardRef<SVGSVGElement, BiohazardRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 7.25c3.18 0 5.75 2.57 5.75 5.75s-2.57 5.75-5.75 5.75S6.25 16.18 6.25 13 8.82 7.25 12 7.25m0 1.5c-2.35 0-4.25 1.9-4.25 4.25s1.9 4.25 4.25 4.25 4.25-1.9 4.25-4.25-1.9-4.25-4.25-4.25" clipRule="evenodd" opacity={.4} />
        <path d="M13.58 18.53q.5.69 1.3 1.15c1.36.79 2.97.73 4.24 0 .36-.2.82-.08 1.03.28.2.35.08.81-.28 1.02-1.71.99-3.9 1.06-5.75 0-.92-.53-1.63-1.28-2.12-2.14-.49.86-1.2 1.6-2.12 2.14-1.85 1.06-4.04.99-5.75 0-.36-.2-.49-.67-.28-1.02.2-.36.67-.49 1.02-.28 1.28.73 2.9.79 4.26 0q.78-.46 1.28-1.15.76.21 1.59.22.83 0 1.58-.22" />
        <path fillRule="evenodd" d="M15.17 10.16q.64.73.92 1.69c-1.13.24-2.15.95-2.77 2.02-.38.65-.56 1.36-.57 2.05v.14l.01.27q.04.42.15.82-.45.1-.91.1t-.91-.1q.15-.53.16-1.09v-.14q-.01-1.06-.57-2.05c-.62-1.07-1.64-1.78-2.77-2.02q.28-.96.92-1.69c.78.87 1.91 1.42 3.17 1.42q1.18 0 2.12-.57.6-.34 1.05-.85" clipRule="evenodd" />
        <path d="M6.95 10.25q-.4.73-.57 1.54-.79.12-1.5.53C3.5 13.1 2.75 14.53 2.75 16c0 .41-.34.75-.75.75-.39 0-.7-.3-.75-.68V16c0-1.98 1.03-3.92 2.88-4.98.89-.52 1.86-.76 2.82-.77M17.05 10.25c.96 0 1.93.25 2.82.77 1.85 1.06 2.88 3 2.88 4.98 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.47-.76-2.9-2.13-3.68q-.71-.41-1.5-.53-.17-.81-.57-1.54M9.12 2.35c.36-.2.82-.08 1.03.27.2.36.08.82-.28 1.03-1.27.74-2.12 2.1-2.12 3.68q0 .8.28 1.51-.6.58-1.03 1.32c-.48-.83-.75-1.8-.75-2.83 0-2.13 1.16-3.99 2.87-4.98M13.85 2.62c.2-.35.67-.48 1.03-.27 1.71 1 2.87 2.85 2.87 4.98 0 1.03-.28 2-.75 2.83q-.43-.74-1.03-1.32.27-.71.28-1.5c0-1.58-.85-2.96-2.13-3.7-.35-.2-.48-.66-.27-1.02" />
    </IconBase>
  ))
);

BiohazardRegularDuotone.displayName = 'BiohazardRegularDuotone';

// Triple export pattern
export { BiohazardRegularDuotone, BiohazardRegularDuotone as BiohazardRegularDuotoneIcon, BiohazardRegularDuotone as SiBiohazardRegularDuotone };
export default BiohazardRegularDuotone;
export type { BiohazardRegularDuotoneProps };
