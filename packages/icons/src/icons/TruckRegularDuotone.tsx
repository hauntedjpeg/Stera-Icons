import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TruckRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TruckRegularDuotone = memo(
  forwardRef<SVGSVGElement, TruckRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.75c1.52 0 2.75 1.23 2.75 2.75v.25h2.29c.47 0 .94.17 1.3.48l2.45 2.1c.6.52.96 1.29.96 2.09v3.83c0 1.1-.9 2-2 2h-.51l.01-.25q0-.67-.25-1.25h.75c.28 0 .5-.22.5-.5v-3.83q-.01-.57-.44-.95l-2.45-2.1q-.14-.12-.32-.12h-2.29V14q-.95.4-1.5 1.27V6.5c0-.69-.56-1.25-1.25-1.25H5c-.69 0-1.25.56-1.25 1.25v8c0 .37.16.7.4.92q-.37.68-.4 1.53c-.89-.46-1.5-1.38-1.5-2.45v-8c0-1.52 1.23-2.75 2.75-2.75z" opacity={0.4} />
        <path d="M13 15.75q-.25.57-.25 1.25l.01.25h-2.52l.01-.25q0-.67-.25-1.25z" opacity={0.4} />
        <path fillRule="evenodd" d="M7 13.75c1.8 0 3.25 1.46 3.25 3.25 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.48 0-.9.2-1.22.5q-.51.5-.53 1.25 0 .13.02.25c.12.85.85 1.5 1.73 1.5s1.61-.65 1.73-1.5l.02-.25q-.02-.75-.53-1.25c-.31-.3-.74-.5-1.22-.5M16 13.75c1.8 0 3.25 1.46 3.25 3.25 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.48 0-.9.2-1.22.5q-.51.5-.53 1.25 0 .13.02.25c.12.85.85 1.5 1.73 1.5s1.61-.65 1.73-1.5l.02-.25q-.02-.75-.53-1.25c-.31-.3-.74-.5-1.22-.5" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckRegularDuotone.displayName = 'TruckRegularDuotone';

// Triple export pattern
export { TruckRegularDuotone, TruckRegularDuotone as TruckRegularDuotoneIcon, TruckRegularDuotone as SiTruckRegularDuotone };
export default TruckRegularDuotone;
export type { TruckRegularDuotoneProps };
